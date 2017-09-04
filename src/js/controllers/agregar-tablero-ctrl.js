app.controller("AgregarTableroCtrl",["$scope","$firebaseArray","FBURL",function($scope,$firebaseArray,FBURL){
    $scope.tsubmit=function (){
        var root = new Firebase(FBURL);
        var ref = root.child("/tableros");
        
        if (val_data()){
            var new_ref =ref.push();
            var id = new_ref.key();
            new_ref.set({
                nombre : $scope.tnombre,
                desc : $scope.tdesc,
                id_lista : id
            });
            alert("Creado");
        }else{
            alert("error");
        }
    }
    
    function val_data(){
        if($scope.tnombre != null && $scope.tdesc != null){
            if($scope.tnombre.length <= 50 && $scope.tdesc.length <= 50){
                return true;
            }else{
                return false;
            }
        }
    } 
}]);