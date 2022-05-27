import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header.jsx"
import About from "./About.jsx"
import Home from "./Home.jsx"
import Webnovel from "./Webnovel.jsx"
import ContactMe from "./ContactMe.jsx"
import Footer from "./Footer.jsx"


function App() {

    return (
        <Router>
            <Header />
        
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Webnovel' element={<Webnovel />} />
            <Route path='/ContactMe' element={<ContactMe />} />
        </Routes>
            <Footer />
        </Router>
        
    )
}

export default App