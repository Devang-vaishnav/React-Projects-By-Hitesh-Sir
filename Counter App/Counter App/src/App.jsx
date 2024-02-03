import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    if (counter < 20) {
      setCounter(counter + 1) 
    }
  }

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const toGetPrevState = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)   // Even if use these four setCounter together it does not update our counter to counter + 4 when we click on a button. Because fibre sends these request in batches. So it checks that the same request is calling again so it advances to last request to send it together.
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1) // This way we can access prevState and this will update our counter to +4 when we click on button.
    // setCounter(prevCounter => prevCounter+1)
  }

  return (
    <div className= "bg-black h-screen w-screen flex justify-center items-center">
      <div>
      <h1 className="text-white font-bold text-4xl mb-7">Counter : {counter}</h1>
      <button className="text-white mr-12 font-bold text-2xl border-solid border-2 p-2" onClick={increase}>Increase</button>
      {/* <button className="text-white mr-12 font-bold text-2xl border-solid border-2 p-2" onClick={toGetPrevState}>Increase</button> */}
      <button className="text-white font-bold text-2xl border-solid border-2 p-2" onClick={decrease}>decrease</button>
      </div>
    </div>
  )
}

export default App
