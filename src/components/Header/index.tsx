import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface IHeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal} : IHeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="jpmoney" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}