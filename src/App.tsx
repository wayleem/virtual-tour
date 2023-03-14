import liMap from './assets/limap.svg'
import mark from './assets/mark_icon.svg'
import Props from 'react'

type Props = {
  location: "Arshamomaque Preserve" | "Downs Farm Preserve"
  className: string
}

function App() {
  function MapMarker(props: Props) {
    function clickHandler(location: Props["location"]) {
      console.log("marker: " + location)
    }
    return (
      <img src={mark} onClick={() => clickHandler(props.location)} className={props.className} />
    )
  }
  return (
    <div className="relative right-[40%] overflow-hidden">
      <img src={liMap} className="w-screen h-auto" alt="Li Map" />
      <MapMarker location="Arshamomaque Preserve" className="absolute top-[15%] left-[75%] w-[5%] h-[5%]" />
      <MapMarker location="Downs Farm Preserve" className="absolute top-[28%] left-[70.5%] w-[5%] h-[5%]" />
    </div>
  )
}

export default App