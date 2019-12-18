document.getElementById('date').innerHTML = new Date().toDateString();
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Fortnite-API/js-wrapper@0.2.0/dist/fortnite-api.min.js"></script>
var shop = fortniteApi.shop
	.then(res => res.json())
		document.getElementById(`yes`).ineerHTML = res.data.daily[0].items[0].name
		document.getElementById(`shop`).innerHTML = res.data.daily[0].items[0].images.icon.urltoTimeString