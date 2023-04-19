import pin from "../assets/img/location-pin.png"
import trailMap from "../assets/img/arshamomaque_trailmap.png"
import Props from "react-redux"
import { start, pond, obs_tower, vernal_pool } from "../data"
import { Panorama, VirtualTourState } from "../types"
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../actions"

type Props = {
    panorama: Panorama
}

function Map() {
    const dispatch = useDispatch()
    const mapActive = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.mapActive)
    function Pin(props: Props) {
        function clickHandler(panorama: Props["panorama"]) {
            console.log(panorama.name + " selected")
            dispatch(action.setPanorama(panorama.panoramaURL))
            dispatch(action.setHotspot(panorama.hotspots))
            dispatch(action.toggleMap(!mapActive))
        }
        return (
            <img src={pin} onClick={() => clickHandler(props.panorama)} className={props.panorama.location}></img>
        )
    }
    return (
        <>
            {mapActive && (
                <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <Pin panorama={start} />
                    <Pin panorama={pond} />
                    <Pin panorama={vernal_pool} />
                    <Pin panorama={obs_tower} />
                    <img src={trailMap} className="" />
                </div>)}
        </>
    )
}

export default Map