import React from 'react';
import ImageCard from './components/ImageCard';

const App = () => {
  const children = [];
  for(let i=0; i<26; i++){
    children.push(<ImageCard key={`id-${i}`}/>);
  }
  
  return (
    <div className="px-4 py-6 grid grid-cols-4 gap-4">
      {children}
    </div>
  )
}

export default App;