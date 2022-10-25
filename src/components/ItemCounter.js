import React from 'react'

export default function ItemCounter({ quantity }) {
  return (
    <div className='counter-container'>
        <button>&minus;</button>
        <div className='quantity-display'>{quantity}</div>
        <button>&#43;</button>
    </div>
  )
}
