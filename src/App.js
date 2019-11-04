import React from 'react';
import Header from './components/header/header'
import Card from './components/card/card';

import { data } from './data';

const App = () => {
  return (
    <div className='container'>
      <Header />
      {data.map(item => {
        const { author, content, description, title, id } = item;
        return <Card key={id} author={author} content={content} description={description} title={title}/>
      })}
    </div>
  )
}

export default App;