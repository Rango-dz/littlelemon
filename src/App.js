import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';
import CallToAction from './compononets/CallToAction';

function App() {
  return (
    <div className='grid grid-flow-row justify-stretch'>
    <Header />
    <CallToAction />
    <Main/>
    <Footer />
    </div>
  );
}

export default App;
