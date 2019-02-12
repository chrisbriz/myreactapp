import React, { component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {

    }

    render() {
        return <h1>Something went wrong</h1>
    }
}