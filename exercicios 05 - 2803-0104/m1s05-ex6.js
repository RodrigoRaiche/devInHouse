function initialize() {
  // Define the LatLng coordinates for the polygon's path.
  let bounds = new google.maps.LatLngBounds();

  let polygonCoords = [
    new google.maps.LatLng(25.774252, -80.190262),
    new google.maps.LatLng(18.466465, -66.118292),
    new google.maps.LatLng(32.321384, -64.757370),
    new google.maps.LatLng(25.774252, -80.190262)
  ];

  // ignorando o primeiro elemento
  for (let polygonCoord of polygonCoords) {
    bounds.extend(polygonCoord);
  }

  const map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 6,
    center: bounds.getCenter(),
    mapTypeId: "terrain"
  });

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);

  const contentStringFlorida =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Florida</h1>' +
  '<div id="bodyContent">' +
  "<p>A Flórida é um estado situado no extremo sudeste dos EUA, com o Oceano Atlântico de um lado e o Golfo do México do outro. O estado conta com centenas de milhas de praias. A cidade de Miami é conhecida pelas influências culturais latino-americanas e pelo cenário artístico de destaque, bem como pela vida noturna, especialmente na sofisticada South Beach. Orlando é famosa pelos parques temáticos, entre eles o Walt Disney World.</p>" +
  "<img src=img/florida.jpg></img>"
  "</div>" +
  "</div>";

  const contentStringBermudas =
  '<div id="content2">' +
  '<div id="siteNotice2">' +
  "</div>" +
  '<h1 id="firstHeading2" class="firstHeading">Bermudas</h1>' +
  '<div id="bodyContent2">' +
  "<p>As Bermudas são um território insular britânico no Atlântico Norte conhecido por suas praias de areias rosas, como Elbow Beach e Horseshoe Bay. Seu enorme complexo Royal Naval Dockyard combina atrações modernas, como o interativo Dolphin Quest, com história marítima, no Museu Nacional das Bermudas. A ilha tem uma mistura única das culturas britânica e norte-americana, que pode ser encontrada na capital, Hamilton.</p>" +
  "<img src=img/bermudas.jpg></img>"
  "</div>" +
  "</div>";
  

  const contentStringPortoRico =
  '<div id="content3">' +
  '<div id="siteNotice3">' +
  "</div>" +
  '<h1 id="firstHeading3" class="firstHeading">Porto Rico</h1>' +
  '<div id="bodyContent3">' +
  "<p>Porto Rico é uma ilha caribenha e um território não incorporado dos Estados Unidos, com uma paisagem formada por montanhas, cachoeiras e a floresta tropical de El Yunque. Em San Juan, a capital e maior cidade, a área de Isla Verde é conhecida pela sua rua de hotéis, bares na praia e cassinos. O bairro da Antiga San Juan tem coloridas construções coloniais espanholas e as imensas fortalezas de El Morro e La Fortaleza, erguidas há séculos.</p>" +
  "<img src=img/portoRico.jpg></img>"
  "</div>" +
  "</div>";
  
  const contentStringTriangulo =
  '<div id="content3">' +
  '<div id="siteNotice3">' +
  "</div>" +
  '<h1 id="firstHeading3" class="firstHeading">Triângulo das Bermudas</h1>' +
  '<div id="bodyContent3">' +
  "<p>O Triângulo das Bermudas (ou Polígono das Bermudas) é uma área que varia, aproximadamente, de 1,1 milhão de km² até 3,95 milhões de km². Essa variação ocorre em virtude de fatores físicos, químicos, climáticos, geográficos e geofísicos da região, que influem decisivamente no cálculo de sua área, situada no Oceano Atlântico entre as ilhas Bermudas, Porto Rico, Fort Lauderdale (na Flórida) e as Bahamas. A região notabilizou-se como palco de diversos desaparecimentos de aviões, barcos cargueiros e navios, para os quais se popularizaram explicações extrafísicas e/ou sobrenaturais.</p>" +
  "<img src=img/triangulo.jpg></img>"
  "</div>" +
  "</div>";
  
  const florida = { lat: 25.774252, lng: -80.190262 };
  const bermudas = { lat: 32.321384, lng: -64.757370 };
  const portoRico = { lat: 18.466465, lng: -66.118292 };
  const trianguloBermudas = { lat: 25.001632, lng: -71.000515 };
  
  const markerFlorida = addMarker(florida, map, 'Florida');
  const markerBermudas = addMarker(bermudas, map, 'Bermudas');
  const markerPortoRico = addMarker(portoRico, map, 'Porto Rico');
  const markerTriangulo = addMarker(trianguloBermudas, map, 'Triângulo das Bermudas');
  
  const infowindowFlorida = new google.maps.InfoWindow({
    content: contentStringFlorida,
  });

  const infowindowBermudas = new google.maps.InfoWindow({
    content: contentStringBermudas,
  });


  const infowindowPortoRico = new google.maps.InfoWindow({
    content: contentStringPortoRico,
  });

  const infowindowTriangulo = new google.maps.InfoWindow({
    content: contentStringTriangulo,
  });

  markerFlorida.addListener("click", () => {
    infowindowFlorida.open({
      anchor: markerFlorida,
      map,
      shouldFocus: false,
    });
    
  });

  markerBermudas.addListener("click", () => {
    infowindowBermudas.open({
      anchor: markerBermudas,
      map,
      shouldFocus: false,
    });
    
  });

  markerPortoRico.addListener("click", () => {
    infowindowPortoRico.open({
      anchor: markerPortoRico,
      map,
      shouldFocus: false,
    });
    
  });

  markerTriangulo.addListener("click", () => {
    infowindowTriangulo.open({
      anchor: markerTriangulo,
      map,
      shouldFocus: false,
    });
    
  });



}


const svgMarker = {
  path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "yellow",
  fillOpacity: 0.6,
  strokeWeight: 1,
  rotation: 1,
  scale: 2,
  anchor: new google.maps.Point(15, 30),
};


function addMarker(location, map, title) {
  return new google.maps.Marker({
    position: location,
    icon: svgMarker,
    map: map,
    title: title,
  });
}


