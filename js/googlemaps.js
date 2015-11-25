
    // Define your locations: HTML content for the info window, latitude, longitude
    var locations = [

      ['<h5><a href=campuses.asp?campus_id=37>STI College — Laoag</a></h5>', 18.158526,120.644548],
      ['<h5><a href=campuses.asp?campus_id=96>STI College — Vigan</a></h5>', 17.580446,120.392354],
      ['<h5><a href=campuses.asp?campus_id=34>STI College — Tuguegarao</a></h5>', 17.613207,121.718526],
      ['<h5><a href=campuses.asp?campus_id=26>STI College — La Union</a></h5>', 16.608729,120.31822],
      ['<h5><a href=campuses.asp?campus_id=20>STI College — Angeles</a></h5>', 15.166232,120.590321],
      ['<h5><a href=campuses.asp?campus_id=39>STI College — San Jose, Nueva Ecija</a></h5>', 15.791967,120.991903],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Baguio</a></h5>', 16.421135,120.59717],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — San Fernando</a></h5>', 15.041332,120.682873],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Balagtas</a></h5>', 14.823112,120.900995],

      ['<h5><a href=campuses.asp?campus_id=21>STI College — Quezon Avenue</a></h5>', 14.629279,121.013911],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Global City</a></h5>', 14.552265,121.056173],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Taft</a></h5>', 14.569306,120.991723],	  
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Las Piñas</a></h5>', 14.452685,120.976774],  

      ['<h5><a href=campuses.asp?campus_id=21>STI College — Bacoor</a></h5>', 14.445695,120.952296],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Rosario</a></h5>', 14.407436,120.858643],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Dasmariñas</a></h5>', 14.330414,120.936456],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Southwoods</a></h5>', 14.323184,121.062309],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Santa Rosa</a></h5>', 14.295139,121.103757],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Ortigas-Cainta</a></h5>', 14.5828585,121.1261206],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Tanay</a></h5>', 14.503889,121.292281],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Sta. Cruz</a></h5>', 14.278527,121.415912],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Tagaytay</a></h5>', 14.115408,120.962133],
     // ['<h5><a href=campuses.asp?campus_id=21>STI College — Batangas</a></h5>', 13.76019,121.061855],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Batangas</a></h5>', 13.7707995,121.0646603],
	  ['<h5><a href=campuses.asp?campus_id=21>STI College — Naga</a></h5>', 13.617542,123.190424],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Puerto Princesa</a></h5>', 9.739126,118.740486],

      ['<h5><a href=campuses.asp?campus_id=21>STI College — Kalibo</a></h5>', 11.695635,122.368876],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Iloilo</a></h5>', 10.715058,122.561881],

      ['<h5><a href=campuses.asp?campus_id=21>STI College — Zamboanga</a></h5>', 6.907157,122.078714],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — General Santos</a></h5>', 6.114734,125.183109],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Koronadal</a></h5>', 6.495309,124.846335],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Davao</a></h5>', 7.074084,125.6129],
      ['<h5><a href=campuses.asp?campus_id=21>STI College — Cagayan De Oro</a></h5>', 8.47684,124.648529],
	  
    ];
    
    // Setup the different icons and shadows
    var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
    
    var icons = [
      iconURLPrefix + 'red-dot.png',
      iconURLPrefix + 'green-dot.png',
      iconURLPrefix + 'blue-dot.png',
      iconURLPrefix + 'orange-dot.png',
      iconURLPrefix + 'purple-dot.png',
      iconURLPrefix + 'pink-dot.png',      
      iconURLPrefix + 'yellow-dot.png'
    ]
    var icons_length = icons.length;
    
    
    var shadow = {
      anchor: new google.maps.Point(15,33),
      url: iconURLPrefix + 'msmarker.shadow.png'
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: new google.maps.LatLng(-37.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });

    var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });

    var marker;
    var markers = new Array();
    
    var iconCounter = 0;
    
    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon : icons[iconCounter],
        shadow: shadow
      });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
      
      iconCounter++;
      // We only have a limited number of possible icon colors, so we may have to restart the counter
      if(iconCounter >= icons_length){
      	iconCounter = 0;
      }
    }

    function AutoCenter() {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      $.each(markers, function (index, marker) {
        bounds.extend(marker.position);
      });
      //  Fit these bounds to the map
      map.fitBounds(bounds);
    }
    AutoCenter();
