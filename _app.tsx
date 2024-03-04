import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { session, ...pagePropsRest } = pageProps
  return (
    <SessionProvider session={session}>
      <Component {...pagePropsRest} />
    </SessionProvider>
  )
}

export default MyApp