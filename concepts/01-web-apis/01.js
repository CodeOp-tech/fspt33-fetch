const firstName = "Bob";
const lastName = "Smith";

const greeting = () => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

setTimeout(greeting, 500);

console.log("end");
