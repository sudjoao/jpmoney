import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        thead{
        }
    
        th{
            color: var(--text-body);
            font-weight: 400;
            font-size: 1rem;
            text-align: left;
            padding: 1.25rem 2rem;
            line-height: 1.5rem;
        }
        td{
            background: var(--shape);
            color: var(--text-body);
            border: 0;
            padding: 1.25rem 2rem;
            border-radius: 0.25rem;
            
            &:first-child{
                color: var(--text-title); 
            }

            &.outcome{
                color: var(--red);
            }

            &.income{
                color: var(--green);
            }
        }
    }
`