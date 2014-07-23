// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc', ['ionic', 'ngCookies']).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  }).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'src/controllers/menu.html'
    });
    $stateProvider.state('app.player', {
      url: '/player',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/player/player.html',
          controller: 'PlayerCtrl'
        }
      }
    });
    $stateProvider.state('app.browse', {
      url: '/browse?path',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/player/browse.html',
          controller: 'PlayerBrowseCtrl'
        }
      }
    });
    $stateProvider.state('app.movie_browse', {
      url: '/movie',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/movie/browse.html',
          controller: 'MovieBrowseCtrl'
        }
      }
    });
    $stateProvider.state('app.movie_player', {
      url: '/movie/player?name',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/movie/player.html',
          controller: 'MoviePlayerCtrl'
        }
      }
    });
    $stateProvider.state('app.obd_last_results', {
      url: '/obd/last_results',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/obd/last_results.html',
          controller: 'ObdLastResultsCtrl'
        }
      }
    });
    $stateProvider.state('app.settings', {
      url: '/settings',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/settings/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    });
    $stateProvider.state('app.settings_video', {
      url: '/settings/video',
      views: {
        menuContent: {
          templateUrl: 'src/controllers/settings/video.html',
          controller: 'SettingsVideoCtrl'
        }
      }
    });
    $urlRouterProvider.otherwise('/app/player');
  }).config(function($httpProvider) {
    return $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  });

}).call(this);
