/**
 * Service to check user access for protected resources
 */

interface UserRaceResponse {
  email: string;
  view_access: boolean;
}

interface AccessCheckResponse {
  hasAccess: boolean;
  message?: string;
  userId?: string;
}

export const accessCheckService = {
  /**
   * Check if a user has access to the Performance Tracking page
   * @param email User's email from Azure SSO
   * @returns Promise with access status and message
   */
  async verifyAccess(email: string): Promise<AccessCheckResponse> {
    try {
      if (!email) {
        return {
          hasAccess: false,
          message: 'Email is required for access verification',
        };
      }

      const encodedEmail = encodeURIComponent(email);
      const response = await fetch(
        `${import.meta.env.VITE_API_USER_URL}/api/race/users/verify?email=${encodedEmail}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 404) {
        return {
          hasAccess: false,
          message: 'User not found in the system',
        };
      }

      if (!response.ok) {
        if (response.status === 400) {
          return {
            hasAccess: false,
            message: 'Invalid email format',
          };
        }
        throw new Error(`Access check failed with status ${response.status}`);
      }

      const data: UserRaceResponse = await response.json();

      return {
        hasAccess: data.view_access === true,
        message: data.view_access
          ? undefined
          : 'Your account does not have access to this resource',
        userId: data.email,
      };
    } catch (error) {
      console.error('Access check error:', error);
      return {
        hasAccess: false,
        message: 'Failed to verify access. Please try again later.',
      };
    }
  },

  /**
   * Get access information for multiple resources
   * @param email User's email from Azure SSO
   * @param resources Array of resource IDs to check access for
   * @returns Promise with access information
   */
  async checkMultipleAccess(
    email: string,
    resources: string[],
  ): Promise<Record<string, boolean>> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_USER_URL}/api/performance-tracking/check-access-batch`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('auth_token') || ''}`,
          },
          body: JSON.stringify({ email, resources }),
        },
      );

      if (!response.ok) {
        throw new Error('Batch access check failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Batch access check error:', error);
      return resources.reduce(
        (acc, resource) => ({ ...acc, [resource]: false }),
        {},
      );
    }
  },
};
