import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import { TransactionTypeButton } from "../TransactionTypeButton";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";


interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
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
                    <TransactionTypeButton type="income" onButtonPressed={() => { }} img={incomeImg} />
                    <TransactionTypeButton type="outcome" onButtonPressed={() => { }} img={outcomeImg} />
                </TransactionTypeContainer>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}