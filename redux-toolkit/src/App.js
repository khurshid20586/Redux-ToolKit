import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/nav-bar'
import Cart from './pages/cart'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
