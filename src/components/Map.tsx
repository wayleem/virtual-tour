import liMap from '../assets/limap.svg'
import mark from '../assets/mark_icon.svg'
import Props from 'react'
import { useDispatch } from 'react-redux'
import { LocationContent, Arshamomaque_Preserve, DownsFarm_Preserve } from '../types'
import * as action from '../actions'

type Props = {
    location: LocationContent
    className: string
}

function Map() {
    const dispatch = useDispatch()
    function MapMarker(props: Props) {
        function clickHandler(location: Props["location"]) {
            console.log(location + " selected")
            dispatch(action.setSelect(location))
        }
        return (
            <img src={mark} onClick={() => clickHandler(props.location)} className={props.className} />
        )
    }
    return (
        <div className="relative z-20 right-[40%] overflow-hidden">
            <img src={liMap} className="w-screen h-auto" alt="Li Map" />
            <MapMarker location={Arshamomaque_Preserve} className="absolute top-[17%] left-[73.5%] w-[5%] h-[5%]" />
            <MapMarker location={DownsFarm_Preserve} className="absolute top-[30%] left-[69%] w-[5%] h-[5%]" />
        </div>
    )
}

export default Map