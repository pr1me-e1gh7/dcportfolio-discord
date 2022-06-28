import { FaHashtag } from 'react-icons/fa';
import { AiFillSmile } from 'react-icons/ai'
  
  const TopNav = () => {
    return (
      <div className='top-navigation z-10'>
        <HashtagIcon />
        <Title />
        <UserCircle />
      </div>
    );
  };
  
  const UserCircle = () => <AiFillSmile size='24' className='top-navigation-icon' />;
  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
  var Title = () => <h5 className='title-text'>tailwind-css</h5>;
  
  export default TopNav;