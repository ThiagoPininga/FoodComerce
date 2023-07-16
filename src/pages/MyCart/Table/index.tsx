import { useCart } from "../../../hooks/useCart";

import { TableDesktop } from "./tableDesktop";

export function Table(){
  const {cart} = useCart()

  if(cart.length === 0) return <h1>Ops! parece que você não adicionou nenhum item a seu carrinho ainda</h1>

  return <TableDesktop/>
}
