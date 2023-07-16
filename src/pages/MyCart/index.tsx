import { Head } from "../../components/Head";

import { OrderHeader } from "../../components/OrderHeader";
import { Table } from "./Table";

import { Container } from "./styles";

export default function Main(){
  return (
  <Container>
    <Head title="carrinho"/>
    <OrderHeader></OrderHeader>
    <Table></Table>
  </Container>
  )
}
