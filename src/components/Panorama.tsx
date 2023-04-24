import { pannellum } from '../pannellum'
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { VirtualTourState, Config, Hotspot } from '../types'



export const Panorama: React.FC = () => {
    const panoramaURL = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.panoramaURL)
    const config = useSelector((state: { virtualTourReducer: VirtualTourState }) => state.virtualTourReducer.config)
    const { current: id } = useRef(
        `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`
    )
    const viewer = useRef<any>(null)

    const hotSpots = JSON.parse(JSON.stringify(config.hotSpots))

    const configObject: Config = {
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
            hotSpots

    }

    useEffect(() => {
        viewer.current = pannellum.viewer(id, configObject)
        return () => {
            viewer.current.destroy()
        }
    }, [id, config.panorama])

    return <div className="relative w-screen h-screen z-0" id={id} />
}