import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -5rem;
    gap: 2rem;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-weight: 500;
            font-size: 2.25rem;

        }
    }

    .hightlight-card{
        background: var(--green);
        color: #fff;
    }
`