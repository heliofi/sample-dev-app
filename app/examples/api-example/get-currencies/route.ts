import axios from "axios";

export async function GET(req: Request, res: Response) {
  try {
    const result = await axios.get(`https://api.hel.io/v1/currency/all`);

    return new Response(JSON.stringify(result.data), {
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
