import '../styles/globals.css'

import { SWRConfig } from "swr"

async function fetcher(...args) {
  const response = await fetch(...args)

  if (!response.ok) {
    let body
    try {
      body = await response.json()
    } catch (error) {
      body = new Error("Unable to parse JSON body from non-successful response.")
    }
    throw body
  }

  return await response.json()
}

function MyApp({ Component, pageProps }) {
  return <SWRConfig value={{ fetcher }}>
    <Component {...pageProps} />
  </SWRConfig>
}

export default MyApp
