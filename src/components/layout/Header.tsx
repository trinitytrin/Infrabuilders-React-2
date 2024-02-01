
import { Link, NavLink } from "react-router-dom";
import logo from '/img/logo/1.png';

const Header = () => {
  return (

    <header className="header-area header-style-one">
      <div className="header-middle-area">
        <div className="container">
          <div className="row">
            <div className="col-md-2  col-sm-2 col-xs-3">
              <div className="logo">
                <Link to={'/'} className="nav-link"><img src={logo} alt="logo" /></Link>
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

                    <li><NavLink to={'/about'} className="nav-link">About</NavLink></li>

                    <li><NavLink to={'/services'} className="nav-link">Services <span><i className="fa fa-angle-down"></i></span></NavLink>
                      <ul>
                        <li><NavLink to={'/services/design'} className="nav-link">Design <span><i className="fa fa-angle-down"></i></span></NavLink>
                          <ul>
                            <li><NavLink to={'/services/design/architectural-design'}>Architectural </NavLink></li>
                            <li><NavLink to={'/services/design/engineering-design'}>Engineering </NavLink></li>
                            <li><NavLink to={'/services/design/process-design'}>Process Design</NavLink></li>
                            <li><NavLink to={'/services/design/product-design'}>Product Design </NavLink></li>
                            <li><NavLink to={'/services/design/operational-procedure-design'}>Operating Procedure Design </NavLink></li>

                          </ul>
                        </li>
                        <li><NavLink to={'/services/implementations-and-supply'} className="nav-link">Implementations and Supply </NavLink></li>
                        <li><NavLink to={'/services/maintenance'} className="nav-link">Maintenance </NavLink></li>
                        <li><NavLink to={'/services/products'} className="nav-link">Products </NavLink></li>
                        <li><NavLink to={'/services/solutions'} className="nav-link">Solutions </NavLink></li>


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
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'} >About</NavLink></li>

                    <li><NavLink to={'/services'} >Services</NavLink>
                      <ul className="dropdown-show-right">
                        <li><NavLink to={'/services/design'} >Design </NavLink>
                          <ul className="dropdown-show-right">
                            <li><NavLink to={'/services/design/architectural-design'}>Architectural </NavLink></li>
                            <li><NavLink to={'/services/design/engineering-design'}>Engineering </NavLink></li>
                            <li><NavLink to={'/services/design/process-design'}>Process Design</NavLink></li>
                            <li><NavLink to={'/services/design/product-design'}>Product Design </NavLink></li>
                            <li><NavLink to={'/services/design/operational-procedure-design'}>Operating Procedure Design </NavLink></li>

                          </ul>
                        </li>
                        <li><NavLink to={'/services/implementations-and-supply'} className="nav-link">Implementations and Supply </NavLink></li>
                        <li><NavLink to={'/services/maintenance'} className="nav-link">Maintenance </NavLink></li>
                        <li><NavLink to={'/services/products'} className="nav-link">Products </NavLink></li>
                        <li><NavLink to={'/services/solutions'} className="nav-link">Solutions </NavLink></li>

                      </ul>
                    </li>

                    <li><NavLink to={'/projects'} >Projects</NavLink></li>
                    <li><NavLink to={'/download'} >Download</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>

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