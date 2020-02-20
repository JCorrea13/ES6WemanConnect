var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON);

var obj1 = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj1);