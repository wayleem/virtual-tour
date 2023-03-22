import { useSelector, MapDispatchToProps } from 'react-redux'
import { Location, PreviewState } from '../types'

function Preview() {
    const select = useSelector((state: PreviewState) => state.select)
    return (
        <div className="absolute flex flex-col z-20 top-[10%] left-[5%] w-[30%] h-[50%] bg-stone-50">
            <h1 className="relative m-2">
                {select?.title}
            </h1>
            <h2 className="relative m-2">
                {select?.body}
            </h2>
            <div className="relative m-2 w-[90%] h-[60%] place-self-center">
                <img className="relative w-full h-full object-fill" src={select?.pic} />
            </div>


            <button className="relative m-4 place-self-center border-solid border-2 w-[10%] border-black bg-red-500">
                virtual tour
            </button>
        </div>
    )
}

export default Preview