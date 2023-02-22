import Home from "./component/home"
import Proyects from "./component/proyects"
import Skills from "./component/skills"
import About from "./component/about"
import Contact from "./component/contact"
import Footer from "./component/footer"
import { useState} from "react"

function App() {

  const [themes, setThemes] = useState("dracula")

  const cambiar = (tema)=>{
    if(tema === 'light'){
      tema = 'dracula'
    }else if(tema === 'dracula'){
      tema = 'light'
    }
    return tema
  }

  return (
    <div data-theme={themes} className="App font-mono">
      <div className="navbar bg-base">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#proyects">Proyects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <a className="btn btn-primary" href="#contact">Contactar</a>
            </ul>
          </div>
          <label className="ml-3 swap swap-rotate">
                <input type="checkbox" onClick={()=> setThemes(cambiar(themes)) } />
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          </label>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
              <li className="mr-5"><a href="#home">Home</a></li>
              <li className="mr-5"><a href="#proyects">Proyects</a></li>
              <li className="mr-5"><a href="#skills">Skills</a></li>
              <li className="mr-5"><a href="#about">About</a></li>
              <a className="btn btn-primary mr-2" href="#contact">Contactar</a>
          </ul>
        </div>
      </div>

      <div className="container w-3/4 mx-auto">

        <div name="content" className=" flex flex-col ">

          <div className="mt-20">
            <a href="home"></a>
            <Home info={themes}/>
          </div>
          <div className="items-center justify-center text-center mt-20">
            <a name="proyects"></a>
            <h1 className="text-3xl mb-3 underline decoration-4 decoration-primary underline-offset-8 ">Proyects</h1>
           <Proyects/>
          </div>
          <div className="text-center mt-20 ">
            <a name="skills"></a>
            <h1 className="text-3xl mb-3 underline decoration-4 decoration-primary underline-offset-8">Skills</h1>
            <Skills/>
          </div>
          <div className="items-center justify-center text-center mt-20">
            <a name="about"></a>
            <h1 className="text-3xl mb-3 underline decoration-4 decoration-primary underline-offset-8">About me</h1>
            <About info={themes}/>
          </div>
          <div className="items-center justify-center text-center mt-20">
            <a name="contact"></a>
            <h1 className="text-3xl mb-3 underline decoration-4 decoration-primary underline-offset-8">Contact</h1>
            <Contact/>
          </div>
        </div>
      </div>
      <div name="footer" className="items-center justify-center text-center mt-44">
        <Footer/>
      </div>
    </div>
  )
}

export default App
