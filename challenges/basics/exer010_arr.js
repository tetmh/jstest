// separated data and logic
// updated index.html for script referencing- order matters

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log
//console.log(students);

const upStudent = students.map(function (arrStudent) {
    //console.log(arrStudent);
    arrStudent.role = 'student';
    return arrStudent;
});

console.log(upStudent);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScore = students.filter(function (arrStudent) {
    return arrStudent.score >= 82;
});

console.log(highScore);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function (arrStudent) {
    return arrStudent.id === 103;
});

console.log(specificId);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const redRec =
    students.reduce(function (acscr, itm) {
        //console.log(`score ${acscr}`);
        //console.log(`current score : ${itm.score}`);
        acscr += itm.score;

        return acscr;
    }, 0) / students.length;

console.log(`average score in record ${redRec}`);

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const stdSubject = students.reduce(function (survey, arrStd) {
    // console.log(arrStd.subj);
    const favSubj = arrStd.subj;

    if (survey[favSubj]) {
        survey[favSubj] += 1;
    } else {
        survey[favSubj] = 1;
    }
    return survey;
}, {});

console.log(stdSubject);
