import arshamomaque_cover from './assets/img/arshamomaque_cover.jpg'
import downs_farm_cover from './assets/img/downs_farm_cover.jpg'
import { Panorama, Location, LocationContent } from './types'

export const start: Panorama = {
    name: "start",
    location: "absolute z-20 left-[49%] top-[34%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0164_04-07-2023_19_38_42.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'test',
            },
            {
                pitch: 200,
                yaw: 0,
                type: 'info',
                text: 'test'
            }
        ]
    }
}

export const pond: Panorama = {
    name: "pond",
    location: "absolute z-20 left-[25%] top-[53%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0165_04-07-2023_19_36_21.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 100,
                type: 'info',
                text: 'test',
            }
        ]
    }
}

export const obs_tower: Panorama = {
    name: "observation tower",
    location: "absolute z-20 left-[39%] top-[89%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0166_04-07-2023_19_35_32.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 200,
                type: 'info',
                text: 'test',
            }
        ]
    }
}

export const vernal_pool: Panorama = {
    name: "vernal pools",
    location: "absolute z-20 left-[35%] top-[54%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0167_04-07-2023_19_34_37.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 300,
                type: 'info',
                text: 'test',
            }
        ]
    }
}

export const obs_tower2: Panorama = {
    name: "observation tower 2",
    location: "absolute z-20 left-[42%] top-[47%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0168_04-07-2023_19_33_52.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'text'
            }
        ]
    }
}

export const forest: Panorama = {
    name: "forest",
    location: "absolute z-20 left-[37%] top-[52%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0171_04-07-2023_19_31_31.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'text'
            }
        ]
    }
}

export const meadow: Panorama = {
    name: "meadow",
    location: "absolute z-20 left-[13%] top-[56%] w-[3%]",
    config: {
        panorama: "src/assets/panoramas/GS__0169_04-07-2023_19_32_57.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'text'
            }
        ]
    }
}

export const Arshamomaque_Preserve: LocationContent = {
    id: Location.Arshamomaque_Preserve,
    title: "Welcome to Arshamomaque Preserve",
    body: "placeholder",
    pic: arshamomaque_cover,
    location: "absolute top-[17%] left-[73.5%] w-[5%] h-[5%]",
    start: start
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "placeholder",
    pic: downs_farm_cover,
    location: "absolute top-[30%] left-[69%] w-[5%] h-[5%]",
    start: meadow
}
