import Home from './components/Home'
import Preview from './components/Preview'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import VirtualTour from './components/VirtualTour'


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/virtualtour' element={<VirtualTour />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App