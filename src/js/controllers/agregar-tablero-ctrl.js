app.controller("AgregarTableroCtrl",["$scope","$firebaseArray","FBURL",function($scope,$firebaseArray,FBURL){
    $scope.tsubmit=function (){
        var root = new Firebase(FBURL);
        var ref = $firebaseArray(root.child("/tableros"));
        
        if (val_data()){
            ref.$add({
                nombre : $scope.tnombre,
                desc : $scope.tdesc
            });
            alert("Tablero creado");
        }else{
            alert("Error");
        }
    }
    
    function val_data(){
        if($scope.tnombre.length <= 50 && $scope.tdesc.length <= 50){
            return true;
        }else{
            return false;
        }
    }
    
}]);