app.controller("TableroCtrl",["$scope","$firebaseArray","FBURL",function($scope,$firebaseArray,FBURL){
    var root = new Firebase(FBURL);
    var ref = root.child("/tableros");
    $scope.tableros = $firebaseArray(ref);
}])