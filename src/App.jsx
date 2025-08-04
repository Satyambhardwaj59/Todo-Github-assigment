import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar'
//import Todo from './pages/Todo';
//import Github from './pages/Github';
import Footer from './componentes/Footer';
import Body from './componentes/Body';
import { Provider } from "react-redux";
import store from './utils/appStore';
import ShimmerUI from './componentes/ShimmerUI';
import { lazy, Suspense } from 'react';

const Todo = lazy(() => import('./pages/Todo'));
const Github = lazy(() => import('./pages/Github'));

const App = () => {
  return (
    <div>
      <Provider store={store}>
        
          
          <Navbar />
          <Suspense fallback={<ShimmerUI/>}>
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/github' element={<Github />} />
          </Routes>
          </Suspense>
          <Footer />
       
      </Provider>
    </div>
  )
}

export default App
