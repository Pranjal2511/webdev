const student = {
    id: 21,
    Name: "Pranjal",
    Course: "Btech",
    address: {
        city: "Lucknow",
        country: "India"
    },
    marks: [100, 92, 70, 95],
    admissionStatus: "Pass"
};
function displayDate({id,Name,Course,address: { city, country },marks: [m1, m2, m3, m4],admissionStatus}) {
    console.log("ID:", id);
    console.log("Name:", Name);
    console.log("Course:", Course);
    console.log("City:", city);
    console.log("Country:", country);
    console.log("English Marks:", m1);
    console.log("Maths Marks:", m2);
    console.log("Science Marks:", m3);
    console.log("Hindi Marks:", m4);
    const averageMarks = (m1 + m2 + m3 + m4) / 4;
    console.log("Average Marks:", averageMarks);

    if (averageMarks >= 80) {
        console.log("Result: Eligble for merit Scholorship");
    } else {
        console.log("Result: regular admission");
    }
    console.log("Admission Status:", admissionStatus);
}

displayDate(student);
