import React from 'react'
import Section from 'components/Section/Section'
import Books from 'components/Section/Books'
import songs from 'data/songs'
import collections from 'data/Collections'

const Home = () => {

  return (
    <div>
<Books 
title="Gunoooo"
collection={collections}/>

      <Section 
      title="En çok dinlediğin mix'ler"
      items={songs}/>

<Section 
      title="Çalma listelerin"
      items={songs}/>

<Section 
      title="En sevdiğin sanatçılar"
      items={songs}/>
    </div>
  )
}

export default Home
