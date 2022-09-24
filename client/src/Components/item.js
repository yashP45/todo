import React from 'react'
import '../App.css'
function Item({ text }) {
    return (
        <div className='item'>
            <div className='text'>{text}</div>
        </div>
    )
}

export default Item