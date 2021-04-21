const lat = document.querySelector("#lat");
const long = document.querySelector("#long");
const intens = document.querySelector("#intens");
const btn = document.querySelector("#btn");

let map, heatmap;
function initMap() {
  var rajshahi = new google.maps.LatLng(24.361979, 88.635313);
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: rajshahi,
    mapTypeId: "satellite",
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  heatmap.set("radius", heatmap.get("radius") ? null : 15);
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.6);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    { location: new google.maps.LatLng(24.368254, 88.637627), weight: 0.5 },
    new google.maps.LatLng(24.368284, 88.637627),
    { location: new google.maps.LatLng(24.367254, 88.637627), weight: 2 },
    { location: new google.maps.LatLng(24.368254, 88.637687), weight: 2 },
    { location: new google.maps.LatLng(24.368254, 88.634627), weight: 2 },
    new google.maps.LatLng(24.368254, 88.647627),
    { location: new google.maps.LatLng(24.368254, 88.637627), weight: 1.5 },

    { location: new google.maps.LatLng(24.368254, 88.633427), weight: 3 },
    { location: new google.maps.LatLng(24.368254, 88.637627), weight: 2 },
    new google.maps.LatLng(24.368284, 88.637627),
    { location: new google.maps.LatLng(24.368554, 88.633627), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.635627),
    { location: new google.maps.LatLng(24.361254, 88.637627), weight: 0.5 },
    { location: new google.maps.LatLng(24.366254, 88.637627), weight: 3 },
    { location: new google.maps.LatLng(24.368254, 88.637627), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.637427),
    { location: new google.maps.LatLng(24.362254, 88.637627), weight: 2 },
    { location: new google.maps.LatLng(24.368454, 88.633687), weight: 3 },
    { location: new google.maps.LatLng(24.368264, 88.634677), weight: 2 },
    new google.maps.LatLng(24.368254, 88.633627),
    { location: new google.maps.LatLng(24.36244, 88.636627), weight: 0.5 },

    { location: new google.maps.LatLng(24.362254, 88.634427), weight: 3 },
    { location: new google.maps.LatLng(24.367254, 88.637627), weight: 2 },
    new google.maps.LatLng(24.368254, 88.637127),
    { location: new google.maps.LatLng(24.368254, 88.635627), weight: 0.5 },
    new google.maps.LatLng(24.365254, 88.637627),
    { location: new google.maps.LatLng(24.361254, 88.638627), weight: 2 },
    { location: new google.maps.LatLng(24.361254, 88.633627), weight: 3 },

    { location: new google.maps.LatLng(24.367254, 88.637627), weight: 2 },
    { location: new google.maps.LatLng(24.368254, 88.637687), weight: 3 },
    { location: new google.maps.LatLng(24.368254, 88.634627), weight: 2 },
    new google.maps.LatLng(24.368254, 88.637127),
    { location: new google.maps.LatLng(24.368224, 88.637627), weight: 0.5 },

    { location: new google.maps.LatLng(24.368154, 88.633467), weight: 3 },
    { location: new google.maps.LatLng(24.368234, 88.638627), weight: 2 },
    new google.maps.LatLng(24.368234, 88.637827),
    { location: new google.maps.LatLng(24.368554, 88.633627), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.635627),
    { location: new google.maps.LatLng(24.361254, 88.637647), weight: 2 },
    { location: new google.maps.LatLng(24.366454, 88.637227), weight: 3 },
    { location: new google.maps.LatLng(24.368654, 88.637667), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.637427),
    { location: new google.maps.LatLng(24.362244, 88.637627), weight: 2 },
    { location: new google.maps.LatLng(24.368414, 88.632287), weight: 3 },
    { location: new google.maps.LatLng(24.368234, 88.634677), weight: 2 },
    new google.maps.LatLng(24.368594, 88.633257),
    { location: new google.maps.LatLng(24.365244, 88.636629), weight: 0.5 },

    { location: new google.maps.LatLng(24.362255, 88.63442), weight: 3 },
    { location: new google.maps.LatLng(24.367259, 88.637637), weight: 2 },
    new google.maps.LatLng(24.364254, 88.637827),
    { location: new google.maps.LatLng(24.366254, 88.635617), weight: 0.5 },
    //------------------------------------------------//
    { location: new google.maps.LatLng(24.366046, 88.629746), weight: 0.5 },
    new google.maps.LatLng(24.36759, 88.635503),
    { location: new google.maps.LatLng(24.366522, 88.632258), weight: 2 },
    { location: new google.maps.LatLng(24.364865, 88.633754), weight: 2 },
    { location: new google.maps.LatLng(24.364905, 88.633767), weight: 2 },
    new google.maps.LatLng(24.365633, 88.63532),
    { location: new google.maps.LatLng(24.364452, 88.633368), weight: 1.5 },

    { location: new google.maps.LatLng(24.364367, 88.632494), weight: 3 },
    { location: new google.maps.LatLng(24.364082, 88.632447), weight: 2 },
    new google.maps.LatLng(24.363983, 88.631775),
    { location: new google.maps.LatLng(24.364153, 88.6329), weight: 0.5 },
    new google.maps.LatLng(24.363926, 88.631619),
    { location: new google.maps.LatLng(24.365647, 88.63393), weight: 0.5 },
    { location: new google.maps.LatLng(24.365755, 88.635327), weight: 3 },
    { location: new google.maps.LatLng(24.368254, 88.637627), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.637427),
    { location: new google.maps.LatLng(24.365254, 88.637727), weight: 2 },
    { location: new google.maps.LatLng(24.362454, 88.633677), weight: 3 },
    { location: new google.maps.LatLng(24.361264, 88.636677), weight: 2 },
    new google.maps.LatLng(24.368254, 88.633687),
    { location: new google.maps.LatLng(24.360244, 88.656627), weight: 0.5 },

    { location: new google.maps.LatLng(24.362354, 88.634437), weight: 3 },
    { location: new google.maps.LatLng(24.367354, 88.637327), weight: 2 },
    new google.maps.LatLng(24.368254, 88.637127),
    { location: new google.maps.LatLng(24.365254, 88.633627), weight: 0.5 },
    new google.maps.LatLng(24.365254, 88.637627),
    { location: new google.maps.LatLng(24.361654, 88.630627), weight: 2 },
    { location: new google.maps.LatLng(24.361854, 88.637627), weight: 3 },

    { location: new google.maps.LatLng(24.366254, 88.637527), weight: 2 },
    { location: new google.maps.LatLng(24.368254, 88.637387), weight: 3 },
    { location: new google.maps.LatLng(24.365254, 88.634827), weight: 2 },
    new google.maps.LatLng(24.368254, 88.647627),
    { location: new google.maps.LatLng(24.366224, 88.637629), weight: 0.5 },

    { location: new google.maps.LatLng(24.368114, 88.633417), weight: 3 },
    { location: new google.maps.LatLng(24.368264, 88.638667), weight: 2 },
    new google.maps.LatLng(24.368234, 88.637827),
    { location: new google.maps.LatLng(24.36855, 88.633607), weight: 0.5 },
    new google.maps.LatLng(24.362254, 88.63562),
    { location: new google.maps.LatLng(24.361251, 88.634647), weight: 2 },
    { location: new google.maps.LatLng(24.366404, 88.631227), weight: 3 },
    { location: new google.maps.LatLng(24.368624, 88.637617), weight: 0.5 },
    new google.maps.LatLng(24.368254, 88.637627),
    { location: new google.maps.LatLng(24.367244, 88.631627), weight: 2 },
    { location: new google.maps.LatLng(24.368474, 88.631287), weight: 3 },
    { location: new google.maps.LatLng(24.368214, 88.634617), weight: 2 },
    new google.maps.LatLng(24.368594, 88.633207),
    { location: new google.maps.LatLng(24.355244, 88.636629), weight: 0.5 },

    { location: new google.maps.LatLng(24.322255, 88.634472), weight: 3 },
    { location: new google.maps.LatLng(24.361259, 88.637637), weight: 2 },
    new google.maps.LatLng(24.364254, 88.634827),
    { location: new google.maps.LatLng(24.366254, 88.635317), weight: 0.5 },
  ];
}
let latitude = +lat.value;
let longitude = +long.value;

btn.addEventListener("click", function () {
  heatmap.data = new google.maps.LatLng(latitude, longitude);
});
