import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";
import Button from '@mui/material/Button';
import BrownTroutLogo from '../assets/BrownTroutLogo.png';
import Resume from '../assets/Abeveridge Resume.pdf';
import '../App';

type LinkData = {
  title: string;
  url: string;
};

const links: LinkData[] = [
  { title: "Bio", url: "#intro" },
  { title: "Projects", url: "#projects" },
  { title: "Dog Walker", url: "#dogwalk" },
];

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-screen md:h-18 bg-slate-400 drop-shadow-xl sticky top-0 z-50 px-0 md:px-3 lg:px-40">
      <div className="flex items-center justify-between">
        <HashLink to="#" className="flex items-center">
          <div className="flex flex-col items-center mr-4">
            <img src={BrownTroutLogo} style={{ width: '70px', height: '70px' }} className="mt-1" alt="logo" />
          </div>
        </HashLink>

        {isMobile ? (
          <Button variant="contained" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close' : 'Menu'}
          </Button>
        ) : (
          <div className="flex items-center space-x-4">
            {links.map((item, idx) => (
              <NavItem key={idx} data={item} />
            ))}
            <div className="ml-4">
            <Button 
              target="_blank"
              rel="noreferrer" 
              variant="contained" 
              style={{ 
                backgroundColor: '#4a5568', 
                color: 'white', 
                borderRadius: '20px',
                fontWeight: '300',
                textTransform: 'none'
              }}   
              href={Resume} 
              className="hover:bg-gray-500 duration-200 px-10 py-3">
                Resume
            </Button>

            </div>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="mt-4">
          {links.map((item, idx) => (
            <NavItem key={idx} data={item} />
          ))}
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ data }: { data: LinkData }) => {
  return (
    <li className="flex items-center space-x-4">
      <Button 
        variant="contained" 
        style={{ 
          backgroundColor: '#4a5568', 
          color: 'white', 
          borderRadius: '20px',
          fontWeight: '300',
          textTransform: 'none' 
          }}  
        component={HashLink} 
        to={data.url} 
        className="hover:bg-gray-500 duration-200 px-10 py-3">
        {data.title}
      </Button>
    </li>
  );  
};

export default NavBar;
