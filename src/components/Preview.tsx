import { useSelector, MapDispatchToProps } from 'react-redux'
import { Location, PreviewState } from '../types'
import { Panorama } from './Panorama'
import { NavLink } from 'react-router-dom'

function Preview() {
    const select = useSelector((state: { previewReducer: PreviewState }) => state.previewReducer.select)
    return (
        <div className="absolute flex flex-col z-20 top-[10%] left-[5%] w-[30%] h-[80%] bg-stone-50">
            <h1 className="relative m-2 font-Jost font-normal text-xl">
                {select?.title}
            </h1>
            <h2 className="relative m-2 font-Jost font-normal text-sm">
                {select?.body}
            </h2>
            <div className="relative m-2 w-[90%] h-[50%] place-self-center">
                <img className="relative w-full h-full object-fill" src={select?.pic} />
            </div>


            <NavLink to="/virtualtour" className="relative m-4 place-self-center border-solid border-2 w-[15%] border-black bg-red-500 font-Jost text-xs">
                virtual tour
            </NavLink>
        </div>
    )
}

export default Preview