import React from 'react';
import './App.css';
import {useAuth} from 'context/auth-context'
import {AuthenticatedApp} from 'authenticated-app'
import {UnauthenticatedApp} from 'unauthenticated-app'
import {FullPageErrorFallBack} from 'components/lib'
import { ErrorBoundary } from 'components/error-boundary';

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
      </ErrorBoundary>
    </div>
  );
}

export default App;
