import Head from 'next/head'

export default function ItsYaBoi() {
  return (
    <>
      <Head>
        <title>{process.env.GREETING + " webstore"}</title>
      </Head>
      <h1>
        {"It's ya boi!"}
      </h1>
      <p>{"Doin it right once again"}</p>
    </>
  )
}
