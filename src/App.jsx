import React from 'react'
import './App.css'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import cake from './assets/images/cake.jpg'
import profile from './assets/images/resume photo.jpg'
import cakeBg from './assets/images/cake_bg.png'
import Division from './components/division'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {

  return (
    <>
      {/* <Resume /> */}
      {/* <Bg /> */}
      {/* <Card /> */}
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Third /> */}
      {/* <Fourth /> */}
      {/* <Fifth /> */}
      {/* <Sixth /> */}
      {/* <Division /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
        </Routes>
      </Router>
    </>
  )
}

function Resume() {
  return (
    <>
      <div class="heading">
        <div class="info">
          <h1>Diya Patra</h1>
          <h3>diyapatra2nd@gmail.com | 7439921317</h3>
          <a href="https://www.linkedin.com/in/diya-patra/" id="linkedin">Linkedin</a>
          <a href="https://github.com/diya-patra" id="github">Github</a>
        </div>
        <div class="pic">
          <img src={profile} />
        </div>
      </div>

      <div className='res'>
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>C (Basics)</li>
          <li>HTML, CSS</li>
          <li>Git, GitHub</li>
          <li>MySQL, SQL</li>
        </ul>

        <h2>Education</h2>
        <ul>
          <li>BCA | NSHM Knowledge Campus, Kolkata - CGPA: 8.13 | Aug ( '23 - '27 )</li>
          <li>XII | Behala Girls' High School - 79.6% | 2023</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
          <li>Introduction to Web Development with HTML5, CSS3, and JavaScript</li>
          <li>Python Basics for Data Science</li>
          <li>IBM SkillsBuild Winter Certification Program - Data Analytics: Turning Data into Decisions using Python</li>
        </ul>

        <h2>Other Activities</h2>
        <ul>
          <li>Attended Analytics Global Conference 2024</li>
          <li>Attended Analytics Global Conference 2025</li>
          <li>Participated in the AI & Data Analytics Quiz in Analytics Global Conference 2025</li>
          <li>Participated in HACKHAZARDS '25 Hackathon organized by The NAMESPACE</li>
        </ul>
      </div>
    </>
  )
}

function Bg() {
  const backgroundStyle = {
    backgroundImage: `url(${cakeBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className='bg-h1'>Hello ReactJs</h1>
    </div>
  )
}

function Card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={profile} className="pic" />
          <div className='desg'>
            <h4><b>Diya Patra</b></h4>
            <p>BCA</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} className="pic" />
          <div className='desg'>
            <h4><b>Diya Patra</b></h4>
            <p>BCA</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} className="pic" />
          <div className='desg'>
            <h4><b>Diya Patra</b></h4>
            <p>BCA</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} className="pic" />
          <div className='desg'>
            <h4><b>Diya Patra</b></h4>
            <p>BCA</p>
          </div>
        </div>

        <div className="card">
          <img src={profile} className="pic" />
          <div className='desg'>
            <h4><b>Diya Patra</b></h4>
            <p>BCA</p>
          </div>
        </div>
      </div>
    </>
  )
}

// function First() {

//   return (
//     <>
//       <h1>Hello ReactJs 1</h1>
//     </>
//   )
// }

// function Second() {

//   return (
//     <>
//       <h1>Hello ReactJs 2</h1>
//       <img src={cake} alt="cake" />
//     </>
//   )
// }

// function Third() {

//   return (
//     <>
//       <h1>Hello ReactJs 3</h1>
//     </>
//   )
// }

// function Fourth() {

//   return (
//     <>
//       <h1>Hello ReactJs 4</h1>
//     </>
//   )
// }

// function Fifth() {

//   return (
//     <>
//       <h1>Hello ReactJs 5</h1>
//     </>
//   )
// }

// function Sixth() {

//   return (
//     <>
//       <h1>Hello ReactJs 6</h1>
//     </>
//   )
// }

// function Seventh() {

//   return (
//     <>
//       <h1>Hello ReactJs 7</h1>
//     </>
//   )
// }

// function Eighth() {

//   return (
//     <>
//       <h1>Hello ReactJs 8</h1>
//     </>
//   )
// }

// function Ninth() {

//   return (
//     <>
//       <h1>Hello ReactJs 9</h1>
//     </>
//   )
// }

// function Tenth() {

//   return (
//     <>
//       <h1>Hello ReactJs 10</h1>
//     </>
//   )
// }

export default App
