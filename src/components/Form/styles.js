import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 70%;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FormField = styled.div`
  width: 100%;
  margin-right: 40px;
  font-family: 'Raleway', sans-serif;
  
  &:last-child {
    margin-right: 0;
  }
`;