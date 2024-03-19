import axios from "axios";

export async function GET(req: Request, res: Response) {
  const SECRET_API_KEY = process.env.SECRET_API_KEY;
  const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;

  const transactionSigature =
    "2uzSDJqzazuRUTuwCDcVUz6ZDyUsmmDXiYCZgbU7gYPNF9f3KaHtPXyhQVDXCQRGhsviuNmAcRUpJ4CbeW97H96e"; // Replace with your transaction signature

  try {
    const result = await axios.get(
      `https://api.hel.io/v1/payment-state/signature/${transactionSigature}`,
      {
        headers: {
          Authorization: `Bearer ${SECRET_API_KEY}`,
        },
        params: {
          apiKey: PUBLIC_API_KEY,
        },
      },
    );

    // This is the internal Helio ID of the transaction, if it matches the one recieved in onSuccess callback from the Helio Checkout, the transaction is valid!
    console.log(result.data.meta.id);

    return new Response(JSON.stringify(result.data), {
      status: 200,
    });
  } catch (error: any) {
    console.error(error);

    return new Response(error.response?.data?.message || "Error", {
      status: error.response?.status || 500,
    });
  }
}
