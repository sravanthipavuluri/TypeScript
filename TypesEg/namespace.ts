 export namespace Example{
    export class Student{
        private id:number;
        private name:string;
        public fresher:boolean;

        constructor(id,name,fresher){
            this.id = id;
            this.name=name;
            this.fresher=fresher;
        }
        protected DisplayStudentInfo():void{
            console.log("Id: "+this.id);
            console.log("Name : "+this.name);
            console.log("Fresher: "+this.fresher);
        }
    }
    class Address extends Student{
        private res:string;
        private office:string;
        private phone:number;
        constructor(id,name,fresher,res,office,phone){
            super(id,name,fresher);
            this.res=res;
            this.office=office;
            this.phone=phone;
        }
        public DisplayStudentAddress(){
            this.DisplayStudentInfo();
            console.log("Residential Address: "+this.res);
            console.log("Office Address: "+this.office);
            console.log("Phone: "+this.phone);
        }
    }
    let addrObj:Address =new Address(1,"Sravanthi",true,"Nehrunagar","Vidyanagar",124);
    addrObj.DisplayStudentAddress();
}
