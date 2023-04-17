import pin from "../assets/img/location-pin.png"
import trailMap from "../assets/img/arshamomaque_trailmap.png"
import Props from "react-redux"
import { start, pond, obs_tower, vernal_pool } from "../data"
import { Hotspot, VirtualTourState } from "../types"
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../actions"

type Props = {
    hotspot: Hotspot
}

function Map() {
    const dispatch = useDispatch()
    const mapActive = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.mapActive)
    function Pin(props: Props) {
        function clickHandler(hotspot: Props["hotspot"]) {
            console.log(hotspot.name + " selected")
            dispatch(action.setPanorama(hotspot.panoramaURL))
            dispatch(action.toggleMap(!mapActive))
        }
        return (
            <img src={pin} onClick={() => clickHandler(props.hotspot)} className={props.hotspot.location}></img>
        )
    }
    return (
        <>
            {mapActive && (
                <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <Pin hotspot={start} />
                    <Pin hotspot={pond} />
                    <Pin hotspot={vernal_pool} />
                    <Pin hotspot={obs_tower} />
                    <img src={trailMap} className="" />
                </div>)}
        </>
    )
}

export default Map