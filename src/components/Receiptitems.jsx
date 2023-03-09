import React from 'react'

function Receiptitems(props) {
  return (
    <div className='checkBox'>
        <h2>{props.individualCheck.name}</h2>
        <h3>Main: {props.individualCheck.main}</h3>
        <h3>Protein: {props.individualCheck.protein}</h3>
        <h3>Rice: {props.individualCheck.rice}</h3>
        <h3>Sauce: {props.individualCheck.sauce}</h3>
        <h3>Cost: {props.individualCheck.cost}</h3>
        
    </div>
  )
}

export default Receiptitems