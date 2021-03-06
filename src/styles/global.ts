import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --black: #000;
    --title: #fdfdfd;
    --dark-gray: #212121;
    --light-gray: #757575;
    --background: #333;
    --red: #ff5252;
    --green: #8bc34a;
    --blue: #448aff;
  }

  @media (max-width: 1080px) {
    /* fonte de 15px */
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    /* fonte de 14px */
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);

    ::-webkit-scrollbar{
      width: 12px;
    }

    ::-webkit-scrollbar-thumb{
      background: linear-gradient(var(--background), var(--white));
      border-radius: 6px;
    }
  }

  body,
  input,
  textarea,
  button {
    font: 400 16px "Electrolize", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h5,
  span {
    font: 400 16px "Inter", sans-serif;
  }

  .container {
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;
  }

`;