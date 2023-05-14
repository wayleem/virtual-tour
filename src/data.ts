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
                text: 'The Ashamomaque Pond Preserve contains a rich assortment of wildlife in its woodlands, open meadows, vernal pools, and tidal wetlands. The preserve has over 2,200 feet of shoreline frontage on Arshamomaque Pond.'
            },
            {
                pitch: 0,
                yaw: 100,
                type: 'info',
                text: 'test'// add pic of one the birds + sounds
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
                text: 'One of the species we all hope to see but are relatively elusive, best noted by the scat they leave behind, are river otters (Lontra canadensis). Once prevalent throughout North America, river otters were extirpated from Long Island by the 1800’s. Sometime in the 1990’s a breeding pair returned to the area and Arshamomaque Preserve is on the best preserves on the North Fork to try to spot them.'
            },
            {
                pitch: 0,
                yaw: 0,
                type: 'info',
                text: 'test'// add pic of one the fish + sounds (in material folder)
            },
            {
                pitch: 0,
                yaw: 50,
                type: 'info',
                text: 'test' // put sign of otter in east end panorama folder in google drive- taralynn added a few days ago
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
                yaw: 0,
                type: 'info',
                text: 'From the Old Tower, you have a view of Arshamomaque Swamp, an excellent year-round birding spot. During migration, many species stopover or stay to nest, including Osprey (Pandion haliaetus), Belted Kingfisher (Megaceryle alcyon), Red-Winged Blackbirds (Agelaius phoeniceus) and more.',
            },
            {
                pitch: 0,
                yaw: 100,
                type: 'info',
                text: 'There are some lovely native plants to take note of along the trail to the tower, including sweet pepperbush (Clethra alnifolia), highbush blueberry (Vaccinium corymbosum) and red maple (Acer rubrum).'
            },
            {
                pitch: 0,
                yaw: 300,
                type: 'info',
                text: 'You can also see the struggle between the invasive reed, phragmites (Phragmites australis) and our native cattails (Typha spp.) from the Tower and along the trail. Phragmites outcompetes and crowds out native plant species and can decrease recreational opportunities in water bodies by forming stands that are almost impossible to penetrate, making it inhospitable for humans and wildlife alike.'
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
                yaw: 0,
                type: 'info',
                text: 'Arshamomaque Preserve is home to many vernal pools, which are temporary to seasonal bodies of water. These vital habitats are home to many species of reptiles and amphibians. They serve as important breeding grounds for vernal pool species, like salamanders and spring peepers. ',
            },
            {
                pitch: 0,
                yaw: 50,
                type: 'info',
                text: 'test'// add pic of the vernal pool sign in google drive folder. taralynn added
            },
            {
                pitch: 0,
                yaw: 100,
                type: 'info',
                text: 'test'
                // add pic of one the birds + sounds
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
                yaw: 200,
                type: 'info',
                text: 'The New Tower offers a different vantage point from the Old Tower of Arshamomaque Preserve. View Arshamomaque Swamp from the tower, bring your binoculars or spotting scope. It’s a great place to visit in every season. Good for winter waterfowl spotting and excellent in spring and summer for migrating bird species. '
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
                text: 'The Downs Farm Preserve is a significant natural and historic resource that encompasses a Native American fort site, scenic woodlands, and tidal wetlands. The Downs Farm Preserve is a 51 acre preserve located in the southwest part of the Town of Southold on the North Fork of Long Island.'
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
