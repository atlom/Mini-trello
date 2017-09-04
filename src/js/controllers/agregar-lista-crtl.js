app.controller("AgregarListaCtrl",["$scope","$firebaseArray","FBURL",function($scope,$firebaseArray,FBURL){
    var root = new Firebase(FBURL);
    var ref = root.child("/listas");

    
}