import liMap from '../assets/img/limap.svg'
import MapMarker from './MapMarker'
import { Location } from '../types'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

type Props = {
  selected?: Location
}

const transition = {
  //curve: [0.43, 0.15, 0.26, 0.97],
  duration: 1.5,
  //delay: 1
}

function MapHome(props: Props) {
  const popupVisible = !props.selected
  const animate = useAnimation()


  const click = () => {
    animate.start({
      viewBox: "0 50 2700 900",
      height: "15vh",

      transition: {
        type: 'spring',

        height: {
          ease: "easeIn",
          duration: 1.5
        },
        viewBox: {
          ease: "easeOut",
          duration: 0.7,
          delay: 0.7
        }
      }
    })
  }

  return (
    <AnimatePresence>
      <motion.svg className="static min-h-[250px] w-[100%]" viewBox="0 0 3300 1500" preserveAspectRatio='xMidYMid slice'
        layout
        initial={{
          viewBox: "0 0 3300 1500",
          height: "100vh",
        }}
        animate={animate}
      >
        <image xlinkHref={liMap} />
        <MapMarker onClick={() => click()} selected={props.selected} />

      </motion.svg>

      {popupVisible && (
        <motion.div
          key="intro-popup"
          className="absolute z-5 w-screen bg-green bottom-0 overflow-hidden p-10 pb-20"
          initial={{
            opacity: 0.6
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0.6,
            y: 100
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5
          }}
        >

          <h1 className="font-Jost font-semibold text-xl">Welcome to the Virtual Tour!</h1>
          Click the markers to explore our different locations.<br />
        </motion.div>)}
    </AnimatePresence>
  )
}


export default MapHome