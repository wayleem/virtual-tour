import liMap from '../assets/img/limap.svg'
import mark from '../assets/img/mark_icon.svg'
import Props from 'react-redux'
import { useDispatch } from 'react-redux'
import { LocationContent } from '../types'
import { Arshamomaque_Preserve, DownsFarm_Preserve, start, meadow } from '../data'
import Preview from './Preview'
import * as action from '../actions'

type Props = {
    location: LocationContent
    className: string
}

function Home() {
    const dispatch = useDispatch()
    function MapMarker(props: Props) {
        function clickHandler(location: Props["location"]) {
            console.log(location.id + " selected")
            dispatch(action.setSelect(location))
            dispatch(action.setPanorama(location.start.config))
        }
        return (
            <img src={mark} onClick={() => clickHandler(props.location)} className={props.className} />
        )
    }
    return (
        <div className="relative w-screen h-screen">
            <div className="relative z-10 overflow-hidden">
                <img src={liMap} className="w-screen h-auto" alt="Li Map" />
                <MapMarker location={Arshamomaque_Preserve} className={Arshamomaque_Preserve.location} />
                <MapMarker location={DownsFarm_Preserve} className={DownsFarm_Preserve.location} />
            </div>
            <Preview />
        </div>
    )
}

export default Home