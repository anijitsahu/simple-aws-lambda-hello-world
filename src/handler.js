// functions are written as Arrow Functions

const helloHandler = async (event) => {
  // sending custom  statusCode and body: JSON.stringify(...)
  // sending a greeting message along with QueryString parameters
  const res = {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello world from AWS Lambda",
      squareOfRececeivedNum: square(event.queryStringParameters?.number || 5),
      event,
    }),
  };
  return res;
};

const square = (numberReceived) => {
  // generating number from String using JavaScript Number constructor
  let number = Number(numberReceived);
  return number * number;
};

// exporting only a particular function
export { helloHandler };
