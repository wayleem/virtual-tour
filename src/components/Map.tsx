import liMap from '../assets/img/limap.svg'
import mark from '../assets/img/mark_icon.svg'
import Props from 'react'
import { useDispatch } from 'react-redux'
import { LocationContent, Arshamomaque_Preserve, DownsFarm_Preserve } from '../types'
import Preview from './Preview'
import * as action from '../actions'

type Props = {
    location: LocationContent
    className: string
}

function Map() {
    const dispatch = useDispatch()
    function MapMarker(props: Props) {
        function clickHandler(location: Props["location"]) {
            console.log(location.id + " selected")
            dispatch(action.setSelect(location))
        }
        return (
            <img src={mark} onClick={() => clickHandler(props.location)} className={props.className} />
        )
    }
    return (
        <div className="relative w-screen h-screen">
            <div className="relative z-10 overflow-hidden">
                <img src={liMap} className="w-screen h-auto" alt="Li Map" />
                <MapMarker location={Arshamomaque_Preserve} className="absolute top-[17%] left-[73.5%] w-[5%] h-[5%]" />
                <MapMarker location={DownsFarm_Preserve} className="absolute top-[30%] left-[69%] w-[5%] h-[5%]" />
            </div>
            <Preview />
        </div>
    )
}

export default Map