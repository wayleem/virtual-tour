import logo from '../../public/assets/img/logo.png'
import Preview from './Preview'
import MapHome from './MapHome'
import { PreviewState } from '../types'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function Home() {
  const selected = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)

  return (
    <div className="h-[100%]">

      <div className=""> {/* header */}
        <div className="absolute z-10 max-w-[350px]">
          <img src={logo} className="w-[200px]" />
          {selected && <motion.span className="ml-3 p-1 bg-offwhite" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Virtual Tour</motion.span>}
        </div>

        <MapHome selected={selected?.id} />
      </div> {/* header */}


      <Preview selected={selected?.id} />

    </div>
  )
}

export default Home