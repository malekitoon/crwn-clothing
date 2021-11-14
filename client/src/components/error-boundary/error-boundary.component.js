import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasErrored: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    if (hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
