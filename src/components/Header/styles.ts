import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 12rem;
    
    button{
        padding: 0 2rem;
        background-color: var(--blue-light);
        color: white;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`