import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size:0.8rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {


  primary: css`
  color: #ffffff; /* clean white text */
  background-color: #4f46e5; /* Indigo-600, vibrant but modern */
  border: 1px solid #4f46e5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); /* subtle depth */
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4338ca; /* Indigo-700 */
    border-color: #4338ca;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); /* slightly stronger shadow on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4); /* accessible focus ring */
  }

  &:active {
    transform: scale(0.97); /* subtle press effect */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #4f46e5;
    border-color: #4f46e5;
    box-shadow: none;
  }
`


  ,
  
  secondary: css`
  color: #374151; /* Gray-700, modern readable text */
  background-color: #f9fafb; /* Gray-50/0 soft background */
  border: 1px solid #d1d5db; /* Gray-300 border for subtle depth */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* subtle shadow for depth */

  &:hover {
    background-color: #f3f4f6; /* Gray-100 hover, slightly darker */
    border-color: #9ca3af; /* Gray-400 border on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.4); /* soft blue focus ring for accessibility */
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #9ca3af;
  }
`

  
  ,

  danger: css`
  color: #fff; /* clear text */
  background-color: #ef4444; /* Tailwind Red-500 equivalent, modern vibrant red */
  border: 1px solid #ef4444;

  &:hover {
    background-color: #dc2626; /* Red-600 for hover */
    border-color: #dc2626;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.4); /* soft red focus ring */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #ef4444;
    border-color: #ef4444;
  }
`

,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem; /* space for icons if needed */
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-family: inherit;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  &:active {
    transform: scale(0.97); /* subtle press effect */
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
