'use strict';

angular.module('mLibrary')
    .directive('readMore', function () {
        var defaults = {
            hmlimit: 100,
            hmMoreText: 'read more',
            hmLessText: 'read less'
        };
        return {
            restrict: 'AE',
            scope: {
                hmtext: '@',
                hmlimit: '@',
                hmMoreText: '@',
                hmLessText: '@'
            },
            template: UiRouter.template('readmore'),
            require: 'readMore',
            controller: function () {
                var self = this;
                self.collapsed = true;

                self.toggle = function () {
                    self.collapsed = !self.collapsed;
                }
            },
            controllerAs: 'controller',
            link: function (scope, element, attrs, controller) {

                scope.options = angular.extend(defaults, scope);

                if (attrs.hmFullText == 'true') {
                    controller.toggle();
                }
            }
        };
    });
