
var getCsrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');

var getLayoutId = document.querySelector('div[class=artboard]').getAttribute('data-layout-id');

var constructLayoutContent = function(vm_data) {
	var elements = vm_data.elements;
	
	var extracted = _.map(elements, function(value) {
		return _.pick(value, 'content', 'pos', 'size', 'bg_color', 'color', 'font-size');
	});
	
	return {
		size: vm_data.size,
		elements: extracted
	}
}

module.exports.getCsrfToken = getCsrfToken;
module.exports.getLayoutId = getLayoutId;
module.exports.constructLayoutContent = constructLayoutContent;
