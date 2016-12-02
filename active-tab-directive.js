angular.app('activeTabApp', [])
.directive('activeTab', [function(){
	return {
	    restrict: 'A',
	    link: function(scope, element, attrs, controller) {
	      var path;
	      scope.$watch(function(){
	      	return attrs.href||attrs.ngHref;
	      }, function(href){
	      	path = href;
	      });
	      scope.location = location;
	      scope.$watch('location.hash', function(newPath, oldPath) {
	        if (path === newPath) {
	          element.addClass('active-tab');
	        } else {
	          element.removeClass('active-tab');
	        }
	      });
	    }
	}
}])
