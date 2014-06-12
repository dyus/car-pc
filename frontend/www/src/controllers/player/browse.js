// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').controller('BrowseCtrl', function($scope, $timeout, $location, $anchorScroll, player, $stateParams, $state) {
    var openDir, path, playFile;
    path = $stateParams.path;
    $scope.content = [];
    $scope.parent = void 0;
    $scope.current = void 0;
    $scope.loaded = false;
    $scope.load = function() {
      return player.browse(path).then(function(items) {
        var item, name, parts, _i, _len, _results;
        $scope.loaded = true;
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (item.name === '..') {
            if (path) {
              $scope.parent = item;
            }
            parts = item.path.split('/');
            name = parts[parts.length - 2];
            _results.push($scope.current = {
              name: name,
              type: item.type,
              path: item.path.substr(0, item.path.length - 3),
              uri: item.uri.substr(0, item.uri.length - 3)
            });
          } else {
            _results.push($scope.content.push(item));
          }
        }
        return _results;
      });
    };
    $scope.load();
    $scope.goHome = function() {
      return $state.go('app.browse', {
        path: null
      });
    };
    openDir = function(item) {
      return $state.go('app.browse', {
        path: item.path
      });
    };
    playFile = function(playItem) {
      return player.empty().then(function() {
        return player.inPlay(playItem.path).then(function() {
          var item, _i, _len, _ref, _results;
          _ref = $scope.content;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            if (item.type === 'file' && item.path !== playItem.path) {
              _results.push(player.inEnqueue(item.path));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        });
      });
    };
    $scope.playDir = function(item) {
      return player.empty().then(function() {
        return player.inPlay(item.path);
      });
    };
    return $scope.process = function(item) {
      if (item.type === 'dir') {
        return openDir(item);
      } else {
        return playFile(item);
      }
    };
  });

}).call(this);