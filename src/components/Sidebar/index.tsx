import { Container } from "./styles"

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'

import menuImg from '../../assets/menu.svg'


export function Sidebar() {
  return <Container>
    <button type="button">
      <img src={menuImg} alt="Botão de Menu"></img>
    </button>

    <nav>
      <ul>
        <li>
          <a href="#" className="active">
            <BurgerIcon></BurgerIcon>
            <span>Hambúrgueres</span>
          </a>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </Container>
}
