import Navbar from '../components/navbar'
import Accordion from '../components/accordion'
import Head from 'next/head'
import Form from '../components/form'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Booking.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Accordion />
      <Form />
    </div>
  )
}

export default HomePage
