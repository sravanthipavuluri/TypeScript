var mytuple = [10,"Hello"];
console.log(mytuple[0]+"---"+mytuple[1]);
console.log(typeof(mytuple[0])+"---"+typeof(mytuple[1]));


var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)   ;
console.log(mytuple);                                 // append value to the tuple 
console.log("Items after push "+mytuple.length) ;
console.log("Items before pop "+mytuple.length) ;
console.log(mytuple.pop()+" popped from the tuple");
console.log(mytuple); // removes and returns the last item  
console.log("Items after pop "+mytuple.length);
