import arshamomaque_cover from './assets/img/arshamomaque_cover.jpg'
import downs_farm_cover from './assets/img/downs_farm_cover.jpg'
import { Hotspot, Location, LocationContent } from './types'

export const start: Hotspot = {
    name: "start",
    panoramaURL: "src/assets/panoramas/GS__0164_04-07-2023_19_38_42.jpeg",
    location: "absolute z-20 left-[49%] top-[34%] w-[3%]"
}

export const pond: Hotspot = {
    name: "pond",
    panoramaURL: "src/assets/panoramas/GS__0165_04-07-2023_19_36_21.jpeg",
    location: "absolute z-20 left-[25%] top-[53%] w-[3%]"
}

export const obs_tower: Hotspot = {
    name: "observation tower",
    panoramaURL: "src/assets/panoramas/GS__0166_04-07-2023_19_35_32.jpeg",
    location: "absolute z-20 left-[39%] top-[89%] w-[3%]"
}

export const vernal_pool: Hotspot = {
    name: "vernal pools",
    panoramaURL: "src/assets/panoramas/GS__0167_04-07-2023_19_34_37.jpeg",
    location: "absolute z-20 left-[35%] top-[54%] w-[3%]"
}

export const Arshamomaque_Preserve: LocationContent = {
    id: Location.Arshamomaque_Preserve,
    title: "Welcome to Arshamomaque Preserve",
    body: "placeholder",
    pic: arshamomaque_cover,
    location: "absolute top-[17%] left-[73.5%] w-[5%] h-[5%]"
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "placeholder",
    pic: downs_farm_cover,
    location: "absolute top-[30%] left-[69%] w-[5%] h-[5%]"
}