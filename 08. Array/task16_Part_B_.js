

// =====================================>    Task 16     <===========================================

// =======================> B - Mini Assignment 2: Classroom Attendance Tracker <==========================


// ========>            <========
// ========>  Part - B  <========
// ========>            <========



// 1. Loop through each student.
// 2. Count total Presents and Absents.
// 3. Calculate attendance percentage.

// 4. Print in this format
// Name: Jenil
// Present: 4
// Absent: 1
// Attendance: 80%
// Status: Good

// 5. Status rule:
//    ≥ 75% → Good
//    < 75% → Low Attendance

// 6. Bonus: Print the name of the student with highest attendance.





const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];

// (P = Present, A = Absent)

let highestAttendence = 0;
let topAttendence = ""

for(let i=0; i<=attendance.length-1; i++){
    let studentName = attendance[i][0];
    let studentAttendence = attendance[i][1];
    let present=0;
    let absent=0;

    for(let j=0; j<=studentAttendence.length-1; j++){
        studentAttendence[j]=="P" ? present++ : absent++;
    }

    let attendancePercentage = (present/(present+absent)) * 100;
    if(attendancePercentage>highestAttendence){
        highestAttendence = attendancePercentage
        topAttendence = studentName;
    }
    let status = attendancePercentage>=75 ? "Good" : "Low attendence";
    console.log("Name:", studentName);
    console.log("Present:", present);
    console.log("Absent:", absent);
    console.log("Attendance:", attendancePercentage);
    console.log("Status:", status);
    console.log("----------------")
}

console.log("Highest Attendence =>", topAttendence)