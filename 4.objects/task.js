function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
  }
  
  let student1 = new Student('Джоэл', 'мужской', 25);
  let student2 = new Student('Элли', 'женский', 19);
  
  Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marks) {
	if (this.hasOwnProperty("marks")) {
	  this.marks.push(...marks);
	}
  };
  
  Student.prototype.getAverage = function () {
	if (this.hasOwnProperty("marks")) {
	  return this.marks.reduce((acc, value) => acc + value / this.marks.length, 0);
	} else {
	  return 0;
	}
  };
  
  Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
  };
  