# Topology
Applaction made to get files from JSON

## Why nodeJS & typescript

- Fast
- Maintainable
- Having a great tools like jasmine for testing
- Finally: what is better to deal with JSON that JavaScript 

## script

- npm run start: to strat the app in development mode
- npm run build: to build your app and convert TypeScript to JavaScript
- npm run test: to build and test your build
- npm run start-b: to start you the app on build
- npm run start-build: to build first then start the app on build

## Let's good deep

the most two importants folder are `src` folder and `build` folder, they both same except the build have JS files.
you will find in the both of them `model` folder where the logic of the app and inside the model you will find folder named `data` which have our JSON files

there are two JSON file, first one is the one where I got the data to start and it's name is `topology.json` and the second one where I reshape the data to be more usable and it's name is `new-data.json`

### model
In the model folder you will find `data.ts` file, this files cotains of class called `Data` and `Data` have 6 functions

 - firstTime: to get the data from `topology.json` to `new-data.json` with new format and only will do that for the first time only, if you want to reset it just replace every thing in `new-data.json` with this: {}
 - index: to get all data from `new-data.json`
 - show: to get spefic data using id
 - create: to create new data in momery then add it to `new-data.json`
 - showNetlist: to get netlist in spefic item using the item id and component id
 - remove: to remove item from memory then from `new-data.json`

 ### Endpoints
 In the handler folder you will find `dataEndpoint.ts` and it is have `dataRoute` function where it have 6 endpoints:

 - `/first-time` (get method - don't need body): it will fire the firstTime function in `data.ts` file to get the data ready - you MUST to use thi endpoint first
 - `/index` (get method - don't need body): it will get all the data from `new-data.json` file through index function
 - `/show` (get method - need body): it will get data from specfic item through show function, make sure to put the id of the item in the request body, like this {"id":"top1"}
 - `/create` (post method - need body): it will create new data through create function, make sure to put you data in the body like this: {"id": "top3", "type": "something", ...}
 - `/show-netlist` (get method - need body): it will get netlist in specfic item through showNetlist function, make sure to put both of ids in the request body, like this: {"id":"top1", "netlist":"res1"}
 - `/delete ` (delete method - need body): it will delete data through delete function, make sure to put the id of the item you want to delete, like this: {"id": "top3"}

