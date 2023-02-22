

export default function Footer(){
    return(
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/b4silee/" target="_blank">
              <i className="fab fa-instagram icon "></i>
            </a>
            <a href="https://twitter.com/MartinBasile13" target="_blank">
              <i className="fab fa-twitter icon ml-7"></i>
            </a>
            <a href="https://github.com/martinbasile13" target="_blank">
              <i className="fab fa-github icon ml-7"></i>
            </a>
            <a href="https://www.linkedin.com/in/martin-basile-00271023a/" target="_blank">
              <i className="fab fa-linkedin icon ml-7"></i>
            </a>
          </div>
        </div> 
        <div>
          <p>Copyright © 2023 - All right reserved by Martin Basile</p>
        </div>
      </footer>
    )
}