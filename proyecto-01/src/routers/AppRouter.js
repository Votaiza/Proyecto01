import React from 'react';
import Home from '../components/Home'
import { Switch, Route, useLocation, Redirect} from "react-router-dom";

export default function AppRouter() {

    const location = useLocation();

    return (
        <div>
            <Switch location={location} key={location.key}>
                <Route exact path="/">
                    <Home />
                </Route>

                <Redirect to="/" />

            </Switch>
        </div>
        
    )
}
