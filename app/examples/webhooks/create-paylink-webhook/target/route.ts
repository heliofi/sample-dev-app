export async function POST(req: Request, res: Response) {
  const authHeader = req.headers.get("authorization");
  const webhookSecret = '' // This is given to you in the response when you first create a webhook
  // You can use the Bearer token to authenticate the request is coming from Helio
  console.log(authHeader);

  if (authHeader !== `Bearer ${webhookSecret}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return new Response(req.body, {
    status: 200,
  });
}
