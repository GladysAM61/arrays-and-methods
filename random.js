var nums=[1,2,3,4];
console.log("original: ", nums);
// adding an item to the nums array
function push(item) {
   nums[nums.length]=item;
}
push(5);
console.log("push: ", nums);
// Using a for loop , we added elememts to the array
var nombres=["Benito","Rauwlito","JuniorH","KarolG","GeradoOrtiz"];
console.log("original: ", nombres);
function pop(){
    var name=[];
    for (let i=0; i< nombres.length-1;i++){
        // You are comparing name and nombres
        name[i] = nombres[i];
    }
    nombres = name;
}
pop();
console.log("pop: ", nombres);

var dias=["Monday","Tuesday","Wednesday","Thursday","Friday"];
// we are adding all the elements together to a new variable without including the "'"
function toString(){
    var days = "";
    for(var i =0; i<dias.length; i++){
        // using an if statement basically saying that if its the last element to not add the "," after
        if(i === dias.length -1){
            days += dias[i];
        }else{
            days += dias[i] + ", ";
        }
    }
    return days;
}
console.log("toString: ", toString());

var meses = ["Enero","Febrero","Marzo","Abril","Mayo"];
// need to make them be all in one string and be separated by a "symbol"
// same thing as to string but it joins with a symbol of your preference rather than a ”,”
function join(sym){
        var unite = "";
        for(var i =0; i<meses.length; i++){
            if(i === meses.length -1){
                unite += meses[i];
            }
            else{
                unite += meses[i] + sym;
            }
        }
        return unite;
}
console.log("join: ", join("/"));

var personas = ["Ishita","Emily"]
// adds the array to the nums array
function concat(){
    for(var i =0; i<personas.length; i++){
       push(personas[i]);
    }
}
concat();
console.log(nums)