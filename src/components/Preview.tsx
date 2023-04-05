import { useSelector, MapDispatchToProps } from 'react-redux'
import { Location, PreviewState } from '../types'

function Preview() {
    const select = useSelector((state: PreviewState) => state.select)
    return (
        <div className="absolute flex flex-col z-20 top-[10%] left-[5%] w-[30%] h-[50%] bg-stone-50">
            <h1 className="relative m-2 font-Jost font-normal text-xl">
                {select?.title}
            </h1>
            <h2 className="relative m-2 font-Jost font-normal text-sm">
                {select?.body}
            </h2>
            <div className="relative m-2 w-[90%] h-[60%] place-self-center">
                <img className="relative w-full h-full object-fill" src={select?.pic} />
            </div>


            <button className="relative m-4 place-self-center border-solid border-2 w-[15%] border-black bg-red-500 font-Jost text-xs">
                virtual tour
            </button>
        </div>
    )
}

export default Preview