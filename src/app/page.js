
// This is page is for home page

import { example } from "@/lib/data";


export default async function Home() {

  const data = await example();
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
    </main>
  );
}
