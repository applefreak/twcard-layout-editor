@extends('layouts.app')

@section('content')
<div class="container">
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
		<a class="list-group-item" href="{{ action('LayoutController@create') }}">Create New Layout</a>
	</div>
</div>
@endsection