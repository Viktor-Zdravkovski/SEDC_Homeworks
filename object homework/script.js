class Academy {
    constructor(name, start, end) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.students = []
        this.subjects = []
        this.numberOfClasses = () => {
            return this.subjects.length * 10;
        };
        this.studentPrinter = function () {
            console.log(`Students in ${this.name} :`);
            this.students.forEach(student => console.log(student.fName, student.lName));
        };
        this.subjectPrinter = function () {
            console.log(`Subjects in ${this.name} :`);
            this.subjects.forEach(subject => console.log(subject.title));
        };
    }
}

class Subject {
    constructor(title, ifElective, academy) {
        this.title = title;
        this.ifElective = ifElective;
        this.academy = academy;
        this.numberOfClasses = 10;
        this.students = [];
        this.overRideClasses = function (newNumberOfClasses) {
            if (newNumberOfClasses >= 3) {
                this.numberOfClasses = newNumberOfClasses;
            } else {
                console.error(`Number of classes must be 3 at least`);
            }
        }
    }
}

class Student {
    constructor(fName, lName, Age) {
        this.fName = fName;
        this.lName = lName;
        this.age = Age;
        this.completedSubjects = []
        this.Academy = null;
        this.CurrentSubject = null;
        this.startAcademy = function (academy) {
            this.academy = academy;
            academy.students.push(this);
        };
        this.startSubject = function (subject) {
            if (this.academy === null || !this.academy.subjects.includes(subject)) {
                console.error(`Cannot start academy. Student/Subject doesn't exist`)
                return;
            }
            else if (this.CurrentSubject !== null) {
                this.completedSubjects.push(this.CurrentSubject)
            }
            this.CurrentSubject = subject;
            subject.students.push(this)
        }
    }
}

let academy = new Academy(`Electronics Academy`, new Date(2023, 11, 12), new Date(2024, 11, 12))
let physicsSubject = new Subject(`Physics`, true, academy);
let chemistrySubject = new Subject(`Chemistry`, false, academy);
let student1 = new Student(`Viktor`, `Zdravkovski`, 22)
let student2 = new Student(`Marko`, `Stojanov`, 23)

academy.subjects.push(physicsSubject, chemistrySubject);
student1.startAcademy(academy);
student2.startAcademy(academy);
student1.startSubject(chemistrySubject);
student2.startSubject(physicsSubject);

academy.studentPrinter();
academy.subjectPrinter();