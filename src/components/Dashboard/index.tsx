import { useEffect } from "react";
import { api } from "../../services/api";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {

    const getMovies = async () => {
        const response = await api.get("/transactions");
        const {data} = response;
        console.log(data);
    }

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}