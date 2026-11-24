
// ===========================> Task 12  <======================================

// =======================>   Real-World Example  <==============================




const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg);
}



//  Que. 1
//  In the given marks example, what does marks[i] represent inside the loop?

//  => marks[i] represent the marks of each student



//  Que. 2
//  Why do we use marks.length in the outer loop instead of hard-coding the number 3?

//  => because we want to make our code dynamic , if in future anyone update the matrix then our code should be run that time



//  Que. 3
//  What will happen if one student has only 2 subject marks instead of 3? (Think about the calculation)

//  => first comes out Undefined instead of third mark , then in calculation ( 5 + Undefined ) will became NaN




// ==========================================================
// ======================> End <=============================
// ==========================================================

