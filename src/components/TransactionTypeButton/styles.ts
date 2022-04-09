import { darken, transparentize } from "polished";
import styled from "styled-components";


interface IButtonContainerProps {
    isSelected: boolean;
    activeColor: 'green' | 'red';
}
const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}
export const TransactionTypeButtonContainer = styled.button<IButtonContainerProps>`
    border: 1.5px solid #D7D7D7;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: ${(props) => props.isSelected ?
        transparentize(0.9, colors[props.activeColor]) :
        'transparent'
    };

    transition: border-color 0.2s;
    &:hover{
        border-color: ${darken(0.1, "#D7D7D7")};
    }
    
    img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }
    span{
        color: var(--text-title);
        font-size: 1rem;
    }
`