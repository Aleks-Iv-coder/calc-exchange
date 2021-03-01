import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom';
import {Header} from '../components/header/header';
import {Calculator} from '../components/calculator/calculator';
import {TextPage} from '../components/textPage/textPage';

export const APP_ROUTES = {
    CALCULATOR: `/calculator`,
    TEXT: `/text`,
}

export function AppRouter () {
    return (
        <Router>
            <div className='App'>
                <Header />
                <div className='container'>
                    <Switch>
                        <Redirect exact from='/' to={APP_ROUTES.CALCULATOR}/>
                        <Route path={APP_ROUTES.CALCULATOR} component={Calculator}/>
                        <Route path={APP_ROUTES.TEXT} render={
                            ({location}) => {
                                const {state} = location;
                                return <TextPage  id={state.id} date={state.date}/>
                            }
                        } />
                    </Switch>
                </div>
                
            </div>
        </Router>
    )
}