import { currencyFormat } from "../../../../Helpers/currencyFormat";

import { useCart } from "../../../../hooks/useCart"

import PlusImg  from "../../../../assets/circle-plus.svg"
import MinusImg from "../../../../assets/circle-minus.svg"


import { Container } from "./styles"

export function TableDesktop(){
  const {cart} = useCart();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr key={`${item.snack}-${item.id}`}>
                <td>
                  <img src={item.image} alt={item.name}/>
                </td>

                <td>
                  <h4>{item.name}</h4>
                  <span>{currencyFormat(item.price)}</span>
                </td>

                <td>
                  <div>
                    <button type="button" onClick={() => console.log(`Decrementar snack`, item)}>
                      <img src={MinusImg} alt="Remover qtd" />
                    </button>
                    <span>
                      {`${item.quantity}`.padStart(2, '0')}
                    </span>
                    <button type="button" onClick={() => console.log(`Aumentar snack`, item)}>
                      <img src={PlusImg} alt="Adicionar qtd" />
                    </button>
                  </div>
                </td>

                <td>
                  <h5>{currencyFormat(item.subtotal)}</h5>
                </td>

                <td>
                  Deletar
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
   )
}
