import React from 'react';

export default function SignUp({ onSwitchToLogin }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up Screen</h2>
      <button 
        type="button" 
        onClick={onSwitchToLogin}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Go to Login
      </button>
    </div>
  );
}