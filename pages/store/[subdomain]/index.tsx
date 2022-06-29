import type { NextPageContext } from 'next';

import PlainLayout from 'layouts/PlainLayout';

interface StoreProps {
  storeName: string;
}

function Store({ storeName }: StoreProps) {
  return (
    <PlainLayout>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <div>Welcome to</div>
          <a className="text-blue-600" href="https://nextjs.org">
            &quot;{storeName.replaceAll('-', ' ')}&quot;
          </a>
        </h1>

        <div className="mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-4 sm:w-full">
          {Array(4)
            .fill({})
            .map((_, idx) => (
              <div
                className="flex h-[100px] w-[100px] items-center justify-center rounded-md border"
                key={idx}
              >
                Product {idx + 1}
              </div>
            ))}
        </div>
      </main>
    </PlainLayout>
  );
}

Store.getInitialProps = async ({ req }: NextPageContext) => {
  const subdomain = req?.headers?.host?.split('.')[0];

  // you can add logic or validation here to check subdomain to database using API request
  const storeName = subdomain
    ? subdomain.charAt(0).toUpperCase() + subdomain.slice(1)
    : '';

  return { storeName };
};

export default Store;
