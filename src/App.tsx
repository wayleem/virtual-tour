import Map from './components/Map'
import Preview from './components/Preview'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="relative w-screen h-screen">
        <Map />
        <Preview />
      </div>
    </Provider>
  )
}

export default App