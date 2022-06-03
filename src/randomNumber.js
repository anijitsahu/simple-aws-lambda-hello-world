export async function randomNumberGenerator(e) {
  return {
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      received: JSON.parse(e.body),
      number: Math.floor(Math.random() * 10),
    }),
  };
}
