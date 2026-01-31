import styled from "styled-components";

const Input = styled.input`
  border: 1px solid grey;
  background-color: #d1d1d133;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  color: var(--color-grey-700);

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 2px var(--color-brand-100);
  }

  &::placeholder {
    color: var(--color-grey-400);
  }

  &:disabled {
    background-color: var(--color-grey-100);
    cursor: not-allowed;
  }
`;

export default Input;
