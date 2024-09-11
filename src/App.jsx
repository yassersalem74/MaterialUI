
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Landing from './components/Landing'
import SearchForm from './components/SearchForm'
import Explore from './components/Explore'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'


function App() {

  return (
    <div className="">
        <ResponsiveAppBar />
        <Landing />
        <SearchForm />
        <Explore />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default App
