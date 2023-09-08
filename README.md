# Team Website
https://you.stonybrook.edu/339eastend/technology-assessment/

# Deploying
Everything in the `dist` folder is ready for deployment if you are running a web server. The index.html file will not run if you execute it locally, it needs to be deployed on a web server.

If you need a web server please read [Building & Testing](#Building&Testing).

# Building & Testing
nodejs and npm are required.
1. run `npm i` in the terminal of the working directory.
2. run `npm run build` in order to populate the `dist` folder which you can then use for deploying as explained in [Deploying](#Deploying).
<br> __mac users__ if the command does not work please run `tsc; vite build`
4. if you do not have a web server, you can additionally run `npm run test` which will provide you a web server for testing.
<br> __mac users__ if the command does not work please run `npm run build; npx http-sever dist`
