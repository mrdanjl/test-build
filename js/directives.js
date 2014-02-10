angular.module('Five.directives', [])

.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background': 'url(' + url +') #000000',
            'background-size' : 'cover'
        });
    };
});
