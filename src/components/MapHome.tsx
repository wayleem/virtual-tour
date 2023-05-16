import liMap from '../assets/img/limap.svg'
import MapMarker from './MapMarker'
import { Location } from '../types'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

type Props = {
  selected?: Location
}

const transition = {
  //curve: [0.43, 0.15, 0.26, 0.97],
  //
  duration: 1.5,
  //delay: 1
}

function MapHome(props: Props) {
  /*if (props.selected) {
    return (
      <motion.svg className="max-h-[525px] min-h-[350px] w-[100%]" viewBox="0 50 2700 900" preserveAspectRatio='xMinYMid slice'>
        <image xlinkHref={liMap} />
        <MapMarker selected={props.selected} />
      </motion.svg>
    )

  } else {*/

  // { viewBox: "0 0 3300 1500", height: "1800px", preserveAspectRatio: "xMidyMid slice", position: "static" }
  //
  //
  //
  const popupVisible = !props.selected
  const animate = useAnimation()


  const click = () => {
    animate.start({
      viewBox: "0 50 2700 900",
      preserveAspectRatio: "xMinYMid slice",
      position: "static",
      //maxHeight: 525,
      minHeight: 350,
      height: "25vh",
      transition: {
        type: 'spring',
        ease: "easeInOut",
        duration: 1.5,
        height: {
          ease: "backIn",
          duration: 2.5
        }
      }
    })
  }

  return (
    <>
      <motion.svg className="w-[100%]" viewBox="0 0 3300 1500" preserveAspectRatio='xMidYMid slice'
        layout
        initial={{
          height: "100vh",
          minHeight: 350,
          //maxHeight: 5000,
          position: 'static',
          scale: 1,
          preserveAspectRatio: 'none'
        }}
        animate={animate}
      >
        <image xlinkHref={liMap} />
        <MapMarker onClick={() => click()} />

      </motion.svg>

      <AnimatePresence>
        {popupVisible && (
          <div
            className="absolute z-5 w-screen bg-green bottom-0 overflow-hidden p-10 pb-20"
          >

            <h1 className="font-Jost font-semibold text-xl">Welcome to the Virtual Tour!</h1>
            Click the markers to explore.<br />
          </div>)}
      </AnimatePresence>
    </>
  )
}


export default MapHome
