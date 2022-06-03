export async function greetingHandler(event) {
  return {
    message: "Hello World from Lambda!!",
    dbName: process.env.DB_NAME,
  };
}
