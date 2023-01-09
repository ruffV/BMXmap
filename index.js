 function initMap(){
      var options = {
        zoom:8,
        center:{lat:30.2672,lng:-97.7431}
      }

      var map = new google.maps.Map(document.getElementById('map'), options);
      



      const contentString ='<p id="par">YUHHHHHH</p><img src="resources/test.png">';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
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
  });

}
