import React, { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/signup/SignUp/SignUp';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <main>
      {currentScreen === 'login' ? (
        <Login onSwitchToSignUp={() => setCurrentScreen('signup')} />
      ) : (
        <SignUp onSwitchToLogin={() => setCurrentScreen('login')} />
      )}
    </main>
  );
}

export default App;s