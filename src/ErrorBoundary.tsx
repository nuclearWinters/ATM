import { Component, type ReactNode } from "react";

interface ErrorBoundaryState extends Error {
  source: string;
}

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: ErrorBoundaryState | null }
> {
  state = { error: null as ErrorBoundaryState | null };
  static getDerivedStateFromError(error: ErrorBoundaryState) {
    return {
      error,
    };
  }

  render() {
    if (this.state.error != null) {
      return (
        <div>
          <div>
            <div>Error: {this.state.error.message}</div>
          </div>
          <div>
            <pre>{JSON.stringify(this.state.error.source, null, 2)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
