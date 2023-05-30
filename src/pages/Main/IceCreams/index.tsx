/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react'

import { SnackContext } from '../../../contexts/SnackContext'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../hooks/useSnacks'

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
