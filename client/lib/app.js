angular.module('mLibrary',['angular-meteor', 'ui.router', 'ngResource', 'ngTagsInput', 'ngToast']);

angular.module('mLibrary').config(['ngToastProvider', function (ngToast) {
    ngToast.configure({
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
    });
}]);