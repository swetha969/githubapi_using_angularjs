
var my_app = angular.module('my_app', []);
my_app.controller('TestCtrl', function($scope, $http) {
   
    $scope.firstCall = function() {
        var url = "https://api.github.com/users/" + $scope.custom_txt + "/repos";
        $http({
            url:"https://api.github.com/users/" + $scope.custom_txt + "/repos",
            dataType: 'json',
            method: 'GET',
            data: '',
            headers: {
                "Content-Type": "application/json"  
            }
        }).success(function(data){
            $scope.githublist = data;
        }).error(function(error){
            console.log("error");
        });
    }
})