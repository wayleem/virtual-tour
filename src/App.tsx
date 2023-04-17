import Home from './components/Home'
import Preview from './components/Preview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import VirtualTour from './components/VirtualTour'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/virtualtour' element={<VirtualTour />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App