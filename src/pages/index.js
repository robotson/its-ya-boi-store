import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.GREETING + " webstore"}</title>
      </Head>
      <h1>
        {"It's ya boi!"}
      </h1>
    </>
  )
}
