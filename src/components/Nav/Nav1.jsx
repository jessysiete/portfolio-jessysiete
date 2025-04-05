// import './Nav.css';
// import Pdf from '../../assets/Documents/resume.pdf';
// import { Link, useLocation } from 'react-router-dom';

// export default function Nav() {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   return (
//     <nav className="menu">

// <ul className="menu-list">

// <li className="nav-menu-item-github">
//   {isHome ? (
//     <a 
//       href="#github-profile" 
//       className={`menu-link ${location.hash === "#github-profile" ? "active" : ""}`}
//     >
//       GitHub
//     </a>
//   ) : (
//     <Link 
//       to="/#github-section" 
//       className="menu-link"
//     >
//       GitHub
//     </Link>

//   )}
// </li>

// <li className="nav-menu-item-projects">
//   {isHome ? (
//     <a 
//       href="#projects" 
//       className={`menu-link ${location.hash === "#projects" ? "active" : ""}`}
//     >
//       Projects
//     </a>
//   ) : (
//     <Link 
//       to="/#projects" 
//       className="menu-link"
//     >
//       Projects
//     </Link>
//   )}
// </li>

// </ul>
// < className="nav-menu-item-resume"></
// </nav>



// );
// } 