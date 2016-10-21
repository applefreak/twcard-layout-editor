{{-- <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-eqiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="stylesheet" type="text/css" href="css/app.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
</head>
<body>
	<div class="menubar">
		<button id="add_text">Add Text</button>
	</div>
	
	<properties-bar v-if="current" :current="current"></properties-bar>

	<div class="artboard" :style="getSize">
		<textbox v-for="element in elements" :element="element" v-interact="element" :dir-element="element" :index="$index"></textbox>
	</div>

	<script src="js/app.js"></script>
</body>
</html> --}}

@extends('layouts.app')

@section('content')
<div class="container">
	<div class="menubar">
		<button class="btn btn-default btn-xs" id="add_text">Add Text</button>
		<button class="btn btn-default btn-xs" @click="save">Save Layout</button>
	</div>
	
	<properties-bar v-if="current" :current="current"></properties-bar>

	<div class="artboard" :style="getSize" data-layout-id="{{ $layout_id }}">
		<textbox v-for="element in elements" :element="element" v-interact="element" :dir-element="element" :index="$index"></textbox>
	</div>
</div>
@endsection

