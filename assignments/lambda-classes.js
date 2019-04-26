// CODE here for your Lambda Classes

class Person {
    constructor(attribute) {
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attribute) {
        super(attribute);
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    } 
}

class Student extends Person {
    constructor(attribute) {
        super(attribute);
        this.previousBackground = attribute.previousBackground;
        this.className = attribute.className;
        this.favSubjects = attribute.favSubjects;
    }
    listsSubjects() {
        console.log(Student.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begin sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(attribute) {
        super(attribute);
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37, 
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

const Junior = new Instructor ({
    name: 'Junior', 
    location: 'South Florida', 
    age: 24, 
    gender: 'male', 
    specialty: 'CSS3', 
    favLanguage: 'Python', 
    catchPhrase: 'Bet'
})

const Igor = new Student ({
    name: 'Igor', 
    location: 'South Florida', 
    age: 24,
    gender: 'male', 
    previousBackground: 'Mechanic', 
    className: 'WEBPT6', 
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const Zev = new ProjectManager ({
    name: 'Zev', 
    location: 'South Florida', 
    age: 23, 
    gender: 'male', 
    gradClassName: 'PT6', 
    favInstructor: 'Dan'
})