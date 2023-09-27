

const Header = () => {
  return (

    <header className="header-area header-style-one">
      <div className="header-middle-area">
        <div className="container">
          <div className="row">
            <div className="col-md-2  col-sm-2 col-xs-3">
              <div className="logo">
                <a href="index.html"><img src='img/logo/1.png' alt="logo" /></a>
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
                    <li><a href="index.html"><i className="fa fa-2x fa-home"></i></a> </li>

                    <li><a href="about-me.html">About</a></li>

                    <li><a href="infra-services.html">Services <span><i className="fa fa-angle-down"></i></span></a>
                      <ul>
                        <li><a href="infra-design.html">Design <span><i className="fa fa-angle-down"></i></span></a>
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

                    <li><a href="infra-projects.html">Projects</a></li>
                    <li><a href="infra-contact.html">Download</a></li>
                    <li><a href="infra-contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="clearfix"></div>




            <div className="xboot-mobile-menu-area hidden-md hidden-lg">
              <div className="col-sm-12">
                <nav className="xboot-mobile-menu">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-me.html">About</a></li>

                    <li><a href="infra-services.html">Services</a>
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

                    <li><a href="infra-projects.html">Projects</a></li>
                    <li><a href="infra-contact.html">Download</a></li>
                    <li><a href="infra-contact.html">Contact</a></li>

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