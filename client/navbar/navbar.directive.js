/**
 * Created by jermorin on 13/06/2015.
 */
angular.module('mLibrary')
    .directive('navbar', function () {
        return {
            restrict: 'AE',
            template: UiRouter.template('navbar'),
            transclude: true,
            controller: function ($scope, $location) {
                $scope.isActive = function (viewLocation) {
                    return viewLocation === $location.path();
                }
            }
        };
    });