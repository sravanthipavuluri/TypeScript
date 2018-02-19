enum subjects
{
    maths=1,
    science=2,
    social=3
};
class StudentInfo{
    fname:string;
    fees:number;
    fresher:boolean;
    resAddr:string;
    officeAddr:string;
    phone:number;
    //address:Object;
    marks:Array<number>;
    constructor(fname:string,fees:number,fresher:boolean,resAddr:string,officeAddr:string,phone:number,marks:Array<number>){
        this.fname = fname;
        this.fees=fees;
        this.fresher=fresher;
        this.marks = marks;
        this.resAddr=resAddr;
        this.officeAddr=officeAddr;
        this.phone=phone;
    }
    public DisplayStudentInfo(){
        console.log("---------------------------------");
        console.log("First Name : "+this.fname);
        console.log("Fees : "+this.fees);
        console.log("Fresher : "+this.fresher);
        console.log(subjects[1]+":"+this.marks[0]);
        console.log(subjects[2]+":"+this.marks[1]);
        console.log(subjects[3]+":"+this.marks[2]);
        this.DisplayStudentAddress();
        console.log("---------------------------------");
    }
    protected DisplayStudentAddress(){
        console.log("---------------------------------");
        console.log("Residence Address : "+this.resAddr);
        console.log("Office Address : "+this.officeAddr);
        console.log("Phone : "+this.phone);
        console.log("---------------------------------");
    }
}
let marks:number[]=[10,20,30];
let sobj:StudentInfo =new StudentInfo("Krishna",10000,true,"Nehrunagar","Vidyanagar",1234,marks);
sobj.DisplayStudentInfo();
//sobj.DisplayStudentAddress();

