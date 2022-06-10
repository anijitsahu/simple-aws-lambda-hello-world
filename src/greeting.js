// an async handler direct export

export async function greetingHandler() {
  // a simple return statement without any status code
  // default status is 200 I believe
  return {
    message: "Hello World from Lambda!!",
  };
}
