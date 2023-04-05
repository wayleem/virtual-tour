import arshamomaque_cover from './assets/img/arshamomaque_cover.jpg'
import downs_farm_cover from './assets/img/downs_farm_cover.jpg'

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
    body: "placeholder",
    pic: arshamomaque_cover
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "placeholder",
    pic: downs_farm_cover
}