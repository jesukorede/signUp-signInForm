import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: var(--radius);
  background-color: ${props => props.secondary ? 'white' : 'var(--primary)'};
  color: ${props => props.secondary ? 'var(--gray-700)' : 'white'};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: ${props => props.secondary ? '1px solid var(--gray-300)' : 'none'};

  &:hover {
    background-color: ${props => props.secondary ? 'var(--gray-50)' : 'var(--primary-dark)'};
    transform: translateY(-2px);
    box-shadow: ${props => 
      props.secondary 
        ? '0 4px 8px rgba(0, 0, 0, 0.05)' 
        : '0 4px 8px rgba(124, 77, 255, 0.2)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PasswordToggle = styled.span`
  position: absolute;
  right: 15px;
  top: 40px;
  cursor: pointer;
  color: var(--gray-600);
  font-size: 14px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  color: var(--gray-600);
  font-size: 13px;
  font-weight: 500;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--gray-200);
  }

  &::before {
    margin-right: 15px;
  }

  &::after {
    margin-left: 15px;
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
  color: var(--gray-600);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      text-decoration: underline;
    }
  }
`;