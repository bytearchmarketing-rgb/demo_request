import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0f0638] flex items-center justify-center px-6">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">
              We're experiencing technical difficulties. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-gradient-to-r from-[#4169ff] to-[#00d9ff] rounded-lg font-semibold text-white"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
