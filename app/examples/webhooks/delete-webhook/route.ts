import axios from "axios";

export async function DELETE(req: Request, res: Response) {
  const SECRET_API_KEY = process.env.SECRET_API_KEY;
  const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;

  const webhookID = "65f94beaede5a427152929fa"; // Replace with your webhook id

  try {
    const result = await axios.delete(
      `https://api.hel.io/v1/webhook/paylink/transaction/${webhookID}`,
      {
        headers: {
          Authorization: `Bearer ${SECRET_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "cache-control": "no-cache",
        },
        params: {
          apiKey: PUBLIC_API_KEY,
        },
      },
    );

    console.log(JSON.stringify(result.data));

    return new Response(`Deleted webhook ${webhookID}`, {
      status: 200,
    });
  } catch (error: any) {
    return new Response("Error deleteing webhook", {
      status: error.response?.status || 500,
    });
  }
}
