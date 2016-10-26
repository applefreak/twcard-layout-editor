@extends('layouts.app')

@section('content')
<div class="container">
	<div class="list-group">
		@foreach ($layouts as $layout)
		<a class="list-group-item" href="{{ action('LayoutController@edit', ['id' => $layout->id]) }}">Layout ID: {{ $layout->id }}</a>
		@endforeach
		<a class="list-group-item" href="{{ action('LayoutController@create') }}">Create New Layout</a>
	</div>
</div>
@endsection