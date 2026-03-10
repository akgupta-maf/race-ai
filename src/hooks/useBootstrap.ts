// Bootstrap JavaScript initialization
import { useEffect } from 'react';

export const useBootstrap = (): void => {
  useEffect(() => {
    // Load Bootstrap's JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch((error) => {
        console.error('Failed to load Bootstrap JS:', error);
      });
  }, []);
};

export default useBootstrap;
