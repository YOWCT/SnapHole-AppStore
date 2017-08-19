mapboxgl.accessToken = 'pk.eyJ1IjoiYWRkeHkiLCJhIjoiY2lsdmt5NjZwMDFsdXZka3NzaGVrZDZtdCJ9.ZUE-LebQgHaBduVwL68IoQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-75.6972, 45.4215],
    zoom: 11,
    scrollZoom: false,
    doubleClickZoom: true,
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
