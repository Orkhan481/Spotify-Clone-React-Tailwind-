import React from 'react'
import Books from 'components/Section/Books'
import collections from 'data/Collections'

const Collection = () => {
  return (
    <div>
     <Books 
title="Gunoooo"
collection={collections}/>
    </div>
  )
}

export default Collection
