import './Header.css';
import logo from '../../assets/logo.svg';


export default function Header() {
  return (
    <header className="Header">
      <img src={logo} className="App-logo" alt="Jessy 7 in script writing" />
    </header>
  );
}