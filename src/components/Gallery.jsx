import React from "react";
import Navbar from "./Navbar"
import cake from '../assets/images/cake.jpg'
import profile from '../assets/images/resume photo.jpg'
import cakeBg from '../assets/images/cake_bg.png'

const Gallery = () => {
    return (
        <>
            <Navbar />
            <h1>Hello From Gallery Page</h1>
            <img src={cake} height={500}/>
        </>
    )
}

export default Gallery;
