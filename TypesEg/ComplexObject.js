var subjects;
(function (subjects) {
    subjects[subjects["maths"] = 1] = "maths";
    subjects[subjects["science"] = 2] = "science";
    subjects[subjects["social"] = 3] = "social";
})(subjects || (subjects = {}));
;
var student = {
    firstname: "sravanthi",
    fees: 10000,
    fresher: true,
    address: {
        res: "Nehrunagar",
        office: "Vidyanagar",
        phone: "1234"
    },
    marks: [50, 60, 70],
    DisplayStudent: function (marks) {
        console.log(subjects[1] + ":" + marks[0]);
        console.log(subjects[2] + ":" + marks[1]);
        console.log(subjects[3] + ":" + marks[2]);
    }
};
console.log("---------------------------------");
console.log("First Name : " + student.firstname);
console.log("Fees : " + student.fees);
console.log("Fresher : " + student.fresher);
console.log("Residence Address : " + student.address.res);
console.log("Office Address : " + student.address.office);
console.log("Phone : " + student.address.phone);
student.DisplayStudent(student.marks);
console.log("---------------------------------");
var students = {
    fname: this.firstname,
    fees: this.fees,
    fresher: this.fresher,
    address: {
        res: this.res,
        office: this.office,
        phone: this.phone
    },
    marks: [50, 60, 70],
    DisplayStudent: function () {
        console.log("---------------------------------");
        console.log("First Name : " + students.fname);
        console.log("Fees : " + students.fees);
        console.log("Fresher : " + students.fresher);
        console.log("Residence Address : " + students.address.res);
        console.log("Office Address : " + students.address.office);
        console.log("Phone : " + students.address.phone);
        console.log(subjects[1] + ":" + students.marks[0]);
        console.log(subjects[2] + ":" + students.marks[1]);
        console.log(subjects[3] + ":" + students.marks[2]);
        console.log("---------------------------------");
    }
};
students.DisplayStudent();
