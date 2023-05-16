import snake from "./assets/img/gartersnake.jpg"
import osprey from "./assets/img/osprey.jpg"
import ospreymp3 from "./assets/audio/osprey.mp3"
import poolsign from "./assets/img/poolsign.jpeg"
import blueheron from "./assets/img/blueheron.jpg"
import blueheronmp3 from "./assets/audio/blueheron.mp3"
import kingfisher from "./assets/img/kingfisher.jpg"
import kingfishermp3 from "./assets/audio/kingfisher.mp3"

export function start1(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "The Ashamomaque Pond Preserve contains a rich assortment of wildlife in its woodlands, open meadows, vernal pools, and tidal wetlands. The preserve has over 2,200 feet of shoreline frontage on Arshamomaque Pond.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function start2(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('img')
  tooltip.src = snake
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function start3(hotSpotDiv: HTMLMapElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('img')
  tooltip.src = kingfisher;
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  const audio = new Audio(kingfishermp3)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
    if (tooltip.classList.contains('active')) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  })
}

export function pond1(hotSpotDiv: HTMLMapElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('img')
  tooltip.src = osprey;
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  const audio = new Audio(ospreymp3)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
    if (tooltip.classList.contains('active')) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  })
}

export function pond2(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "One of the species we all hope to see but are relatively elusive, best noted by the scat they leave behind, are river otters (Lontra canadensis). Once prevalent throughout North America, river otters were extirpated from Long Island by the 1800’s. Sometime in the 1990’s a breeding pair returned to the area and Arshamomaque Preserve is on the best preserves on the North Fork to try to spot them.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function pool1(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "Arshamomaque Preserve is home to many vernal pools, which are temporary to seasonal bodies of water. These vital habitats are home to many species of reptiles and amphibians. They serve as important breeding grounds for vernal pool species, like salamanders and spring peepers.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function pool2(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('img')
  tooltip.src = poolsign
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function obs1(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "From the Old Tower, you have a view of Arshamomaque Swamp, an excellent year-round birding spot. During migration, many species stopover or stay to nest, including Osprey (Pandion haliaetus), Belted Kingfisher (Megaceryle alcyon), Red-Winged Blackbirds (Agelaius phoeniceus) and more.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function obs2(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "There are some lovely native plants to take note of along the trail to the tower, including sweet pepperbush (Clethra alnifolia), highbush blueberry (Vaccinium corymbosum) and red maple (Acer rubrum).";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function obs3(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "You can also see the struggle between the invasive reed, phragmites (Phragmites australis) and our native cattails (Typha spp.) from the Tower and along the trail. Phragmites outcompetes and crowds out native plant species and can decrease recreational opportunities in water bodies by forming stands that are almost impossible to penetrate, making it inhospitable for humans and wildlife alike.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function obs4(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('img')
  tooltip.src = blueheron
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  const audio = new Audio(blueheronmp3)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
    if (tooltip.classList.contains('active')) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  })
}

export function meadow1(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "The Downs Farm Preserve is a significant natural and historic resource that encompasses a Native American fort site, scenic woodlands, and tidal wetlands. The Downs Farm Preserve is a 51 acre preserve located in the southwest part of the Town of Southold on the North Fork of Long Island.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}

export function obs_1_2(hotSpotDiv: HTMLElement): void {
  hotSpotDiv.classList.add('custom-hotspot')

  const tooltip = document.createElement('div')
  tooltip.innerHTML = "The New Tower offers a different vantage point from the Old Tower of Arshamomaque Preserve. View Arshamomaque Swamp from the tower, bring your binoculars or spotting scope. It’s a great place to visit in every season. Good for winter waterfowl spotting and excellent in spring and summer for migrating bird species.";
  tooltip.classList.add('custom-tooltip')
  hotSpotDiv.appendChild(tooltip)

  hotSpotDiv.addEventListener('click', () => {
    tooltip.classList.toggle('active')
  })
}


const style = document.createElement('style')
style.innerHTML = `
    .custom-hotspot {
      height: 50px;
      width: 50px;
      background: #76eec6;
      cursor: pointer;
    }
    .custom-tooltip {
      visibility: hidden;
      position: absolute;
      border-radius: 3px;
      background-color: #fff;
      color: #000;
      text-align: center;
      min-width: 200px;
      padding: 5px 10px;
      margin-left: -110px;
      bottom: calc(100% + 5px);
      left: 50%;
      transition: visibility 0.2s ease-in-out;
    }
    .custom-tooltip.active {
      visibility: visible;
    }
  `;
document.head.appendChild(style)
