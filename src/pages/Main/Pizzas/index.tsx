import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getPizzas } from '../../../services/api'

import { SnackData } from '../../../interfaces/SnackData'

export default function Pizzas() {
  const [pizzas,setPizza] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas()

      setPizza(pizzaRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
