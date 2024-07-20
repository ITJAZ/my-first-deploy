import { useState } from 'react'


function App() {
  const [acValue, setAcValue] = useState('');

  return (
    <>
      <div>{acValue}</div>
    </>
  )
}

export default App
