// const L = require('leaflet')

const options = {
  zoomControl: true,
  boxZoom: false,
  doubleClickZoom: true,
  scrollWheelZoom: false
}
const map = L.map('map', options).setView([45.4215, -75.6972], 14)

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)
