(function () {
	'use strict';

	var map;
	var w = $(window).width();
	var h = $(window).height();

	//mapSize
	function mapSize() {
		var mapWidth = w - 40;
		var mapHeight = h - 130;
		$('#map').css({
			"width": mapWidth + "px",
			"height": mapHeight + "px",
			"margin-left": "auto",
			"margin-right": "auto",
		});
	}
	mapSize();
	$(window).resize(mapSize);

	//ajax initialSetting
	$(document).ready(function () {
		$.ajax({
				type: "GET",
				url: "common/data/initialSetting.csv",
				dataType: "text"
			})
			.then(
				function (data) {
					var iniData = setData(data);
					mapSetting(iniData)
				}
			)
	});

	function mapSetting(data) {
		var zoomSize;

		//zoomSize
		if (w >= 768) {
			zoomSize = parseFloat(data.zoomSize);
		} else {
			zoomSize = parseFloat(data.zoomSize) - 1;
		};

		//map
		map = L.map('map', {
			gestureHandling: true
		}).setView([data.lat, data.lng], zoomSize);

		//basemap
		//地理院地図
		/*
		L.tileLayer(
			'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
				attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル（標準地図）</a>"
			}).addTo(map);
		*/

		//OSM
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		//location
		var lc = L.control.locate({
			layer: new L.LayerGroup(),
			drawCircle: false,
			keepCurrentZoomLevel: true,
			icon: 'fa fa-map-marker',
			follow: true,
			showPopup: true,
			strings: {
				title: "現在地",
				popup: "現在地",
			}
		}).addTo(map);
	}

	//initial setting
	function setData(data) {

		var dataSplit = data.split('\n');
		var itemsData = dataSplit[1].split(',');

		//site title
		var siteTitle = document.querySelector('header h1');
		if (itemsData) {
			siteTitle.innerHTML = itemsData[0];
		}

		// head meta
		var headTitle = document.createElement('meta');
		headTitle.setAttribute('titke', siteTitle);
		document.getElementsByTagName('head')[0].appendChild(headTitle);

		// headのdescription
		var descriptionData = itemsData[1];
		var description = document.createElement('meta');
		description.setAttribute('description', descriptionData);
		document.getElementsByTagName('head')[0].appendChild(description);

		//footer
		var footer = document.querySelector('footer');
		footer.innerHTML = itemsData[2];

		return {
			lat: itemsData[3],
			lng: itemsData[4],
			zoomSize: itemsData[5]
		};
	}


	//Data
	//Ajax data.csv
	$(document).ready(function () {
		$.ajax({
				type: "GET",
				url: "common/data/data.csv",
				dataType: "text"
			})
			.then(
				function (data) {
					displayData(data);
				}
			);
	});


	//displayData
	function displayData(data) {
		var geojson = csvToGeojson(data);

		//markerCuluster
		var markers = L.markerClusterGroup({
			disableClusteringAtZoom: 17
		});

		var dataLayer = L.geoJson(geojson, {
			onEachFeature: onEachFeature,
			pointToLayer: markerPointToLayer
		});
		markers.addLayer(dataLayer);
		map.addLayer(markers);
	}

	//Ajax phtodata.csv
	$(document).ready(function () {
		$.ajax({
				type: "GET",
				url: "common/data/photoData.csv",
				dataaaType: "text"
			})
			.then(
				function (data) {
					displayPhotoData(data);
				}
			);
	});


	//displayPhotoData
	function displayPhotoData(data) {
		var photoGeojson = csvToGeojson(data);

		//layer
		var photoDataLayer = L.geoJson(photoGeojson, {
			onEachFeature: onEachFeature,
			pointToLayer: photoMarkerPointToLayer
		});
		map.addLayer(photoDataLayer);
	}

	//csvToGeojson
	function csvToGeojson(data) {
		var dataSplit = data.split('\n');
		var geoJsonArray = {
			"type": "FeatureCollection",
			"features": []
		};
		var items = dataSplit[0].split(',');

		for (var i = 1; i < dataSplit.length - 1; i++) {
			var csvArrayData = dataSplit[i].split(',');
			var properties = {};
			for (var j = 3; j < items.length; j++) {
				properties[items[j]] = csvArrayData[j];
			}
			var lat = parseFloat(csvArrayData[1]);
			var lng = parseFloat(csvArrayData[2]);
			var coordinates = [lng, lat];
			geoJsonArray.features.push({
				"type": "Feature",
				"properties": properties,
				"geometry": {
					"type": "Point",
					"coordinates": coordinates
				}
			});
		}
		return geoJsonArray;
	}

	//marker popup
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.popup);
	}

	//marker
	//markerPointToLayer
	function markerPointToLayer(feature, latlng) {
		return L.marker(latlng, {
			icon: L.AwesomeMarkers.icon({
				icon: feature.properties.icon,
				prefix: 'fa',
				markerColor: feature.properties.iconColor
			})
		});
	}

	//photoMarkerPointToLayer
	function photoMarkerPointToLayer(feature, latlng) {
		return L.marker(latlng, {
			icon: L.icon({
				iconUrl: feature.properties.icon,
				iconSize: [20, 20],
				popupAnchor: [0, -20],
				className: 'photo-icon'
			})
		});
	}

})();
