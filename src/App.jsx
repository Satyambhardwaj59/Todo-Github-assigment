import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import { ToastContainer } from 'react-toastify';
import Todo from './pages/Todo';
import Github from './pages/Github';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import { Provider } from "react-redux";
import store from './utils/appStore';
import ShimmerUI from './componentes/ShimmerUI';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ShimmerUI />} />

            <Route path='/todo' element={<Todo />} />
            <Route path='/github' element={<Github />} />
          </Routes>
          <Footer />
       
      </Provider>
    </div>
  )
}

export default App
