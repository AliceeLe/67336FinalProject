---
toc: false
theme: [light, wide, alt, cotton]
---
<!-- PROVIDED: This controls the theme of the page! [OPTIONAL] Feel free to change and play around with the theme to find one you like for this page! -->
<!-- HINT: Reference the documentation given in the instructions! -->


<!-- PROVIDED: Header/Page Title -->
# CityBikes Dashboard Home
<br>


<!-- CHALLENGE 3.1 -->
<!-- YOUR TURN: Add code to load the data from stations.json.js-->
<!-- HINT: Use a FileAttachment like we did in Lab 2: Observable Dashboard! -->
<!-- Imports the data from the network and stations data loaders -->
```js
// loads the network data from the data loader
// this returns an array!
const network_info = FileAttachment("./data/network.json").json();
```

```js
// loads the stations data from the data loader
// this returns a Map!
const stations = FileAttachment("./data/stations.json").json();
```

```js
const numStatinons = Object.keys(stations).length;
const networkCity = network_info.city;
const networkName = network_info.name;
const networkLatitude = network_info.latitude;
const networkLongitude = network_info.longitude;
```

<!-- CHALLENGE 3.2 -->
<!-- YOUR TURN: Add a grid with three cards of information here -->
<!-- Reference the instructions for what information to display in each card. -->
<!-- HINT: You will have to use string interpolation like this `This is a ${interpolated_value}`! -->
<!-- HINT: Reference the .set() method documentation for getting data from a Map in JS linked in the instructions. ! -->
<div class="grid grid-cols-3">
    <div class="card" style="text-align: center;">There are <b>${numStatinons}</b> bike stations.</div>
    <div class="card" style="text-align: center;">The network in <b>${networkCity}</b> is called <b>${networkName}</b>.</div>
    <div class="card" style="text-align: center;">The network is located at <b>${networkLatitude}, ${networkLongitude}</b>.</div>
</div>

<div class="grid grid-cols-2">
    <div class="card" style="text-align: center;">See the <a href="/bike-types.html"><b>bike types dashboard page</b></a> for information on bike type availability at each of the stations in the network.</div>
    <div class="card" style="text-align: center;">See the <a href="/station-demand.html"><b>station demand visualization page</b></a> for information on the demand of the stations in the network.</b>.</div>
</div>