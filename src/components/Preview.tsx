import { useSelector, MapDispatchToProps } from 'react-redux'
import { Location, PreviewState } from '../types'

function Preview() {
    const select = useSelector((state: PreviewState) => state.select)
    return (
        <div className="absolute z-10 top-0 right-0 w-[40%] h-screen bg-slate-200 items-center">
            <h1>
                {select?.title}
            </h1>
            <br />
            <h2>
                {select?.body}
            </h2>
            <br />
            <img src={select?.pic} />
            <br />
            <button className="border-solid border-2 border-black bg-red-500 content-center">
                virtual tour
            </button>
        </div>
    )
}

export default Preview