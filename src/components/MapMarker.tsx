import { useDispatch } from 'react-redux'
import { Location } from '../types'
import { locations } from '../data'
import * as action from '../actions'
import { motion } from "framer-motion"

type Props = {
  selected?: Location
  onClick: () => void
}

const hoverMotion = {
  hover: {
    scale: 1,
    opacity: 0.9,
    transition: {
      duration: 0.5
    }
  },
  rest: {
    scale: 0.9,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

function MapMarker(props: Props) {
  const dispatch = useDispatch()

  const click = (location?: Location) => {
    console.log('click', location)
    const loc = locations.find((loc) => loc.id === location)
    dispatch(action.setSelect(loc))
    if (loc) dispatch(action.setPanorama(loc.start.config))
    props.onClick()
  }

  const loc = locations.map((loc) => {
    let cls = "cursor-pointer"
    let fill = "#f5a255"
    let outer = "#5da145"
    if (loc.id === props.selected) {
      outer = "#002f6c"
      cls = ""
    }

    return (<motion.svg width="85px" height="85px" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" x={loc.location.x} y={loc.location.y} onClick={() => click(loc.id)} className={cls}
      key={loc.id}
      whileHover="hover"
      animate="rest">
      <title>{loc.title}</title>
      <g id="VividJS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="VividIcons" transform="translate(-125.000000, -643.000000)">
          <g id="Icons" transform="translate(37.000000, 169.000000)">
            <g id="map-marker" transform="translate(78.000000, 468.000000)">
              <g transform="translate(10.000000, 6.000000)">
                <motion.path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill={outer} variants={hoverMotion} />
                <motion.circle id="Oval" fill={fill} fillRule="nonzero" cx="14" cy="14" r="7" variants={hoverMotion} />
              </g>
            </g>
          </g>
        </g>
      </g>
    </motion.svg>)
  })

  return (<>{loc}</>)
}

export default MapMarker