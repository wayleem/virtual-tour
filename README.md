# Group for the East End
Virtual tour is made for nonprofit organization [Group for the East End](https://www.groupfortheeastend.org/) in a Stony Brook related course. We worked with the client within the semester to deliver this application that they requested to make their hiking trails more accessible.

## Preview
Here are some gifs demonstrating the use of the virtual tour.

### Hiking trail selection
There are only two hiking trails for selection. You can see a preview of images of the trail before entering the tour.

<img src="https://github.com/wayleem/virtual-tour/blob/main/assets/virtual-tour-1.gif" width="500" height="500"/>

### Virtual tour render
The virtual tour has informative hotspots to click.

<img src="https://github.com/wayleem/virtual-tour/blob/main/assets/virtual-tour-2.gif" width="500" height="500"/>

### Navigational showcase
Clicking the map opens up an interface to select a new location on the hiking trail. The selectable areas are marked. You can click the home icon to return back to the trail selection.

<img src="https://github.com/wayleem/virtual-tour/blob/main/assets/virtual-tour-3.gif" width="500" height="500"/>

## Deploying
Everything in the `dist` folder is ready for deployment if you are running a web server. The index.html file will not run if you execute it locally, it needs to be deployed on a web server.

If you need a web server please read [Building & Testing](#Building&Testing).

### Building & Testing
nodejs and npm are required.
1. run `npm i` in the terminal of the working directory.
2. run `npm run build` in order to populate the `dist` folder which you can then use for deploying as explained in [Deploying](#Deploying).
<br> __mac users__ if the command does not work please run `tsc; vite build`
4. if you do not have a web server, you can additionally run `npm run test` which will provide you a web server for testing.
<br> __mac users__ if the command does not work please run `npm run build; npx http-sever dist`

## Team
You can read more about our documentation and journey on our [team website](https://you.stonybrook.edu/339eastend/).

