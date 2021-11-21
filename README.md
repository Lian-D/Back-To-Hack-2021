# Back To Hacking 2021: Go Green

## Project Motivation
Environmental problems are always a hot topic. We want to let everyone help the environment by reducing the amount of carbon footprints in their daily travel, so we come up with the idea to create a Google app with carbon footprints.

## App functions
The app provides users alternative routes along with carbon footprints under a user defined time constraint, so they can leave the least amount of carbon footprints as well as arriving the destination efficiently.

## Technology
We use React as frontend and Express as backend. In the frontend, the user can enter the origin, destination and time limit in the search bar, and a map is pre-loaded with Google map api. When a request is
 formed, it will return all the alternative routes in the order of least to largest carbon footprints. We created a formula with time and carbon footprint included to list the order.

## Difficulties
we are not familiar with frontend and can't load the map well

## Success
we sorted out a /maproutes api with all the data correctly returned.

## Fontend: 
 `cd /website` and use npm start to start the map

![original](https://user-images.githubusercontent.com/38368802/142760610-d8997023-5290-4ee1-8a5a-eaf7fd8fd1f0.png)

## Backend: 
run app.js and query localhost:3000/maproutes using body params `origin`, `destination` and `timelimit` in order to retrieve our carbon score and other information pertaining to the route.

![unknown-30](https://user-images.githubusercontent.com/38368802/142760597-d6c9a051-9a2b-495c-ab42-481d69baec34.png)
