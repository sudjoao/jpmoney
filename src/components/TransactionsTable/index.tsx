import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="income">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>01/04/2022</td>
                    </tr>
                    <tr>
                        <td>iFood</td>
                        <td className="outcome">- R$ 100,00</td>
                        <td>Venda</td>
                        <td>01/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}