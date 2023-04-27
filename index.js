var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(slides.length==0){
    slides[slideIndex - 1].style.display = "block";
  }
  
}


function initMap(){
  var options = {
    zoom:8,
    center:{lat:30.2672,lng:-97.7431},
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      }
    ]
  }

  var map = new google.maps.Map(document.getElementById('map'), options);

  const contentString ='<p id="par">YUHHHHHH</p><img src="resources/test.png">';
  const contentString2 =`
<div class = "windo">
  <div class="slideshow-container">
    <div class="mySlides">
      <img src="https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
      <div class="text">1 / 3</div>
    </div>
    <div class="mySlides">
      <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg">
      <div class="text">2 / 3</div>
    </div>
    <div class="mySlides">
      <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg">
      <div class="text">3 / 3</div>
    </div>
    <button type="button" onclick="plusSlides(-1)" class="btn btn-dark prev">&#10094;</button>
    <button type="button" onclick="plusSlides(1)" class="btn btn-dark next">&#10095;</button>
  </div>

  <h1 class = "title">Pull up I sent the location</h1>
  <h2 class = "address">5009 Dominion Cove</h2>
  <div class="stars">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png">
    <img src="https://static.vecteezy.com/system/resources/previews/001/189/080/original/star-png.png">
  </div>
</div>

`;

  const infowindow = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 600
  });

  var marker = new google.maps.Marker({
    position:{lat:30.28058939021873, lng:-97.81840654782212},
    map:map
  })    

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
    showSlides(1);
  });
}



