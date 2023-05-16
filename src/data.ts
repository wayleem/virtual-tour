import arshamomaque_cover from '../public/assets/img/arshamomaque_cover.jpg'
import downs_farm_cover from '../public/assets/img/downs_farm_cover.jpg'
import { Panorama, Location, LocationContent } from './types'
import * as hotspot from './hotspots'


export const start: Panorama = {
    name: "start",
    location: "absolute z-20 left-[49%] top-[34%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0164_04-07-2023_19_38_42.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -50,
                type: "custom",
                createTooltipFunc: hotspot.start1
            },
            {
                pitch: -10,
                yaw: 70,
                type: "custom",
                createTooltipFunc: hotspot.start2
            },
            {
                pitch: 20,
                yaw: -20,
                type: "custom",
                createTooltipFunc: hotspot.start3
            }
        ]
    }
}

export const pond: Panorama = {
    name: "pond",
    location: "absolute z-20 left-[25%] top-[53%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0165_04-07-2023_19_36_21.jpeg",
        hotSpots: [
            {
                pitch: 15,
                yaw: 139,
                type: "custom",
                createTooltipFunc: hotspot.pond1
            },
            {
                pitch: 0,
                yaw: 180,
                type: "custom",
                createTooltipFunc: hotspot.pond2
            }
        ]
    }
}

export const obs_tower: Panorama = {
    name: "observation tower",
    location: "absolute z-20 left-[39%] top-[89%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0166_04-07-2023_19_35_32.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: "custom",
                createTooltipFunc: hotspot.obs1
            },
            {
                pitch: 0,
                yaw: 200,
                type: "custom",
                createTooltipFunc: hotspot.obs2
            },
            {
                pitch: 0,
                yaw: 300,
                type: "custom",
                createTooltipFunc: hotspot.obs3
            },
            {
                pitch: -5,
                yaw: 80,
                type: "custom",
                createTooltipFunc: hotspot.obs4
            }

        ]
    }
}

export const vernal_pool: Panorama = {
    name: "vernal pools",
    location: "absolute z-20 left-[35%] top-[54%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0167_04-07-2023_19_34_37.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: "custom",
                createTooltipFunc: hotspot.pool1
            },
            {
                pitch: 0,
                yaw: 60,
                type: "custom",
                createTooltipFunc: hotspot.pool2
            }

        ]
    }
}

export const obs_tower2: Panorama = {
    name: "observation tower 2",
    location: "absolute z-20 left-[42%] top-[47%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0168_04-07-2023_19_33_52.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 200,
                type: "custom",
                createTooltipFunc: hotspot.obs_1_2
            }
        ]
    }
}

export const forest: Panorama = {
    name: "forest",
    location: "absolute z-20 left-[37%] top-[52%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0171_04-07-2023_19_31_31.jpeg",
        hotSpots: [

        ]
    }
}

export const meadow: Panorama = {
    name: "meadow",
    location: "absolute z-20 left-[13%] top-[56%] w-[3%]",
    config: {
        panorama: "/assets/panoramas/GS__0169_04-07-2023_19_32_57.jpeg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 0,
                type: "custom",
                createTooltipFunc: hotspot.meadow1
            }
        ]
    }
}

export const Arshamomaque_Preserve: LocationContent = {
    id: Location.Arshamomaque_Preserve,
    title: "Welcome to Arshamomaque Preserve",
    body: "The Ashamomaque Pond Preserve contains a rich assortment of wildlife in its woodlands, open meadows, vernal pools, and tidal wetlands. The preserve has over 2,200 feet of shoreline frontage on Arshamomaque Pond",
    pic: arshamomaque_cover,
    location: {
        x: 1880,
        y: 170
    },
    start: start,
    album: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "The Downs Farm Preserve is a significant natural and historic resource that encompasses a Native American fort site, scenic woodlands, and tidal wetlands. The Downs Farm Preserve is a 51 acre preserve located in the southwest part of the Town of Southold on the North Fork of Long Island.",
    pic: downs_farm_cover,
    location: {
        x: 1800,
        y: 260
    },
    start: meadow,
    album: ['1.jpg', '2.jpg', '3.jpg']
}

export const locations = [Arshamomaque_Preserve, DownsFarm_Preserve]