import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-4">
      <h1 className='text-2xl font-bold'>Welcome to the Helio dev example app</h1>
      <a className='text-blue-500 underline' href='/examples/helio-checkout-widget/react'>
        React checkout button example
      </a>
      <p>
        For API and Webhook examples, use a tool like <a className='text-blue-500 underline' href='https://www.postman.com/'>Postman</a> to send requests to the API routes.
      </p>
      <p>
        Finally, refer to our docs at <a className='text-blue-500 underline' href='https://docs.hel.io/developers'>docs.hel.io/developers</a> for more information.
      </p>
    </main>
  );
}
