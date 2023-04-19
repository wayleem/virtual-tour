export enum Location {
    Arshamomaque_Preserve = "Arshamomaque_Preserve",
    DownsFarm_Preserve = "DownsFarm_Preserve"
}

export interface PreviewState {
    select: LocationContent | undefined
}

export interface VirtualTourState {
    panoramaURL: string
    mapActive: boolean
    hotspots: Hotspot[]
}

export interface LocationContent {
    id: Location
    title: string
    body: string
    pic: string
    location: string
}

export interface Panorama {
    name: string
    panoramaURL: string
    hotspots: Hotspot[]
    location: string
}

export interface Hotspot {
    pitch: number,
    yaw: number,
    type: string,
    text: string
}
