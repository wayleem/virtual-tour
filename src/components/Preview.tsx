import { useSelector } from 'react-redux'
import { Location, PreviewState } from '../types'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence, stagger } from 'framer-motion'

type Props = {
  selected?: Location
}

const section = {
  initial: {
    x: "-100%"
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}

const container = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
    }
  }
}

function Preview(props: Props) {
  const select = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)

  const album = () => select?.album.map((a, idx) =>
    <img key={idx + a} className="object-cover mb-1" src={`/assets/locations/${select?.id.replace('_Preserve', '')}/${a}`} />)

  return (
    <AnimatePresence initial={false}>
      <div className="flex h-[100%]">
        <motion.div key={"anim" + props.selected} className={props.selected ? "bg-sunset/5 flex-auto h-[100%]" : "hidden"} initial={"initial"} animate={"animate"} variants={container}>


          <motion.div key={'header' + props.selected} className="bg-secondary/70" variants={section}>
            <h1
              className="pl-5 pb-1 pt-1 font-Jost font-medium text-2xl text-white bg-secondary overflow-hidden"
            >
              {select?.title}
            </h1>
            <img className="w-screen -z-50 h-[250px] object-cover drop-shadow-lg" src={select?.pic} />
          </motion.div>

          <motion.div key={'body' + props.selected} className="p-5" variants={section}>
            <div className="font-sans mb-5">
              {select?.body}
            </div>

            <NavLink to="/virtualtour" className="font-Jost bg-primary pr-2 pt-1 pb-1 pl-2 rounded-lg text-white hover:bg-green/95">
              Enter Virtual Tour
            </NavLink>
          </motion.div>

          <motion.div key={'album' + props.selected} className="m-5 mt-8" variants={section}>
            <div className="grid grid-cols-3 gap-2">{album()}</div>
          </motion.div>

        </motion.div>
      </div>
    </AnimatePresence >
  )
}

export default Preview