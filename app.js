var blogjs = angular.module('publishjs', [])
.config(function($routeProvider){
  var nav = publishdata.config.navgation;
  for(i in nav) {
    $routeProvider .when(nav[i].href, { controller: contentController, templateUrl: 'app/home/index.html' })
  }
})
.run(function($rootScope){
    $rootScope.config = publishdata.config;
})

