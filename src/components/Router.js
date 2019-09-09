import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';
import ShirtCarioca from './ShirtCarioca';
import ShirtKombi from './ShirtKombi';
import ShirtAutentico from './ShirtAutentico';
import ShirtFormas from './ShirtFormas';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Carioca" component={ShirtCarioca} />
            <Route path="/Kombi" component={ShirtKombi} />
            <Route path="/Autentico" component={ShirtAutentico} />
            <Route path="/Formas" component={ShirtFormas} />
            <Route path="/Success" component={SuccessMessage} />
            <Route path="/Error" component={ErrorMessage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
