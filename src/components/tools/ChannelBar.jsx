import ContentContainer from './ContentContainer';
import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, } from 'react-icons/fa';

const aboutme = ['quick-bio', 'motivation', 'career-goals', 'references', 'reasons-to-hire-me',];
const training = ['education', 'skillset',];
const projects = ['fourstor', 'day-planner', 'code-quiz', 'team-profile-generator'];

const ChannelBar = () => {
  return (
    <div>
      <div className='channel-bar'>
        <ChannelBlock />
        <div className='fixed channel-container'>
          <Dropdown header='About Me' selections={aboutme} />
          <Dropdown header='Training' selections={training} />
          <Dropdown header='Projects' selections={projects} />
        </div>
      </div>
      <ContentContainer />
    </div>
  );
};

const ChannelBlock = () => (
  <div className='fixed channel-block'>
    <h5 className='channel-block-text'>Channels</h5>
  </div>
);

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};
const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};
const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <BsHash size='24' className='text-gray-400' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

export default ChannelBar;