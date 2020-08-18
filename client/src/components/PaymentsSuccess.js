import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

export default function PaymentsSuccess({location: { state, }, }) {
    debugger
    if (state && state.transactionId)
    return (
        <Segment basic textAlign='center'>
            <Header as='h1' color='green'>Thank You For Your Purchase!</Header>
            <p>You have been succesfully charged: {state.amount}</p>
            <p>Your Transaction Id is: {state.transactionId}</p>
            <Link to='/'>Start Over</Link>
        </Segment>
    )
    else
    return(<Redirect to='/'/>)
}
