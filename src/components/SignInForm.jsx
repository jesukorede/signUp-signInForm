import React, { useState } from 'react';
import { Logo, WelcomeText, FormGroup, Label, Input, ErrorMessage, SuccessMessage } from '../styles/StyledComponents';
import { Button, PasswordToggle, Divider, FormFooter } from '../styles/ButtonComponents';

const SignInForm = ({ onShowSignUp, onShowForgot }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: '', type: '' });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setMessage({ text: 'Signing in...', type: 'success' });
      
      setTimeout(() => {
        setMessage({ text: 'Welcome back! Redirecting...', type: 'success' });
      }, 1500);
    }
  };

  const handleGoogleSignIn = () => {
    setMessage({ text: 'Redirecting to Google...', type: 'success' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Logo>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        Flowva
      </Logo>

      <WelcomeText>Welcome back</WelcomeText>

      {message.text && (
        <SuccessMessage>{message.text}</SuccessMessage>
      )}

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type={formData.showPassword ? 'text' : 'password'}
          id="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
        />
        <PasswordToggle
          onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
        >
          {formData.showPassword ? 'Hide' : 'Show'}
        </PasswordToggle>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </FormGroup>

      <div onClick={onShowForgot} style={{ cursor: 'pointer', textAlign: 'right', marginBottom: '20px' }}>
        <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
      </div>

      <Button type="submit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
          <polyline points="10 17 15 12 10 7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
        Sign in
      </Button>

      <Divider>or continue with</Divider>

      <Button type="button" secondary onClick={handleGoogleSignIn}>
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Google
      </Button>

      <FormFooter>
        Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onShowSignUp(); }}>Sign up</a>
      </FormFooter>
    </form>
  );
};

export default SignInForm;