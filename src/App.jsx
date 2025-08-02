import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import { ToastContainer } from 'react-toastify';
import Todo from './pages/Todo';
import Github from './pages/Github';
import Footer from './componentes/Footer';
import Home from './componentes/Home';

const App = () => {
  return (
    <div className='mx-4'>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/github' element={<Github/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
