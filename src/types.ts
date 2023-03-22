import arshamomaque_cover from './assets/arshamomaque_cover.jpg'
import downs_farm_cover from './assets/downs_farm_cover.jpg'

export enum Location {
    Arshamomaque_Preserve = "Arshamomaque_Preserve",
    DownsFarm_Preserve = "DownsFarm_Preserve"
}

export interface PreviewState {
    select: LocationContent | undefined
}

export interface LocationContent {
    id: Location
    title: string
    body: string
    pic: string

}

export const Arshamomaque_Preserve: LocationContent = {
    id: Location.Arshamomaque_Preserve,
    title: "Welcome to Arshamomaque Preserve",
    body: "(bio placeholder for Arshamomaque Preserve)",
    pic: arshamomaque_cover
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "(bio placeholder for Downs Farm Preserve)",
    pic: downs_farm_cover
}