
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/homepage'
import Form from './components/form'
import Edit from './components/edit'


function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
