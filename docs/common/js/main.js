(function () {
	'use strict';

	$(document).ready(function () {
		$.ajax({
			type: "GET",
			url: "common/data/initialSetting.csv",
			dataType: "text",
			success: function (data) {
				setData(data);
			}
		});
	});

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
	}

})();
