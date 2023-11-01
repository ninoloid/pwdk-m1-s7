// Create a function that can accept input as an array of objects
// and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

const swapObjectKeysValues = (arr) => {
  return arr.map((item) => {
    const keys = Object.keys(item);
    const values = Object.values(item);

    const swappedObject = {};
    values.forEach((value, index) => {
      swappedObject[value] = keys[index];
    });

    return swappedObject;
  });
};

const input = [{ name: "David", age: 20 }];
const swappedObjectKeysAndValues = swapObjectKeysValues(input);
console.log(swappedObjectKeysAndValues);
