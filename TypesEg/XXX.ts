
import { Example } from "./namespace";
namespace ExampleDetails{
    

    class Marks extends Example.Student{
        private subject:string[];
        private marks:number[];
       
        constructor(id,name,fresher,subject,marks){
            super(id,name,fresher);
            this.subject=subject;
            this.marks=marks;
        }
        public DisplaySTudentMarks(){
            console.log(this.subject[0]+":"+this.marks[0]);
            console.log(this.subject[1]+":"+this.marks[1]);
            console.log(this.subject[2]+":"+this.marks[2]);
        }
    }
    let marksObj:Marks =new Marks(1,"Sravanthi",true,["Maths","Science","Social"],[50,40,30]);
    marksObj.DisplaySTudentMarks();
}

