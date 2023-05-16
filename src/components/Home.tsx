import logo from '../assets/img/logo.png'
import Preview from './Preview'
import MapHome from './MapHome'
import { PreviewState } from '../types'
import { useSelector } from 'react-redux'

function Home() {
  const selected = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)

  return (
    <div className="h-[100%]">

      <div className=""> {/* header */}
        <div className="absolute z-10 max-w-[350px]">
          <img src={logo} />
          {selected && <span className="ml-2 p-1 bg-offwhite">Virtual Tour</span>}
        </div>

        <MapHome selected={selected?.id} />
      </div> {/* header */}


      <Preview selected={selected?.id} />

    </div>
  )
}

export default Home
