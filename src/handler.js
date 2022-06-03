import { square } from "./square.js";
import { getUpperCase } from "./dbOps.js";

const hello = async (event) => {
  //  sending custom error by statusCode and body: JSON.stringify(...)
  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Query String is not present",
      }),
    };
  } else {
    const res = {
      msg: "Hello world from AWS Lambda",
      name: "anijit",
      squareOfRececeivedNum: square(event.queryStringParameters.number),
      event,
    };
    return JSON.stringify(res, null, 2);
  }
};

const generateUpperCase = async (event) => {
  const { name } = JSON.parse(event.body);
  if(!name){
    return {
      statusCode: 400,
      body: "Name field is missing"
    }
  }
  return getUpperCase(name);
};

export { hello, generateUpperCase };
