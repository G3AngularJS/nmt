var StudentApp = angular.module("Student", []);
StudentApp.controller("StudentController", function ($scope,$rootScope) {
    $scope.student = {
        FirstName: "Ram",
        Address:[
            { Name: "Siba", Village: "X", Dist: "CTC", pin: "201301", Age: "20" },
            { Name: "Ram", Village: "Y", Dist: "BBSR", pin: "751021", Age: "20" },
            { Name: "Sham", Village: "Z", Dist: "RKL", pin: "751012", Age: "20" },
            { Name: "Jay", Village: "TT", Dist: "KHU", pin: "751011", Age: "20" },
        ],
        Scholl: "HSC"

    }
console.log("Hello");

////  BroadCast value (Call one controller to another controller)
$scope.resultArr=["Result is Added"];
$rootScope.$on("data_send",function(event,args)
{
var StrLogTest=args.operation+"result is" +args.result;
$scope.resultArr.push(StrLogTest);

});

});