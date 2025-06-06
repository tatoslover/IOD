function ErrorMessage({ error, resetErrorBoundary }) {
  console.error(error);
  // Call resetErrorBoundary to reset the error boundary and retry the render.
  // Will work for errors caused by changing state, but not syntax errors
  return (
    <div className="ErrorMessage componentBox">
      <h2>🚨 Oops! Something went wrong</h2>
      <p>An error occurred:</p>
      <pre className="error-details">{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>
        Try Again?
      </button>
    </div>
  );
}

export default ErrorMessage;