(function() {
  'use strict';


  /**
   * @ngdoc overview
   * @name shSpringMeetingAngularApp
   * @description
   * # shSpringMeetingAngularApp
   *
   * Main module of the application.
   */
  angular
    .module('shSpringMeetingAngularApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'        
      })
      .otherwise({
        redirectTo: '/'
      });

  }
})();
