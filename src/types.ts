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
}

export interface LocationContent {
    id: Location
    title: string
    body: string
    pic: string
    location: string
}

export interface Hotspot {
    name: string
    panoramaURL: string
    location: string
}
