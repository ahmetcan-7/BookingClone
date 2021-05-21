import Navbar from '../components/navbar'
import Accordion from '../components/accordion'
import Form from '../components/form'
import SimpleSlider from '../components/SimpleSlider'
import Album from '../components/album'
import Card from '../components/card'
import Discover from '../components/discover'
import Footer from '../components/footer'
function HomePage() {
  return (
    <div>
      <Navbar />
      <Accordion />
      <Form />
      <SimpleSlider />
      <Album />
      <Card />
      <Discover />
      <Footer />
    </div>
  )
}

export default HomePage
