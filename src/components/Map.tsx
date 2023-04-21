import pin from "../assets/img/location-pin.png"
import Props from "react-redux"
import { start, pond, obs_tower, vernal_pool, obs_tower2, meadow, forest, Arshamomaque_Preserve, DownsFarm_Preserve } from "../data"
import { Panorama, VirtualTourState, PreviewState } from "../types"
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../actions"
import arshamomaque_trailmap from '../assets/img/arshamomaque_trailmap.png'
import downs_farm_trailmap from '../assets/img/downs_farm_trailmap.png'

type Props = {
    panorama: Panorama
}

function Map() {
    const dispatch = useDispatch()
    const mapActive = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.mapActive)
    const select = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)
    console.log(select.id + " is selected")
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
            {mapActive && select === Arshamomaque_Preserve && (
                <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[50%]">
                    <Pin panorama={start} />
                    <Pin panorama={pond} />
                    <Pin panorama={vernal_pool} />
                    <Pin panorama={obs_tower} />
                    <img src={arshamomaque_trailmap} className="object-fill" />
                </div>)}
            {mapActive && select === DownsFarm_Preserve && (
                <div className="absolute z-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[50%]">
                    <Pin panorama={meadow} />
                    <Pin panorama={forest} />
                    <Pin panorama={obs_tower2} />
                    <img src={downs_farm_trailmap} className="object-fill" />
                </div>)}
        </>
    )
}

export default Map
