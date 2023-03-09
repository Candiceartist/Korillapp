import React from 'react'
import Receiptitems from './Receiptitems'

function Receipts(props) {
  return (
    <div className="mainContainer">
       <Receiptitems individualCheck={props.checks.Karolin}/>
       <Receiptitems individualCheck={props.checks.Jerrica}/>
       <Receiptitems individualCheck={props.checks.Matt}/>
      
    </div>
  )
}

export default Receipts