import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Nav.css';

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    // only run on home page
    if (!isHome) return;

    // function to handle section visibility and update URL
    const handleScroll = () => {
      // Get all sections
      const sections = document.querySelectorAll("section");
      
      // Find the section closest to the top of the viewport
      let currentSection = null;
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        // Consider the section visible if it's near the top of the viewport
        if (distance < minDistance && rect.top <= 100) {
          minDistance = distance;
          currentSection = section;
        }
      });
      
      // Update URL if we found a visible section
      if (currentSection) {
        const id = currentSection.getAttribute("id");
        if (id) {
          // Update active section state
          setActiveSection(id);
          
          if (window.location.hash !== `#${id}`) {
            // Update URL without scrolling
            window.history.replaceState(null, '', `#${id}`);
            
            // Update active class
            const navLinks = document.querySelectorAll(".menu-link");
            const currentLink = document.querySelector(`.menu-link[href="#${id}"]`);
            
            navLinks.forEach(link => link.classList.remove("active"));
            if (currentLink) {
              currentLink.classList.add("active");
            }
          }
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    // Clean up when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome, location.pathname]);

  // Add click handlers for smooth scrolling
  useEffect(() => {
    if (!isHome) return;
    
    const navLinks = document.querySelectorAll(".menu-link");
    
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      
      if (href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Update active section from click
          setActiveSection(href.substring(1));
          targetElement.scrollIntoView({ behavior: 'instant' });
        }
      }
    };
    
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [isHome]);

  // page marker color based on active section
  const getPageMarkerStyles = () => {
    switch(activeSection) {
      case 'hero':
        return { backgroundColor: '#17357a' }; 
      case 'github-profile':
        return { backgroundColor: '#a1281a' }; 
      case 'projects':
        return { backgroundColor: '#4e6851' }; 
      case 'widgets':
        return { backgroundColor: '#4f1f50' };
      default:
        return { backgroundColor: '#c3c3c3', opacity: 1 }; 
    }
  };

  return (
    <>
    
      <nav className="menu">
        <ul className="menu-list">
          <li className="nav-menu-item-about">
            <a href="#hero" className="menu-link">J. Mendez</a>
          </li>
          <li className="nav-menu-item-github">
            <a href="#github-profile" className="menu-link">GitHub</a>
          </li>
          <li className="nav-menu-item-projects">
            <a href="#projects" className="menu-link">Projects</a>
          </li>
              <li className="nav-menu-item-widgets">
            <a href="#widgets" className="menu-link">Widgets</a>
          </li>
        </ul>
      <div className="full-width-section-marker" style={getPageMarkerStyles()}></div>
      </nav>
    </>
  );
}