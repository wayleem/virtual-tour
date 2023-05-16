import { pannellum } from './pannellum'

export enum Location {
    Arshamomaque_Preserve = "Arshamomaque_Preserve",
    DownsFarm_Preserve = "DownsFarm_Preserve"
}

export interface PreviewState {
    select: LocationContent | undefined
}

export interface VirtualTourState {
    mapActive: boolean
    config: Config
}

export interface LocationContent {
    id: Location
    title: string
    body: string
    pic: string
    location: {
        x: number, y: number
    }
    start: Panorama
    album: string[]
}

export interface Panorama {
    name: string
    location: string
    config: Config
}

export interface Hotspot {
    pitch: number,
    yaw: number,
    type: string,
    createTooltipFunc: Function
}

export interface Config {
    panorama: string
    hotSpots: Hotspot[]
}

