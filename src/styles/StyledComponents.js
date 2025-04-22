import styled, { keyframes } from 'styled-components';

// Animation for form transitions
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container for the form
export const FormContainer = styled.div`
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 420px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);

  // Gradient line at the top
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

// Form element with animation
export const StyledForm = styled.form`
  animation: ${fadeInUp} 0.5s ease;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

// Logo container
export const Logo = styled.div`
  color: var(--primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
    width: 28px;
    height: 28px;
  }
`;

// Welcome text
export const WelcomeText = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 30px;
  text-align: center;
`;

// Form group wrapper
export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

// Input label
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--gray-700);
  font-weight: 500;
`;

// Input field
export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${props => props.error ? 'var(--error)' : 'var(--gray-300)'};
  border-radius: var(--radius);
  font-size: 15px;
  transition: var(--transition);
  background-color: var(--gray-50);

  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(124, 77, 255, 0.2);
    background-color: white;
  }
`;

// Error message
export const ErrorMessage = styled.span`
  color: var(--error);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

// Success message
export const SuccessMessage = styled.div`
  background-color: rgba(76, 175, 80, 0.1);
  color: var(--success);
  padding: 12px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  border-left: 4px solid var(--success);
`;
