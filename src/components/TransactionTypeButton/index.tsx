import { TransactionTypeButtonContainer } from "./styles";

interface ITransactionTypeButtonProps{
    img: string;
    onButtonPressed: ()=> void;
    type: "income" | "outcome";
}
export function TransactionTypeButton({img, onButtonPressed, type} : ITransactionTypeButtonProps){
    return(
        <TransactionTypeButtonContainer onClick={onButtonPressed}>
            <img src={img} alt={type} />
            <span>{type==="income" ? "Entrada" : "Saída"}</span>
        </TransactionTypeButtonContainer>
    )
}