import React, { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('SignUp');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {currentScreen === 'login' ? (
        <Login onSwitchToSignUp={() => setCurrentScreen('signup')} />
      ) : (
        <SignUp onSwitchToLogin={() => setCurrentScreen('login')} />
      )}
    </main>
  );
}