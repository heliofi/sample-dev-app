import axios from "axios";

export async function POST(req: Request, res: Response) {
  const SECRET_API_KEY = process.env.SECRET_API_KEY;
  const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;

  try {
    const result = await axios.post(
      `https://api.hel.io/v1/paylink/create/api-key`,
      {
        template: "OTHER", // Important that this is capitalized
        name: "api created paylink",
        price:
          "100000" /* price is int64 represented by the base units of each currency, e.g. "price": "1000000" = 1 USDC*/,
        pricingCurrency: "6340313846e4f91b8abc519b", // To get currency IDs, see the /get-currencies endpoint
        features: {},
        recipients: [
          {
            walletId: "63403168afbfe0b061c18703", // Change this to your wallet id
            currencyId: "6340313846e4f91b8abc519b", // To get currency IDs, see the /get-currencies endpoint
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${SECRET_API_KEY}`,
        },
        params: {
          apiKey: PUBLIC_API_KEY,
        },
      },
    );

    console.log(`https://hel.io/pay/${result.data.id}`);

    return new Response(`https://hel.io/pay/${result.data.id}`, {
      status: 200,
    });
  } catch (error: any) {
    console.error(
      `${error.response?.data?.code} ${error.response?.data?.message}`,
    );

    return new Response(error.response?.data?.message || "Error", {
      status: error.response?.status || 500,
    });
  }
}
