import { Panorama } from "./Panorama"
import map from "../../public/assets/img/map_icon.png"
import home from "../../public/assets/img/home_icon.svg"
import MapView from "./Map"
import { useDispatch, useSelector } from "react-redux"
import * as action from "../actions"
import { VirtualTourState } from "../types"
import { NavLink } from "react-router-dom"

function VirtualTour() {
    const dispatch = useDispatch()
    const mapActive = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.mapActive)
    function clickHandler() {
        dispatch(action.toggleMap(!mapActive))
    }
    return (
        <div className="relative w-screen h-screen">
            <MapView />
            <img src={map} onClick={() => clickHandler()} className="absolute z-10 left-[2%] top-[2%] w-[3%]" />
            <NavLink to="/" onClick={() => { dispatch(action.setSelect(undefined)) }}>
                <img src={home} className="absolute z-10 left-[6%] top-[1%] w-[3.5%]" />
            </NavLink>
            <Panorama />
        </div>
    )
}

export default VirtualTour