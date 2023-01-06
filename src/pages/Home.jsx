import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Home