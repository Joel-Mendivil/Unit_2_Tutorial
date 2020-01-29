
var array = [1,4,6,3,8,5,6,2,4,8,1,6,8,2]; //length = 14
for(var i = 0; i<array.length; i+=1){
   output.innerHTML += array[i]; 
}

//for Loop that starts at "4" goes through every number in the array and outputs it
for(var i = 1; i<array.length; i++){
   output.innerHTML += array[i]; 
}

//for Loop that starts at "3" goes through every other number in the array and outputs it
for(var i = 3; i<array.length; i+=2){
   output.innerHTML += array[i]; 
}

//for Loop that starts at "1" goes through every other number in half the array and outputs it
for(var i = 0; i<array.length/2; i+=2){
   output.innerHTML += array[i]; 
}

//for Loop that starts at "6" and adds every third number and then outputs the sum after its solved
var ans = 0;
for(var i = 2; i<array.length; i+=3){
   ans += array[i];
}
output.innerHTML = ans;

//for Loop that adds one more than the value at every index
var ans = 0;
for(var i = 0; i<array.length; i++){
   ans += array[i]+1;
}
output.innerHTML = ans;

//this is a new array that stores array + 3
var newArray = [];
for(var i = 0; i<array.length; i++){
   newArray[i] = array[i]+3;
}

//--------------------------------------------------------------------------------/
loop1:
   for(var i = 0; i<Array.length; i++){
    loop2:
    for(var j = 0; j<newArray.length; j++){
    if(array[i] === newArray[j]){
        continue loop1;
    }
    }

}