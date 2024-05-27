import React from "react"

export default function Navbar() {

    const [isNavActive, setNavActive] = React.useState(false);

    const toggleNav = () => {
        setNavActive(!isNavActive);
    };

    const handleLinkClick = (e, hasDropdown) => {
        if (!hasDropdown) {
            setNavActive(false);
        }
    };

    const handleDropdownClick = (e) => {
        const dropdown = e.target.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

        // Close other dropdowns
        document.querySelectorAll('.navbar-dropdown').forEach((d) => {
            if (d !== dropdown) {
                d.style.display = 'none';
            }
        });

        e.stopPropagation();
    };

    const handleOutsideClick = (e) => {
        if (!e.target.matches('.navbar-dropdown, .navbar-dropdown *')) {
          document.querySelectorAll('.navbar-dropdown').forEach((dropdown) => {
            dropdown.style.display = 'none';
          });
        }
      };
    
    React.useEffect(() => {
        document.documentElement.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.documentElement.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    return (
        <header>
            <nav className="navbar">
                <div className={`navbar-toggle ${isNavActive ? 'active' : ''}`} id="navbar-toggle" onClick={toggleNav}>
                    <span></span>
                </div>
                <ul className="nav--logo_text">
                    <li>
                        <a href="#home--hero_section" className="nav-links">Farros Mufid</a>
                    </li>
                </ul>
                <ul className={`main-nav ${isNavActive ? 'active' : ''}`} id="js-menu">
                    <li>
                        <a href="#my_timeline_section" className="nav-links" onClick={(e) => handleLinkClick(e, false)}>My Timeline</a>
                    </li>
                    <li>
                        <a href="#design_work_section" className="nav-links" onClick={handleDropdownClick}>Showcase</a>
                        <ul className="navbar-dropdown">
                            <li>
                                <a href="#design_work_section" className="nav-links" onClick={(e) => handleLinkClick(e, false)}>Design Work</a>
                            </li>
                            <li>
                                <a href="#awards_section" className="nav-links" onClick={(e) => handleLinkClick(e, false)}>Awards</a>
                            </li>
                        </ul>
                    </li>
                
                    <li>
                        <a href="#contact_me_section" className="nav-links" onClick={(e) => handleLinkClick(e, false)}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    ) 
}