import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Products from './components/Products'
import Blogs from './components/Blogs'
import ContactUs from './components/ContactUs'
import Careers from './components/Careers'
import About from './components/About'
import UnderMaintenance from './components/UnderMaintenance'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/career" component={Careers} />
    <Route exact path="/blog" component={Blogs} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/incubation-center" component={UnderMaintenance} />
    <Route exact path="/ai-internship-projects" component={UnderMaintenance} />
    <Route exact path="/apply-online" component={UnderMaintenance} />
    <Route exact path="/about" component={About} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
