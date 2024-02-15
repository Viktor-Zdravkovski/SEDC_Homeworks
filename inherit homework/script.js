// Create a Person constructor function that has:
// firstName
// lastName
// age
// getFullName - method

// Create a Student constructor function that inherits from Person and has:
// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName

// Create two Student objects

class Person {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.getFullName = function () {
            console.log(`Person's Full name is: ${this.fName} ${this.lName}`);
        }
    }
}

class Student extends Person {
    constructor(fName, lName, age, academyName, studentId) {
        super(fName, lName, age);
        this.academyName = academyName;
        this.studentId = studentId;
        this.study = function () {
            console.log(`The student ${fName} is studying in the ${this.academyName} `);
        }
    }
}

let Student1 = Object.create(new Student(`Viktor`, `Zdravkovski`, 22, `SEDC`, 32));
let Student2 = Object.create(new Student(`Marko`, `Stojanov`, 25, `LSPD`, 46));

console.log(`=========Student1=========`);
Student1.getFullName();
Student1.study();
console.log(`================`);
console.log(`=========Student2=========`);
Student2.getFullName();
Student2.study();
console.log(`================`);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// iskreno bonusot ne znam kolku mi e tochen


// BONUS

// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.
// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// CodeStudent
// hasIndividualProject - boolean  
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is
// working on the project of that type and set the value to true on the property of the project 

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy


class DesignStudent extends Student {
    constructor(fName, lName, age, academyName, studentId, isStudentOfTheMonth) {
        super(fName, lName, age, academyName, studentId)
        this.isStudentOfTheMonth = isStudentOfTheMonth;
        this.attendAdobeExam = function () {
            console.log(`The student ${fName} is doing adobe exam`);
        }
    }
}

class CodeStudent extends DesignStudent {
    constructor(fName, lName, age, academyName, studentId, isStudentOfTheMonth, hasIndProject, hasGroupProject) {
        super(fName, lName, age, academyName, studentId, isStudentOfTheMonth)
        this.hasIndProject = hasIndProject;
        this.hasGroupProject = hasGroupProject;
        this.doProject = function () {
            let promt = prompt(`Is that person works on group or individual project?`)

            if (promt === `inndividual` || `group`) {
                console.log(`person is working on the project of that type`) // ova ne raboti kako shto zamisliv, ama iskreno i ne mozham da razberam zashto
            } else {
                console.log(`Ne vnesovte validna vrednost`)
            }
        }
    }
}

class NetworkStudent extends CodeStudent {
    constructor(fName, lName, age, academyName, studentId, isStudentOfTheMonth, hasIndProject, hasGroupProject, academyPart) {
        super(fName, lName, age, academyName, studentId, isStudentOfTheMonth, hasIndProject, hasGroupProject)
        this.academyName = academyPart
        this.attendCiscoExam = function () {
            console.log(`the student ${fName} is doing a cisco exam`);
        }
    }
}
console.log(`===========FINAL=========`);
let students1 = Object.create(new NetworkStudent(`Damjan`, `Dimovski`, 20, `DCPD`, 62, false, true, false, 62))
let students2 = Object.create(new NetworkStudent(`Bojan`, `Kuzmanovski`, 19, `DCFD`, 52, true, false, true, 55))

// console.log(students1.doProject());
console.log(students1.attendAdobeExam());