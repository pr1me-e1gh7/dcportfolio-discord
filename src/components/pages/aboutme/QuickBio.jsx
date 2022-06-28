import dcphoto from '../../../images/dcphoto.jpg';

const TopNav = () => {
  return (
    <div className='top-navigation'>
      <HashtagIcon />
      <Title />
      <UserCircle />
    </div>
  );
};

const UserCircle = () => <AiFillSmile size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>quick-bio</h5>;

const QuickBio = () => {
  return (
    <div className='content-container'>
      <TopNav />
      <div className='content-list'>
        <Post
          name='David Caro'
          timestamp='one week ago'
          text={`Hi I'm David, and I'm a Full-stack web developer using a background in amateur graphic design 
          to focus on front-end development. Born and raised in Orlando, FL, I've recently graduated from UCF's 
          Coding Bootcamp course, and I'm more than prepared to assist your web team with whatever challenge 
          your clients may present! I've become educated in HTML5, CSS3, JavaScript, Node.JS, React.JS, and 
          other programming languages that'll assist me in any future web development jobs.`}
        />
        
      </div>
    </div>    
  );
}  

const Post = ({ name, timestamp, text }) => {
  return (
      <div className={'post'}>
          <div className='avatar-wrapper'>
              <img src={dcphoto} alt='' className='avatar' />
          </div>

      <div className='post-content'>
          <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
          </p>
          <p className='post-text'>{text}</p>
      </div>
      </div>
  );
};

export default QuickBio;