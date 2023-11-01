// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const splitKeyAndValue = (obj) => {
  return {
    keys: Object.keys(obj),
    values: Object.values(obj),
  };
};

const findIntersect = (obj1, obj2) => {
  const intersect = {};

  const splittedObj1 = splitKeyAndValue(obj1); // {keys: [], values: []}
  const splittedObj2 = splitKeyAndValue(obj2);

  splittedObj1.keys.forEach((key, indexOfObj1Key) => {
    if (splittedObj2.keys.includes(key)) {
      const indexOfObj2Key = splittedObj2.keys.indexOf(key);

      if (
        splittedObj2.values[indexOfObj2Key] ===
        splittedObj1.values[indexOfObj1Key]
      ) {
        intersect[key] = splittedObj2.values[indexOfObj2Key];
      }
    }
  });

  return intersect;
};
