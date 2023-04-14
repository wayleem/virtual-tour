import Map from './components/Map'
import Preview from './components/Preview'
import { Panorama } from './components/VirtualTour'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Map />} />
          <Route path='/virtualtour' element={<Panorama />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App