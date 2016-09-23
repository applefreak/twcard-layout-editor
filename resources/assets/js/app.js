
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

var app = new Vue({
	el: 'body',
	data: {
		elements:
		[
			{
				content: "Hello World!",
				styles: {
					'background-color': '#2299EE',
					color: 'white',
					'font-size': '20px'
				},
				pos: {
					x: 10,
					y: 20
				},
				size: {
					width: 100,
					height:100
				}
			},
			{ 
				content: "Hello World again!",
				styles: {
				'background-color': '#2299FF',
				color: 'white',
				'font-size': '20px'
				},
				pos: {
					x: 450,
					y: 250
				},
				size: {
					width: 150,
					height:150
				}
			}
		]
	},
	components: {
		textbox: require('./components/TextBox.vue'),
		'properties-bar': require('./components/PropertiesBar.vue')
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
	}
});
