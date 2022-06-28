import SideBar from './components/tools/SideBar';
import Channelbar from './components/tools/ChannelBar';
// import ContentContainer from './components/tools/ContentContainer';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      {/* <ContentContainer /> */}
    </div>
  );
}

export default App;