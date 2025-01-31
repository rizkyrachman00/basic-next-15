// export async function GET() {
//   console.log("api dipanggil !!");

//   return new Response("Hello, from backend", { status: 200 });
// }

export async function GET() {
  console.log("api dipanggil !!");

  return Response.json({
    message: "halo dari backend",
    status: 200,
  });
}

// export const GET = async () => {
//   console.log("api dipanggil !!");
//   return new Response("Hello, from backend", { status: 200 });
// };
