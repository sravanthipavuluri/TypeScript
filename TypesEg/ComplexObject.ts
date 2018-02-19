enum subjects{maths=1,science=2,social=3};
let student={
    firstname:"sravanthi",
    fees:10000,
    fresher:true,
    address:{
        res:"Nehrunagar",
        office:"Vidyanagar",
        phone:"1234"
    },
    marks:[50,60,70],
    DisplayStudent:function(marks){
        console.log(subjects[1]+":"+marks[0]);
        console.log(subjects[2]+":"+marks[1]);
        console.log(subjects[3]+":"+marks[2]);
    }
};
console.log("---------------------------------");
console.log("First Name : "+student.firstname);
console.log("Fees : "+student.fees);
console.log("Fresher : "+student.fresher);
console.log("Residence Address : "+student.address.res);
console.log("Office Address : "+student.address.office);
console.log("Phone : "+student.address.phone);
student.DisplayStudent(student.marks);
console.log("---------------------------------");

