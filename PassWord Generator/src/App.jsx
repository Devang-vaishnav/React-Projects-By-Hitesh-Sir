import { useCallback, useEffect, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const generatePassword = useCallback((pass) => {

      str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if(numberAllowed) str += '0123456789'
      if(specialCharAllowed) str += '!@#$%^&*/?~`:;{}[]()'

      for (let i = 0; i < length; i++) {
          pass += str[Math.floor(Math.random()*length)];
      }

      setPass(pass);
  },[length,numberAllowed,specialCharAllowed,setPass]);

  useEffect(generatePassword,[length,numberAllowed,specialCharAllowed,setPass]);

  return (
    
  )
}

export default App
