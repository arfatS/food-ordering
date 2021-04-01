import ReactDom from 'react-dom'
import App from './App'
import Cart from './Cart'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)