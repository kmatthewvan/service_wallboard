
angular.module('scw').
    controller('alert_controller', function($scope) {

//Alerts
  //Change the box background colours based on the text value.
  $scope.colour = function() {

	console.log('alerts running');
    //alert: Ready
    if ($scope.Row1_Box_01 == 0) {
      $scope.Row1_Box_01_colour = "stage stage-alert";
      $scope.Row1_Box_01_title = "Alert";
    } else if ($scope.Row1_Box_01 == 1) {
      $scope.Row1_Box_01_colour = "stage stage-warning";
      $scope.Row1_Box_01_title = "Alert";
    } else {
      $scope.Row1_Box_01_colour = "stage stage-green";
      $scope.Row1_Box_01_title = "Title 01";
    }

    //alert: Waiting
    if ($scope.Row1_Box_01 <= 0 && $scope.Row1_Box_04 == 1) {
      $scope.Row1_Box_04_colour = "stage stage-warning";
      $scope.Row1_Box_04_title = "Alert 2";
    } else if ($scope.Row1_Box_01 <= 0 && $scope.Row1_Box_04 >= 2) {
      $scope.Row1_Box_04_colour = "stage stage-alert";
      $scope.Row1_Box_04_title = "Alert 1";
    } else {
      $scope.Row1_Box_04_colour = "stage stage-green";
      $scope.Row1_Box_04_title = "Title 04";
    }

    //label: Password Reset
    if ($scope.Row2_Box_01_Time0 == "") {
        $scope.Row2_Box_01_title = "Title 05";
    } else {
      $scope.Row2_Box_01_title = "Title 05";
      $scope.empty = 'stage-blue';
    }

    //label: Interactions
    if ($scope.Row2_Box_03 == "") {
      $scope.Row2_Box_03_title = "No Value";
      $scope.Row2_Box_02_title = "No Value";
    } else {
      $scope.Row2_Box_02_title = "Title 06";
      $scope.Row2_Box_03_title = "Title 07";
    }

    //alert: Longest Interaction Time
    var intTime = $scope.Row2_Box_03.replace(":", "").trim();

    if (intTime >= '055') {
      $scope.Row2_Box_03_colour = "stage stage-alert";
    } else if (intTime >= '045') {
      $scope.Row2_Box_03_colour = "stage stage-warning";
    } else {
      $scope.Row2_Box_03_colour = "stage stage-blue";
    }

    //alert: Longest Interaction Time
    var intPass = $scope.Row2_Box_01_Time0.replace(":", "").trim();

    if (intPass >= 2400) {
      $scope.Row2_Box_01_colour = "stage stage-alert";
    } else if (intPass >= 2355) {
      $scope.Row2_Box_01_colour = "stage stage-warning";
    } else {
      $scope.Row2_Box_01_colour = "stage stage-blue";
    }

    //alert: Interaction Count
    var intCount = $scope.Row2_Box_02;

    if (intCount >= 20) {
      $scope.Row2_Box_02_colour = "stage stage-alert";
    } else if (intCount >= 15) {
      $scope.Row2_Box_02_colour = "stage stage-warning";
    } else {
      $scope.Row2_Box_02_colour = "stage stage-blue";
    }

    //alert: Interaction Count
    var intAvdWait = $scope.Row3_Box_03.replace(":", "").trim();

    if (intAvdWait >= '020') {
      $scope.Row3_Box_03_colour = "stage stage-alert";
    } else if (intAvdWait >= '012') {
      $scope.Row3_Box_03_colour = "stage stage-warning";
    } else {
      $scope.Row3_Box_03_colour = "stage stage-green";
    }
  };
});