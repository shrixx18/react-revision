import React from 'react'

import ItemList from './ItemList'
const Content = ({items, handleCheck, handleDelete}) => {
    
  return (
    <>
    {items.length ? (
       <ItemList 
         items = {items}
         handleCheck={handleCheck}
         handleDelete={handleDelete} />
       ) : (
        <p style={{ marginTop: '2rem'}}>
        <i>
        Your List is empty
        </i>
        </p>
       )} 
    </>
  )
}

export default Content