import React from 'react';

export default function Login({ onSwitchToSignUp }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login Screen</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="email" placeholder="Email" style={{ display: 'block', margin: '0.5rem auto' }} />
          <input type="password" placeholder="Password" style={{ display: 'block', margin: '0.5rem auto' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Log In</button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <button 
          type="button" 
          onClick={onSwitchToSignUp}
          style={{ background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}