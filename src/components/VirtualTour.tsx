import { Panorama } from "./Panorama"
import map from "../assets/img/map_icon.png"
import MapView from "./Map"
import { useDispatch, useSelector } from "react-redux"
import * as action from "../actions"
import { VirtualTourState } from "../types"

function VirtualTour() {
    const dispatch = useDispatch()
    const mapActive = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.mapActive)
    function clickHandler() {
        dispatch(action.toggleMap(!mapActive))
    }
    return (
        <div className="relative w-screen h-screen">
            <MapView />
            <img src={map} onClick={() => clickHandler()} className="absolute z-10 left-5 top-5 w-[5%]" />
            <Panorama />
        </div>
    )
}

export default VirtualTour