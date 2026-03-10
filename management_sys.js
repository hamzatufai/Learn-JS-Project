console.log("=/=======:- Student Management System -:========/=");

let database = [];

function addStudent() {
  const limitCount = parseInt(
    prompt("Enter Student Data limit you are entering: "),
  );

  if (isNaN(limitCount) || limitCount <= 0) {
    console.log("Invalid Input.");
    return;
  }

  for (let i = 1; i <= limitCount; i++) {
    let idInput = prompt("Enter Student Id:");

    if (!idInput) {
      console.log("Invalid input.");
      continue;
    }

    const id = idInput.toUpperCase().trim();

    const duplicate = database.some((student) => student.Id === id);

    if (duplicate) {
      console.log("This ID already exists.");
      continue;
    }

    const name = prompt("Enter Student name").trim();

    if (!name || /[^a-zA-Z\s]/.test(name)) {
      console.log("Invalid Input.");
      continue;
    }

    const age = parseInt(prompt("Enter Age: "));

    if (isNaN(age) || age <= 0 || age > 40) {
      console.log("Invalid Age.");
      continue;
    }

    const totalCourses = parseInt(prompt("Enter selected courses (1-6): "));

    if (isNaN(totalCourses) || totalCourses <= 0 || totalCourses > 6) {
      console.log("Invalid Course Limit.");
      continue;
    }

    let courseList = [];

    for (let j = 1; j <= totalCourses; j++) {
      const course = prompt(`Enter course ${j} name`).toUpperCase();

      if (!course || course.trim() === "") {
        console.log("Invalid course.");
        j--;
        continue;
      }

      courseList.push(course);
    }

    database.push({
      Id: id,
      name: name,
      Age: age,
      courseList: courseList,
    });
  }
}

function viewStudent() {
  console.log("=/=========:- View Student -:=========/=");

  
  if (database.length === 0) {
    console.log("Database is empty.");
    return;
  }

  for (const key of database) {
    console.log(
      `ID: ${key.Id} | Name: ${key.name} | Age: ${key.Age} | Courses: ${key.courseList}`,
    );
  }
}

function searchStudent() {
  if (database.length === 0) {
    console.log("Database is empty.");
    return;
  }

 
  const UserId = prompt("Enter User Id: ").toUpperCase().trim();

  console.log("Searching in Database...");

  let found = false; 

  for (const key of database) {
    if (UserId === key.Id) {
      console.log(
        `ID: ${key.Id} | Name: ${key.name} | Age: ${key.Age} | Courses: ${key.courseList}`,
      );
      found = true;
      break;
    }
  }

  
  if (!found) {
    console.log("Student not found.");
  }
}

function updateStudent() {
  if (database.length === 0) {
    console.log("Database is empty.");
    return;
  }

  const confirm = prompt(
    "Are you sure want to update (yes/no): ",
  ).toLowerCase();

  if (confirm !== "yes") {
    console.log("Update cancelled.");
    return;
  }

  const UserId = prompt("Enter Student Id you want to update: ")
    .toUpperCase()
    .trim();

  let found = false;

  for (const key of database) {
    if (UserId === key.Id) {
      found = true;

      console.log("=============:- View Search -:===============");
      console.log(
        `ID: ${key.Id} | Name: ${key.name} | Age: ${key.Age} | Courses: ${key.courseList}`,
      );

      const name = prompt("Enter updated Student name: ").trim();
      const Age = parseInt(prompt("Enter updated Age: "));

      const limit = parseInt(prompt("Enter course limit (1-6): "));

      if (limit > 6 || limit <= 0 || isNaN(limit)) {
        console.log("Invalid course limit.");
        return;
      }

      let courseList = [];

      for (let i = 1; i <= limit; i++) {
        const courseName = prompt(`Enter course ${i} name`).toUpperCase();
        courseList.push(courseName);
      }

      key.name = name;
      key.Age = Age;
      key.courseList = courseList;

      console.log("==============:- View Update -:=================");
      console.log(
        `ID: ${key.Id} | Name: ${key.name} | Age: ${key.Age} | Courses: ${key.courseList}`,
      );

      console.log("Updated Successfully.");
      break;
    }
  }

  if (!found) {
    console.log("Student not found.");
  }
}

function deleteStudent() {
  if (database.length === 0) {
    console.log("Database is empty.");
    return;
  }


  const UserId = prompt("Enter Student Id want to delete: ")
    .toUpperCase()
    .trim();

 
  const index = database.findIndex((student) => student.Id === UserId);

  if (index === -1) {
    console.log("Student not found.");
    return;
  }

  console.log("=============:- View Delete -:===============");

  console.log(
    `ID: ${database[index].Id} | Name: ${database[index].name} | Age: ${database[index].Age} | Courses: ${database[index].courseList}`,
  );

  
  database.splice(index, 1);

  console.log("Deleted Successfully.");
}

function main() {
  console.log(
    "1) addStudent 2) searchStudent 3) viewStudent 4) updateStudent 5) deleteStudent 6) Exit",
  );

  let start = true;

  while (start) {
    const userScreen = parseInt(prompt("Enter number (1-6):"));

    if (isNaN(userScreen) || userScreen <= 0) {
      console.log("Invalid user Input.");
      continue;
    }

    switch (userScreen) {
      case 1:
        addStudent();
        break;

      case 2:
        searchStudent();
        break;

      case 3:
        viewStudent();
        break;

      case 4:
        updateStudent();
        break;

      case 5:
        deleteStudent();
        break;

      case 6:
        console.log("Exiting...");
        start = false;
        break;

      default:
        console.log("Invalid option.");
    }
  }
}

main();
