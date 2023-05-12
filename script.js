const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
  },
};

function getNameAndAddress(obj) {
  const {
    name,
    address: { street },
  } = obj;

  return { name, street };
}

console.log(getNameAndAddress(person));
