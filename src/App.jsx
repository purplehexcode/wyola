import { useState } from 'react'
import Content from './fragments/Content'
import Title from './fragments/Title'
import './App.css'

function App() {
  const [navOpen,setNavOpen] = useState(false)
  return (
    <div className='app'>
      <Title navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Content navOpen={navOpen}/>
    </div>
    
  )
}

export default App
