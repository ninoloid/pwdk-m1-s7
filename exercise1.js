// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj1Values = Object.values(obj1);

  const obj2Keys = Object.keys(obj2);
  const obj2Values = Object.values(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  const checkedKeys = {};
  let isEqual = true;

  for (let i = 0; i < obj1Keys.length; i++) {
    const currentKey = obj1Keys[i];
    if (checkedKeys[currentKey]) {
      isEqual = false;
      break;
    }

    const indexOfObj2Keys = obj2Keys.indexOf(currentKey);
    if (obj1Values[i] !== obj2Values[indexOfObj2Keys]) {
      isEqual = false;
      break;
    }

    checkedKeys[currentKey] = true;
  }

  return isEqual;
};

const obj1 = {
  name: "john",
  age: 10,
};

const obj2 = {
  name: "john",
  age: 10,
};

const obj3 = {
  name: "lennon",
  age: 10,
};

console.log(isEqual(obj1, obj2));
