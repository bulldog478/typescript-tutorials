import HomeController from "./home.ctrl.ts";

let HomeRoute :angular.route.IRoute = {
    controller: HomeController,
    template: require("./home.html")    
};
module.exports = HomeRoute;