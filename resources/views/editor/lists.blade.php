@extends('layouts.app')

@section('content')
<div class="container">
	<div class="panel panel-default">
		<div class="panel-body">
			<a class="btn btn-default" href="{{ action('LayoutController@create') }}"><span class="glyphicon glyphicon-plus"></span> New Layout</a>
		</div>
	</div>
	<div class="list-group">
		@foreach ($layouts as $layout)
		<div class="list-group-item">
			<p>Layout ID: {{ $layout->id }}</p>
			<a class="btn btn-default" 
				href="{{ action('LayoutController@edit', ['id' => $layout->id]) }}">
				<span class="glyphicon glyphicon-edit"></span> Edit</a>
			<a class="btn btn-default" href="#"><span class="glyphicon glyphicon-file"></span> Duplicate</a>
			<a class="btn btn-default" href="#"><span class="glyphicon glyphicon-trash"></span> Delete</a>
		</div>
		@endforeach
	</div>
</div>
@endsection