import { useState } from 'react';
import Button from './components/Button.jsx';

function App() {
  const [color, setColor] = useState("black");
  const colors = ["Red","Yellow","Green","White","Violet","Indigo","Blue","Orange","Lavender","Pink","Grey"];

  const changeColor = (colour) => {
    setColor(colour);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{backgroundColor:color}}>
      <div className="h-20 bg-black flex justify-center items-center place-content-evenly rounded-lg">
        {colors.map((c,index) => 
        (<Button col= {c} key={index} changeColor={changeColor}/>)
        )}
      </div>
    </div>
  )
}

export default App
