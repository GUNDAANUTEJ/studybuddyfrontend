import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NotFound from './404'
import Signup from './Signup'
import Login from './Login'
import Index from './Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';

const App = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/home/*" element={<Home />} />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App
