import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className='btn-home' >
                <img className="pic" src={props.data.image} alt="not there" />
                <div className='child11'>
                    <div><strong>{props.data.name}</strong></div>
                    <div>Description:{props.data.description}</div>
                    <div>Category:{props.data.category}</div>
                    <div>Quantity:{props.data.quantity}</div>
                    <div>Price:{props.data.price}</div>
                </div>
            </div>

        </>
    )
}