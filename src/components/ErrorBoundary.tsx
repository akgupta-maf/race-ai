import { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <div className='error-content'>
            <i className='fas fa-exclamation-triangle mb-4 text-6xl text-(--color-warning)'></i>
            <h1>Oops! Something went wrong</h1>
            <p className='text-(--color-typography-secondary)'>
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              className='mt-3 inline-flex rounded-xl bg-(--color-primary) px-5 py-2.5 font-semibold text-white transition hover:bg-(--color-primary-80)'
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
