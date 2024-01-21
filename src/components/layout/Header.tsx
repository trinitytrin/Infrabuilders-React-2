
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (

    <header className="header-area header-style-one">
      <div className="header-middle-area">
        <div className="container">
          <div className="row">
            <div className="col-md-2  col-sm-2 col-xs-3">
              <div className="logo">
                <Link to={'/'} className="nav-link"><img src='img/logo/1.png' alt="logo" /></Link>
              </div>
            </div>
            <div className="col-md-10 col-sm-10 hidden-xs hidden-sm">
              <div className="menu-area clearfix">
                <button className="hamburger hamburger--emphatic" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav className="toggle-menu-section">
                  <ul className="main-menu clearfix hover-style-one">
                    <li><NavLink to={'/'} className="nav-link"><i className="fa fa-2x fa-home"></i></NavLink> </li>

                    <li><NavLink to={'about'} className="nav-link">About</NavLink></li>

                    <li><NavLink to={'/services'} className="nav-link">Services <span><i className="fa fa-angle-down"></i></span></NavLink>
                      <ul>
                        <li><Link to={'/services/design'} className="nav-link">Design <span><i className="fa fa-angle-down"></i></span></Link>
                          <ul>
                            <li><Link to={'/services/design/architectural'}>Architectural </Link></li>
                            <li><a href="infra-engineeringDesign.html">Engineering </a></li>
                            <li><a href="infra-processDesign.html">Process Design</a></li>
                            <li><a href="infra-productDesign.html">Product Design </a></li>
                            <li><a href="infra-operatingprocedureDesign.html">Operating Procedure Design </a></li>

                          </ul>
                        </li>
                        <li><a href="infra-implementationsupply.html">Implementations and Supply </a></li>
                        <li><a href="infra-maintenance.html">Maintenance </a></li>
                        <li><a href="#">Products </a></li>
                        <li><a href="#">Solutions </a></li>

                      </ul>
                    </li>

                    <li><NavLink to={'/projects'} className="nav-link">Projects</NavLink></li>
                    <li><NavLink to={'/download'} className="nav-link">Download</NavLink></li>
                    <li><NavLink to={'/contact'} className="nav-link">Contact</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="clearfix"></div>




            <div className="xboot-mobile-menu-area hidden-md hidden-lg">
              <div className="col-sm-12">
                <nav className="xboot-mobile-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to={'about'} >About</Link></li>

                    <li><Link to={'/services'} >Services</Link>
                      <ul>
                        <li><a href="infra-design.html">Design </a>
                          <ul>
                            <li><a href="infra-architecturalDesign.html">Architectural </a></li>
                            <li><a href="infra-engineeringDesign.html">Engineering </a></li>
                            <li><a href="infra-processDesign.html">Process Design</a></li>
                            <li><a href="infra-productDesign.html">Product Design </a></li>
                            <li><a href="infra-operatingprocedureDesign.html">Operating Procedure Design </a></li>
                          </ul>
                        </li>
                        <li><a href="infra-implementationsupply.html">Implementations and Supply </a></li>
                        <li><a href="infra-maintenance.html">Maintenance </a></li>
                        <li><a href="#">Products </a></li>
                        <li><a href="#">Solutions </a></li>
                      </ul>
                    </li>

                    <li><Link to={'/projects'} >Projects</Link></li>
                    <li><Link to={'/download'} >Download</Link></li>
                    <li><a href="/contact">Contact</a></li>

                  </ul>
                </nav>
              </div>
            </div>




          </div>
        </div>
      </div>
    </header>


  )
}

export default Header;