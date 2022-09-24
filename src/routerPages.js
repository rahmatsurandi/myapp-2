import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card1 from '../src/components/Cardfull/Card1'
import BlogPost from '../src/components/blogPost/BlogPost'
import NavbarComponent from './components/navbar/NavbarComponent'
import LifeCycleComp from './components/lifecycleComp.js/lifeCycleCom'
import Home from './components/home/home'
import GlobalProvider from './context/Context'



class routerPages extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavbarComponent />
                    <Routes>
                        <Route exact path="/" element={<Card1 />} />
                        <Route path="/blogpost" element={<BlogPost />} />
                        <Route path="/card" element={<Card1 />} />
                        <Route path='/lifecycle' element={<LifeCycleComp />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>

                </div>

            </BrowserRouter>
        )
    }
}

export default GlobalProvider(routerPages);