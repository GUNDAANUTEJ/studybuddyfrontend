import React from 'react'
import { Redirect } from 'react-router'
import { useEffect, useState } from "react"
import { Route, Switch } from 'react-router'
import NotFound from './404'
import Dashboard from './dashboard/Dashboard'
import Course from './courses/Course'
import Notification from './notification/notification'
import Signup from './Signup'
import Login from './Login'
import Index from './Index'
import axios from 'axios'

const App = () => {

    const [State, setState] = useState(false)

    useEffect(() => {
        const callMethod = async () => {
            await axios.get("/auth")
                .then((result) => {
                    setState(result.data)
                })
        }
        callMethod();
    }, [])


    return (<>
        <Switch>
            <Route exact path="/">
                {State ? <Redirect to="/dashboard" /> : <Index />}
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/notification" component={Notification} />
            <Route component={NotFound} />
        </Switch>
    </>
    )
}

export default App