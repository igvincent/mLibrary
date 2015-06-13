/**
 * Created by jermorin on 13/06/2015.
 */
app
    .directive('navbar', function() {
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