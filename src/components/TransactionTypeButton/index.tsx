import { TransactionTypeButtonContainer } from "./styles";

interface ITransactionTypeButtonProps{
    img: string;
    onButtonPressed: ()=> void; 
    type: "deposit" | "withdraw";
    isSelected: boolean;
}

export function TransactionTypeButton({img, onButtonPressed, type, isSelected} : ITransactionTypeButtonProps){
    return(
        <TransactionTypeButtonContainer
            type="button"
            isSelected={isSelected}
            onClick={onButtonPressed}
            activeColor={type==="deposit" ? "green" : "red"}
        >
            <img src={img} alt={type} />
            <span>{type==="deposit" ? "Entrada" : "Saída"}</span>
        </TransactionTypeButtonContainer>
    )
}