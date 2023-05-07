function capitalizeKeys(obj) {
    const capitalizedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      capitalizedObj[key.toUpperCase()] = value;
    }
    return capitalizedObj;
  }
  const inputObj = {jack: "Three", jill: "Two", And: "one"};
  const capitalizedObj = capitalizeKeys(inputObj);
  console.log(capitalizedObj); 
    