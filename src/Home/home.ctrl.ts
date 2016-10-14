export default class HomeController{
    constructor($scope:ng.IScope) {
        $scope["home"] = "i am home page"; 
    }
}

HomeController.$inject = ["$scope"];