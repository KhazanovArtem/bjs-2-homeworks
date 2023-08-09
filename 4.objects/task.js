function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (marks.length != 0 && "marks" in this) {
    this.marks.push(...marks);
    return this.marks;
    } else {return 0};
  
}

Student.prototype.getAverage = function () {
    if (this.marks = "" && "marks" in this) {
        return (this.marks.reduce((acc, mark) => acc + mark, 0)) / this.marks.length;
    } else return 0;

}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
