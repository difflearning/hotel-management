import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* RESET */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* CSS VARIABLES */
  :root {
    /* Brand colors */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;

    /* Grey scale */
    --color-grey-0: #ffffff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-400: #9ca3af;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;

    /* Status colors */
    --color-green-700: #15803d;
    --color-red-700: #b91c1c;
  }

  /* BASE STYLES */
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f5f1f1ff;
    color: var(--color-grey-700);
    line-height: 1.6;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
