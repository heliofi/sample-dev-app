import axios from "axios";

export async function GET(req: Request, res: Response) {
  const SECRET_API_KEY = process.env.SECRET_API_KEY;
  const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;

  try {
    const result = await axios.get(
      `https://api.hel.io/v1/webhook/paylink/transaction`,
      {
        headers: {
          Authorization: `Bearer ${SECRET_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "cache-control": "no-cache",
        },
        params: {
          apiKey: PUBLIC_API_KEY,
          paylinkId: "65eb1cd26b974e3af3a63f7d", // Replace with your paylink id
        },
      },
    );

    console.log(JSON.stringify(result.data));

    return new Response(JSON.stringify(result.data), {
      status: 200,
    });
  } catch (error: any) {
    return new Response("Error getting list of webhooks", {
      status: error.response?.status || 500,
    });
  }
}
