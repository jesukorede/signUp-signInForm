import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormWrapper = styled.div`
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 420px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
`;

function App() {
  const [currentForm, setCurrentForm] = useState('signin');

  const renderForm = () => {
    switch(currentForm) {
      case 'signup':
        return <SignUpForm onShowSignIn={() => setCurrentForm('signin')} />;
      case 'forgot':
        return <ForgotPasswordForm onShowSignIn={() => setCurrentForm('signin')} />;
      default:
        return (
          <SignInForm 
            onShowSignUp={() => setCurrentForm('signup')}
            onShowForgot={() => setCurrentForm('forgot')}
          />
        );
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <FormWrapper>
          {renderForm()}
        </FormWrapper>
      </Container>
    </>
  );
}

export default App;