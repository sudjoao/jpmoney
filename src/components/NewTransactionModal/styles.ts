import styled from "styled-components";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    input{
        background-color: var(--background);
        width: 100%;
        height: 4rem;
        border: 1px solid #D7D7D7;
        border-radius: 0.3rem;
        padding: 1.25rem 1.5rem;
        font-size: 1rem;
        margin-top: 1rem;

        &::placeholder{
            color: var(--text-body);
        }
    }

    button[type="submit"]{
        width: 100%;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        height: 4rem;
        border: none;
        border-radius: 0.3rem;
        background-color: var(--green);
        color: var(--shape);
        font-weight: 600;
        font-size: 1rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`