### Test
[Test]
`Test`

[Commit1]
### Installation 
`npx create-react-app`


[Commit2]
### Dependencies Installation
`npm install @material-ui/core @material-ui/icons @material-ui/lab`
`npm install axios`
`npm install google-map-react @react-google-maps/api`

[Commit3]
### Creation of Component folder and 4 components
`Header | Map | List | PlaceDetails`
`Also created the baseline structure of the page with Header, List and Map for all the resolutions`

[Commit4]
### Adding all the Styles in hheader js and add GoogleMapReact with the placeholders in MAp.js
`Added css in js in styles.js for header`
`Created placeholder GoogleMapReact in Map.js`

[Commit5]
### Creation of Google Cloud Developer account for accessing the map with the key | Add Listing page with hook 'useState'
`https://console.cloud.google.com/projectcreate`
`TravelAdvisor`
`after successful creation : https://console.cloud.google.com/home/dashboard?project=turnkey-thought-288318 : Switch to Travel Advisor`
` redirected to : https://console.cloud.google.com/home/dashboard?project=decent-bird-394407`
`Go to Api and Services -> Library -> Search for Maps -> Select Maps Javascript API -> ENABLE`
`Create the account and register for the free google map api $200 a month`
`Once done with the google map api setup -> go to credentials and create new one -> API Key`
`Created listing page with basic structure of select type and rating with useState hook`

[Commit6]
### Rendering the list page with the help of PageDetails page by prossing the props
`Create Grid in list page by adding places array of object and calling via map`

[Commit7]
### API calling and using - Rapid API
`Create account in RapidAPI`
`Search for Travel Advisor`
`Subscribe to TEst for the free account`
`For Testing -> go to Endpoints -> select any hotel -> list-by-lating -> right side change the option to (JS) Axios -> Copy the code`
`Create api/index.js folder and paste it `

[Commit8]
### Display the data from RapidApi in our appilcation by modifying the code
`Modifying the api/index.js and remove unnecessary code`
