import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import { TransactionTypeButton } from "../TransactionTypeButton";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";


interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState("deposit")
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Nova Transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />
                <TransactionTypeContainer>
                    <TransactionTypeButton
                        type="deposit"
                        onButtonPressed={() => { setTransactionType('deposit') }}
                        img={incomeImg}
                        isSelected={transactionType === "deposit"}
                    />
                    <TransactionTypeButton
                        type="withdraw"
                        onButtonPressed={() => { setTransactionType('withdraw') }}
                        img={outcomeImg}
                        isSelected={transactionType === "withdraw"} 
                    />
                </TransactionTypeContainer>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}