
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
const interactjs = require('interact.js')
const helper = require('./helper')
const defaults = require('./default_elements')

var app = new Vue({
	el: '#editor',
	data: {
		size: {
			width: 900,
			height: 540
		},
		elements: [],
		// [
		// 	{
		// 		content: "Hello World!",
		// 		pos: {
		// 			x: 10,
		// 			y: 20
		// 		},
		// 		size: {
		// 			width: 100,
		// 			height:100
		// 		},
		// 		'bg_color': '#2299EE',
		// 		color: 'white',
		// 		'font-size': 20
		// 	},
		// 	{ 
		// 		content: "Hello World again!",
		// 		pos: {
		// 			x: 450,
		// 			y: 250
		// 		},
		// 		size: {
		// 			width: 150,
		// 			height:150
		// 		},
		// 		'bg_color': '#2299FF',
		// 		color: 'white',
		// 		'font-size': 20
		// 	}
		// ],
		current: false,
		defaults: defaults
	},
	computed: {
		getSize: function() {
			return {
				width: this.size.width + 'px',
				height: this.size.height + 'px'
			}
		}
	},
	components: {
		textbox: require('./components/TextBox.vue'),
		'properties-bar': require('./components/PropertiesBar.vue')
	},
	methods: {
		save: function() {
			if (this.layout_id === 'new') {
				console.log('Creating New Layout...');
				this.resource.save(helper.constructLayoutContent(this)).then(function(res) {
					this.layout_id = res.layout_id;
					console.log('Layout Created!', res);
				});
			} else {
				console.log('Saving Existing Layout...');
				this.resource.update({id: this.layout_id}, helper.constructLayoutContent(this)).then(function(res) {
					console.log('Layout Updated!', res);
					console.log(res);
				});
			}
			
		},
		add_element: function(type) {
			this.elements.push(defaults[type]);
		}
	},
	directives: {
		interact: {
			twoWay: true,
			params: ['dir-element'],
			bind: function () {
				var self = this
				this.params.dirElement.interact = interactjs(this.el).draggable(true)
				.resizable({
					preserveAspectRatio: false,
					edges: { left: true, right: true, bottom: true, top: true }
				})
				.restrict({
					drag: 'parent',
					endOnly: true,
					elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
				}).on('dragmove', function(event) {
					self.params.dirElement.pos.x += event.dx
					self.params.dirElement.pos.y += event.dy
				}).on('resizemove', function(event) {
					self.params.dirElement.size.width = event.rect.width
					self.params.dirElement.size.height = event.rect.height
					self.params.dirElement.pos.x += event.deltaRect.left
					self.params.dirElement.pos.y += event.deltaRect.top
				})
			}
		}
	},
	events: {
		item_selected: function (e) {
			this.current = this.elements[e]
		}
	},
	created: function() {
		this.$http.headers.common['X-XSRF-TOKEN'] = helper.getCsrfToken;
		// this.$http.options.root = '/root';
		this.resource = this.$resource('/layouts{/id}');
		this.layout_id = helper.getLayoutId;
		if (this.layout_id !== 'new') {
			this.resource.get({id: this.layout_id}).then(function(res) {
				this.size.width = res.data.width;
				this.size.height = res.data.height;
				this.elements = JSON.parse(res.data.elements);
				console.log('Done Loading Layout');
			});
		}
	}
});
