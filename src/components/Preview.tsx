import { useSelector } from 'react-redux'
import { Location, PreviewState } from '../types'
import { NavLink } from 'react-router-dom'

type Props = {
  selected?: Location
}

function Preview(props: Props) {
  const select = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)

  const album = () => select?.album.map((a, idx) =>
    <img key={idx + a} className="object-cover mb-1" src={`/src/assets/locations/${select?.id.replace('_Preserve', '')}/${a}`} />)

  return (
    <div className="flex h-[100%]">
      <div className={props.selected ? "bg-sunset/10 flex-auto h-[100%]" : "hidden"}>
        <img className="absolute w-screen -z-50 h-[330px] object-cover drop-shadow-lg" src={select?.pic} />

        <h1 className="pl-5 pb-1 pt-1 font-Jost font-medium text-xl bg-secondary text-white">
          {select?.title}
        </h1>

        <div className="mt-[250px] p-5">
          <div className="text-sm font-sans mb-6">
            {select?.body}
          </div>

          <NavLink to="/virtualtour" className="font-Jost bg-primary pr-2 pt-1 pb-1 pl-2 rounded-lg text-white hover:bg-green/95">
            Enter Virtual Tour
          </NavLink>

          <div className="m-5 mt-8">
            <div className="grid grid-cols-3 gap-2">{album()}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Preview
