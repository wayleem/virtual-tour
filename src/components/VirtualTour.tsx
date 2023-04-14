import { pannellum } from '../pannellum'
import React, { useRef, useEffect } from 'react'

export const Panorama: React.FC = props => {
    const { current: id } = useRef(
        `panorama-$(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`
    )
    const viewer = useRef<any>(null)

    useEffect(() => {
        viewer.current = pannellum.viewer(id, {
            autoLoad: true,
            panorama: "src/assets/panoramas/GS__0164_04-07-2023_19_38_42.jpeg",
            dynamicUpdate: true,
            compass: false,
            friction: 0,
            mouseZoom: false,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            type: "equirectangular"
        })

        return () => {
            viewer.current.destroy()

        }
    }, [id])
    return <div className="relative w-screen h-screen" {...props} id={id} />
}