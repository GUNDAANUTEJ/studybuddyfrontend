import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NotFound from './404'
// import Dashboard from './dashboard/Dashboard'
// import Course from './courses/Course'
// import Notification from './notification/notification'
import Signup from './Signup'
import Login from './Login'
import Index from './Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Footer from './Footer';

const App = () => {
    return(<>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/home/*" element={<Home />} />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
    )
}

export default App
