<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-eqiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<div class="menubar">
		<button id="add_text">Add Text</button>
	</div>
	
	<div class="property-bar hide">
		<label for="bg-color">BG Color: </label><input id="bg-color" type="text"></input>
		<label for="text-color">Text Color: </label><input id="text-color" type="text"></input>
		<button id="property-done">Done</button>
	</div>

	<div class="artboard">
		<textbox v-for="element in elements" :element="element" v-interact="element"></textbox>
	</div>

	<script src="js/app.js"></script>
</body>
</html>
