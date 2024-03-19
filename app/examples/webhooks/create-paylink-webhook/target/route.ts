export async function POST(req: Request, res: Response) {
  const authHeader = req.headers.get("authorization");
  // You can use the Bearer token to authenticate the request is coming from Helio
  console.log(authHeader);

  if (authHeader !== `Bearer ${process.env.SECRET_API_KEY}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return new Response(req.body, {
    status: 200,
  });
}
