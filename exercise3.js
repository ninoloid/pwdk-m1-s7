// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]

const mergeArrayAndRemoveDuplicates = (arr1, arr2) => {
  const exists = [];
  const merged = [...arr1, ...arr2].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const uniqueMerged = merged.filter((item) => {
    const values = Object.values(item);

    let isUnique = true;
    for (const value of values) {
      if (exists.includes(value)) {
        isUnique = false;
        break;
      } else {
        exists.push(value);
      }
    }

    if (isUnique) {
      return item;
    }
  });

  return uniqueMerged;
};

const student1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const student2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const mergedArray = mergeArrayAndRemoveDuplicates(student1, student2);
console.log(mergedArray);
