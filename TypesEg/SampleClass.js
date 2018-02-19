var subjects;
(function (subjects) {
    subjects[subjects["maths"] = 1] = "maths";
    subjects[subjects["science"] = 2] = "science";
    subjects[subjects["social"] = 3] = "social";
})(subjects || (subjects = {}));
;
var StudentInfo = /** @class */ (function () {
    function StudentInfo(fname, fees, fresher, resAddr, officeAddr, phone, marks) {
        this.fname = fname;
        this.fees = fees;
        this.fresher = fresher;
        this.marks = marks;
        this.resAddr = resAddr;
        this.officeAddr = officeAddr;
        this.phone = phone;
    }
    StudentInfo.prototype.DisplayStudentInfo = function () {
        console.log("---------------------------------");
        console.log("First Name : " + this.fname);
        console.log("Fees : " + this.fees);
        console.log("Fresher : " + this.fresher);
        console.log(subjects[1] + ":" + this.marks[0]);
        console.log(subjects[2] + ":" + this.marks[1]);
        console.log(subjects[3] + ":" + this.marks[2]);
        this.DisplayStudentAddress();
        console.log("---------------------------------");
    };
    StudentInfo.prototype.DisplayStudentAddress = function () {
        console.log("---------------------------------");
        console.log("Residence Address : " + this.resAddr);
        console.log("Office Address : " + this.officeAddr);
        console.log("Phone : " + this.phone);
        console.log("---------------------------------");
    };
    return StudentInfo;
}());
var marks = [10, 20, 30];
var sobj = new StudentInfo("Krishna", 10000, true, "Nehrunagar", "Vidyanagar", 1234, marks);
sobj.DisplayStudentInfo();
