// functions are written as Arrow Functions

const helloHandler = async (event) => {
  // sending custom  statusCode and body: JSON.stringify(...)
  const res = {
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
      "x-xss-protection": "1; mode=block",
      "x-frame-options": "DENY",
      "content-security-policy":
        "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'",
      "x-content-type-options": "nosniff",
      "strict-transport-security":
        "max-age=63072000; includeSubdomains; preload",
    },
    body: JSON.stringify({
      msg: "Hello world from AWS Lambda",
      event,
    }),
  };
  return res;
};

// exporting only a particular function
export { helloHandler };
