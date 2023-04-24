import { pannellum } from '../pannellum'
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { VirtualTourState, Config } from '../types'



export const Panorama: React.FC = () => {
    const panoramaURL = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.panoramaURL)
    const config = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.config)
    const { current: id } = useRef(
        `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`
    )
    const viewer = useRef<any>(null)

    const hotspot_test = [{
        pitch: 0,
        yaw: 100,
        type: 'info',
        text: 'test',
    }]

    const hotSpots2 = [...config.hotSpots, hotspot_test]

    const configObject = {
        autoLoad: true,
        panorama: config.panorama,
        dynamicUpdate: true,
        compass: false,
        friction: 0,
        mouseZoom: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        type: 'equirectangular',
        hotSpots:
            hotSpots2

    }



    useEffect(() => {
        viewer.current = pannellum.viewer(id, configObject)
        return () => {
            viewer.current.destroy()
        }
    }, [id, panoramaURL, config])

    return <div className="relative w-screen h-screen z-0" id={id} />
}