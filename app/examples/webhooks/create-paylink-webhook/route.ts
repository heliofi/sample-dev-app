// See this guide for more context: https://docs.hel.io/developers/webhooks

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const paylinkId = "65eb1cd26b974e3af3a63f7d"; // Replace with your paylink id
    // To test this on localhost, you can use a service like ngrok to create a public URL
    // To learn about ngrok, see https://ngrok.com/
    const targetUrl =
      "https://1f7e-92-236-176-6.ngrok-free.app/examples/webhooks/create-paylink-webhook/target";
    const events = ["CREATED"];

    try {
      const response = await axios.post(
        "https://api.hel.io/v1/webhook/paylink/transaction",
        {
          paylinkId,
          targetUrl,
          events,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SECRET_API_KEY}`,
            "cache-control": "no-cache",
          },
          params: {
            apiKey: process.env.PUBLIC_API_KEY,
          },
        },
      );

      return new Response(JSON.stringify(response.data), {
        status: 200,
      });
    } catch (error: any) {
      console.error(
        `${error.response?.data?.code} ${error.response?.data?.message}`,
      );
      return new Response(error, {
        status: 500,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
