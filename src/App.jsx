import React from 'react';
import {createBrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Achievements from './components/Pages/Achievements';
import Projects from './components/Pages/Projects';
import Education from './components/Pages/Education';
import Employment from './components/Pages/Employment';
import References from './components/Pages/References';

function Root() {
    return (
        <>
            <Header />
            <div className={"post_header"}>
                <Nav/>
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path = "/Home" element={<Home/>}/>
                        <Route path = "/Education" element={<Education/>}/>
                        <Route path = "/Employment" element={<Employment/>}/>
                        <Route path = "/Achievements" element={<Achievements/>}/>
                        <Route path = "/Projects" element={<Projects/>}/>
                        <Route path = "/References" element={<References/>}/>
                    </Routes>
            </div>
            <Footer />
        </>
    );
}
const router = createBrowserRouter(
  [
      {path:"*" , Component: Root},
  ]
);

export default function App() {

    return <RouterProvider router={router}/>
}