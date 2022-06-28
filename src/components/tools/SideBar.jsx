import { useState } from "react";
import { motion } from 'framer-motion';
import ContactMe from "../modals/ContactMe";
import useDarkMode from '../../hooks/useDarkMode';
import { AiFillMessage } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsFillLightbulbFill,
  BsFillLightbulbOffFill,
  BsGithub,
  BsLinkedin,
  // BsSpotify,
  } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { TbLetterD } from 'react-icons/tb';
// import { SiDiscord } from 'react-icons/si';

function SideBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="sidebar">
                    
        <LetterIcon icon={<TbLetterD size="28" />} />

        <Divider />
        
        <PortfolioIcon icon={<BsFillPersonFill size="28" />} />
        
        <motion.button 
          // whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.8}}
          className="sidebar-icon group save-button" 
          onClick={() => (modalOpen ? close() : open())}
          >
          <AiFillMessage size="28" />
          <span class="sidebar-tooltip group-hover:scale-100">
            Contact Me
          </span>
        </motion.button>

        <ResumeIcon icon={<MdWork size="28" />} />
        
        <Divider />
        
        <GithubIcon icon={<BsGithub size="28" />} />
        <LinkedInIcon icon={<BsLinkedin size="28" />} />
        
        <Divider />
        
        <DarkModeIcon />
        
        {modalOpen && <ContactMe modalOpen={modalOpen} handleClose={close} />}

    </div>
  );
};

const LetterIcon = ({ icon, text = 'David Caro\'s portfolio' }) => (
  <div className="letter-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

// Main Elements
const PortfolioIcon = ({ icon, text = 'Portfolio' }) => (
  <div className="portfolio-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const ResumeIcon = ({ icon, text = 'Resume' }) => (
  <a className="sidebar-icon group"
  href="https://drive.google.com/file/d/10Az-NIukT5m-rKrvSxh92auCXYQk9d3k/view"
  target="_blank" rel="noreferrer">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </a>
);

// External Links
const GithubIcon = ({ icon, text = 'Check out my GitHub Profile' }) => (
  <a className="sidebar-icon group"
  href="https://github.com/pr1me-e1gh7" target="_blank" rel="noreferrer">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </a>
);
const LinkedInIcon = ({ icon, text = 'Check out my LinkedIn Profile' }) => (
  <a className="sidebar-icon group"
  href="https://www.linkedin.com/in/davidanthonycaro/" target="_blank" rel="noreferrer">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </a>
);
// const DiscordIcon = ({ icon, text = 'Add me on Discord' }) => (
//   <a className="sidebar-icon group"
//   href="https://discordapp.com/users/pr1me_e1gh7#1857/" target="_blank" rel="noreferrer">
//     {icon}
//     <span class="sidebar-tooltip group-hover:scale-100">
//       {text}
//     </span>
//   </a>
// );
// const SpotifyIcon = ({ icon, text = 'Check out my Spotify Profile' }) => (
//   <a className="sidebar-icon group"
//   href="https://open.spotify.com/user/mr.m0th?si=0c534c13c3f74ec3" target="_blank" rel="noreferrer">
//     {icon}
//     <span class="sidebar-tooltip group-hover:scale-100">
//       {text}
//     </span>
//   </a>
// );

const DarkModeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (

        <div className="sidebar-icon group">
          {<BsFillLightbulbFill size='28'/>}
          <span class="sidebar-tooltip group-hover:scale-100">
            Switch to Light Mode
          </span>
        </div>

      ) : (

      <div className="sidebar-icon group">
        {<BsFillLightbulbOffFill size='28'/>}
        <span class="sidebar-tooltip group-hover:scale-100">
          Switch to Dark Mode
        </span>
      </div>
      
      )}
    </span>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;