import liMap from './assets/2560px-Blank_Map_of_Long_Island.svg.png'
import mark from './assets/rec.png'

function App() {
  function clickHandler() {

  }
  return (
    <div className="relative scale-[1] right-[50%] translate-y-[8rem]">
      <img src={liMap} className="w-full h-auto" alt="Li Map" />
      <a href="#" onClick={() => clickHandler()}>
        <img src={mark} className="absolute scale-[0.8] top-[15%] left-[75%] h-8 w-8" alt="Arshamomaque Preserve" />
        <img src={mark} className="absolute scale-[0.8] top-[28%] left-[70.5%] h-8 w-8" alt="Downs Farm Preserve" />
      </a>
    </div>
  )
}

export default App
