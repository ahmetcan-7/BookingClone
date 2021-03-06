import '../scss/global.scss'
import '../scss/navbar.scss'
import '../scss/accordion.scss'
import '../scss/formSection.scss'
import '../scss/popup.scss'
import '../scss/album.scss'
import '../scss/card.scss'
import '../scss/discover.scss'
import '../scss/footer.scss'
import '../scss/mobileMenu.scss'
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>booking.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
