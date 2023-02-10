import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Products from './components/Products'
import Blogs from './components/Blogs'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/blog" component={Blogs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
