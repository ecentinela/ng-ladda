/**!
 * AngularJS ladda directive
 * @author Javier Martínez <ecentinela@gmail.com>
 * @version 0.1.0
 */

(function () {

  angular.module('ngLadda', []).directive(
    'ngLadda',
    [
      '$timeout',
      function ($timeout) {
        return {
          link: function ($scope, $element, $attrs) {
            $timeout(function () {
              var ladda = Ladda.create($element[0]);

              $scope.$watch($attrs.ngLadda, function (newVal) {
                if (newVal) {
                  if (!ladda.isLoading()) {
                    ladda.start();
                  }

                  if (angular.isNumber(newVal)) {
                    ladda.setProgress(newVal / 100);
                  }
                } else {
                  ladda.stop();
                }
              });
            });
          }
        };
      }
    ]
  );

})();
