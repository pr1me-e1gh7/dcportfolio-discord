// import React, { useState } from 'react';
import TopNav from './TopNav';
import dcphoto from '../../images/dcphoto.jpg';
import codequiz from '../../images/code-quiz-preview.gif';
import dayplnr from '../../images/day-planner-preview.gif';
import fourstor from '../../images/fourstor-preview.gif';
import teamprof from '../../images/team-profile-gen-preview.gif';
import { FcBusinessman, FcBusinesswoman, } from 'react-icons/fc';

const ContentContainer = () => {
  return (
    <div>
      <TopNav />
      <div className='content-container'>
        <div className='content-list'>
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`Quick Bio: Hi I'm David, and I'm a Full-stack web developer using a background in amateur graphic design 
            to focus on front-end development. Born and raised in Orlando, FL, I've recently graduated from UCF's 
            Coding Bootcamp course, and I'm more than prepared to assist your web team with whatever challenge 
            your clients may present! I've become educated in HTML5, CSS3, JavaScript, Node.JS, React.JS, and 
            other programming languages that'll assist me in any future web development jobs.`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`My Motivation: My drive is fueled by a pursuit to build my a career in coding and the search for better 
            development opportunities. My goal is to be able to create a life for myself in which I can practice doing what 
            I love without having to worry daily about my ability to take care of my family financially in these trying 
            times.`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`Career Goals: I'm always looking to help create aesthetically-pleasing sites that utilize strategic placement 
            of content and intuitive UI to make for an accurate and fantastical representation of each client's dream website that 
            is simple and easy to understand. I aspire to work my way up from a beginner front-end web developer to a project 
            manager within the next 8-10 years, or sooner depending on your the opportunities that present themselves.`}
          />
          <Ref1
            name='Adrian J'
            timestamp='one week ago'
            text={`This guy is a beast! Together, we oversaw a team of 10+ creatives working on live events and other production-
            related projects. He has incredible attention to detail, a super thoughtful approach, and is an all-around really 
            great guy to work with! Timeliness and flawless execution were key in the work we did and he was always a reliable 
            partner on that front. Would work again with him any time!`}
          />
          <Ref2
            name='Veronica H'
            timestamp='one week ago'
            text={`David is a hard-working person and student who'd always strive to get the job done no matter the 
            circumstance before him. He even handled tough situations with hard deadlines with professionalism and good 
            work ethic when in the bootcamp.`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`Reasons You Should Hire Me:
            (1) my fresh perspective I'd bring to your team,
            (2) my constant drive to improve the coding skills I've worked painstakingly hard on to obtain,
            (3) my meticulous and organized approach to any problem, and
            (4) my ability to collaborate kindly, timely, and efficiently in a team.`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`I earned Full-Stack certification at University of Central Florida (in Orlando, FL) in an 
            intensive 12-week long bootcamp course dedicated to web development, including training in HTML5, CSS3, 
            JavaScript, and more.`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`I earned a Diploma at Winter Park High School, Winter Park, FL`}
          />
          <Post
            name='David Caro'
            timestamp='one week ago'
            text={`Excellent proficiency in CSS3, HTML5, MERN (MongoDB, Express, React, Node), and Web API’s. I've also 
            received training in JavaScript, MVC, NoSQL, SQL, Object-Oriented Programming (OOP), Object-Relational Mapping 
            (ORM), and Progressive Web Applications (PWA). Currently learning Amazon Web Services, C#, Java, and Python. 
            AutoCAD certified (2014) and Microsoft Office Suites Certified (2010). Typing speed of 65+ WPM (words per 
            minute) at Expert level (https://bit.ly/347gwJF).`}
          />
          <ProjectFourstor
            name='David Caro'
            timestamp='one week ago'
            text={`This is Fourstor, A business search engine with the goal to give every business an equal shot at being 
            discovered by the user. With this application, there is no priority given to larger companies and no ads 
            that push their business to the top. My primary responsibility in the project was to stylize the website. 
            JavaScript, HTML, CSS, Yelp! Fusion API and Google Maps API were used. Click on the image below to visit the 
            project.`}
          />
          <ProjectDayplanner
            name='David Caro'
            timestamp='one week ago'
            text={`This is my Day Planner tool, a simple tool to increase productivity in users by helping them plan 
            for their day. I shared full responsibility in creating the page, including writing the structure code, 
            the back-end code, and the design code. JavaScript, HTML, and CSS were used. Click on the image below to 
            visit the project.`}
          />
          <ProjectCodequiz
            name='David Caro'
            timestamp='one week ago'
            text={`This is my Day Planner tool, a simple tool to increase productivity in users by helping them plan 
            for their day. I shared full responsibility in creating the page, including writing the structure code, 
            the back-end code, and the design code. JavaScript, HTML, and CSS were used. Click on the image below to 
            visit the project.`}
          />
          <ProjectTpGen
            name='David Caro'
            timestamp='one week ago'
            text={`This is my Day Planner tool, a simple tool to increase productivity in users by helping them plan 
            for their day. I shared full responsibility in creating the page, including writing the structure code, 
            the back-end code, and the design code. JavaScript, HTML, and CSS were used. Click on the image below to 
            visit the project.`}
          />
        </div>
      </div>
    </div>
  );
};

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

// References
// Adrian J
const Ref1 = ({ name, icon, timestamp, text }) => {
  return (
      <div className={'post'}>
        <div className='avatar-wrapper'>
          <FcBusinessman size='30' className='avatar' />
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
// Veronica H
const Ref2 = ({ name, timestamp, text }) => {
  return (
      <div className={'post'}>
        <div className='avatar-wrapper'>
          <FcBusinesswoman size='30' className='avatar' />
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

// Projects
const ProjectFourstor = ({ name, timestamp, text }) => {
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
          <a href="https://pr1me-e1gh7.github.io/fourstor/" target="_blank" rel="noreferrer">
            <img src={fourstor} alt='' className='post-img'></img>
          </a>
        </div>
      </div>
  );
};
const ProjectDayplanner = ({ name, timestamp, text }) => {
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
            <a href="https://pr1me-e1gh7.github.io/day-planner/" target="_blank" rel="noreferrer">
              <img src={dayplnr} alt='' className='post-img'></img>
            </a>
        </div>
      </div>
  );
};
const ProjectTpGen = ({ name, timestamp, text }) => {
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
          <a href="https://github.com/pr1me-e1gh7/team-profile-generator/" target="_blank" rel="noreferrer">
            <img src={teamprof} alt='' className='post-img'></img>
          </a>
      </div>
      </div>
  );
};
const ProjectCodequiz = ({ name, timestamp, text }) => {
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
          <a href="https://pr1me-e1gh7.github.io/code-quiz/" target="_blank" rel="noreferrer">
            <img src={codequiz} alt='' className='post-img'></img>
          </a>
      </div>
      </div>
  );
};

export default ContentContainer;