import { pannellum } from '../pannellum'
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { VirtualTourState } from '../types'



export const Panorama: React.FC = () => {
    const panoramaURL = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.panoramaURL)
    const hotspots = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.hotspots)
    const { current: id } = useRef(
        `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`
    )
    const viewer = useRef<any>(null)

    useEffect(() => {
        viewer.current = pannellum.viewer(id, {
            autoLoad: true,
            panorama: panoramaURL,
            dynamicUpdate: true,
            compass: false,
            friction: 0,
            mouseZoom: false,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            type: 'equirectangular',
            hotSpots: [{
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'test'
            }]
        })

        return () => {
            viewer.current.destroy()
        }
    }, [id, panoramaURL])

    return <div className="relative w-screen h-screen z-0" id={id} />
}