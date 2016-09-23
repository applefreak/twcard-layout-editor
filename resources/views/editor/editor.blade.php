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
	
	<properties-bar></properties-bar>

	<div class="artboard">
		<textbox v-for="element in elements" :element="element" v-interact="element" :dir-element="element"></textbox>
	</div>

	<script src="js/app.js"></script>
</body>
</html>
