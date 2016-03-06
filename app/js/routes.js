'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home',
    {
    url: '/',
    controller: 'playersCtrl as playersCtrl',
    template: require('../views/player.html'),
    title: 'Home'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;
