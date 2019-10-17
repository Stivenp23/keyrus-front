var app = angular.module("app",[]);

app.controller("appCtrl", function ($scope, $timeout) {
    $scope.text= "";
    $scope.status = false;
    $scope.submitForm = function (isValid) {
        $scope.status = true;
        if (isValid) {
            $scope.text= "Éxito";

        }else {
            $scope.text= "Error";
        }
        $timeout(function(){
            $scope.status = false;
        }, 3000);
    }
    $scope.change = function () {
        $scope.status = false;
    }
});