import React from 'react'
import { onGetPaymentConnected } from '@/actions/settings'
import InfoBar from '@/components/infobar'
import IntegrationsList from '@/components/integrations'

const Connections = async () => {


  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }

  return (
    <> 
    <InfoBar />
      <IntegrationsList connections={connections} />

    </>
  )
   
}

export default Connections