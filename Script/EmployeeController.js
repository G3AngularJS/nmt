mainApp.controller("EmployeeController",function($scope){
$scope.employee={
firstnmae:"Jayant",
lastName:"Tripathy",
Age:30,
Technologies:[
{Name:"Asp .Net",Exp:"5 years"},
{Name:"C#",Exp:"5 years"},
{Name:"Sql Server",Exp:"4 years"},
{Name:"Java",Exp:"0 years"},
{Name:"Jquery",Exp:"3 years"}
],

fullname:function()
{
var EmployeeObject;
EmployeeObject=$scope.employee;
return EmployeeObject.firstnmae+" "+EmployeeObject.lastName;
}


}


});