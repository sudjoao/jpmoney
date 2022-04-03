import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green: #33CC95;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.5%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .react-modal-content{
        background-color: var(--shape);
        max-width: 36rem;
        width: 100%;
        padding: 4rem 3rem;
        position: relative;
        border-radius: 0.3rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background-color: transparent;
        border: 0;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.7);
        }
    }
`