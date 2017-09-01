app.controller("AgregarTableroCtrl",["$scope","$firebaseArray","FBURL",function($scope,$firebaseArray,FBURL){
    $scope.tsubmit=function (){
        var root = new Firebase(FBURL);
        var ref = root.child("/tableros");
        
        if (val_data()){
            var id =ref.push({
                nombre : $scope.tnombre,
                desc : $scope.tdesc
            });
            $(".alert").alert("sdsdsdds")
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