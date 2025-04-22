import React, { useState } from 'react';
import { Logo, WelcomeText, FormGroup, Label, Input, ErrorMessage, SuccessMessage } from '../styles/StyledComponents';
import { Button, FormFooter } from '../styles/ButtonComponents';

const ForgotPasswordForm = ({ onShowSignIn }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setMessage({ text: 'Sending reset link...', type: 'success' });
      
      setTimeout(() => {
        setMessage({ text: 'Reset link sent to your email', type: 'success' });
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Logo>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        Flowva
      </Logo>

      <WelcomeText>Reset your password</WelcomeText>

      {message.text && (
        <SuccessMessage>{message.text}</SuccessMessage>
      )}

      <FormGroup>
        <Label htmlFor="forgot-email">Email</Label>
        <Input
          type="email"
          id="forgot-email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormGroup>

      <Button type="submit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Send reset link
      </Button>

      <FormFooter>
        Remember your password? <a href="#" onClick={(e) => { e.preventDefault(); onShowSignIn(); }}>Sign in</a>
      </FormFooter>
    </form>
  );
};

export default ForgotPasswordForm;