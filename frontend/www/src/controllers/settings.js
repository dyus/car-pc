// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').controller('SettingsCtrl', function($scope, $ionicLoading, modalHelper, systemStatus, video, obd) {
    var loadFail, loadStatus, obdChanged, videoChanged;
    $scope.status = {
      videoCapturing: void 0,
      obdCapturing: void 0
    };
    loadFail = function(response) {
      $ionicLoading.hide();
      return modalHelper.show('Load Error', "Response status: " + response.status);
    };
    loadStatus = function() {
      if ($scope.status.videoCapturing === void 0 && $scope.status.obdCapturing === void 0) {
        $ionicLoading.show({
          template: 'Loading...'
        });
      }
      return systemStatus.loadStatus().then(function(status) {
        $ionicLoading.hide();
        $scope.status.videoCapturing = status.VIDEO_STARTED === "1";
        return $scope.status.obdCapturing = status.OBD_STARTED === "1";
      }, loadFail);
    };
    videoChanged = function(value) {
      var p;
      if (value) {
        p = video.startCapture();
      } else {
        p = video.stopCapture();
      }
      return p.then(loadStatus, loadFail);
    };
    obdChanged = function(value) {
      var p;
      if (value) {
        p = obd.startCapture();
      } else {
        p = obd.stopCapture();
      }
      return p.then(loadStatus, loadFail);
    };
    $scope.$watch('status.videoCapturing', function(newValue, oldValue) {
      if (oldValue !== void 0) {
        return videoChanged(newValue);
      }
    });
    $scope.$watch('status.obdCapturing', function(newValue, oldValue) {
      if (oldValue !== void 0) {
        return obdChanged(newValue);
      }
    });
    return loadStatus();
  });

}).call(this);
