import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';
import Specials from './compononets/Specials';
import HeroHome from './compononets/HeroHome';
import HomePromoOne from './compononets/HomePromoOne';
import HomeCofee from './compononets/HomeCofee';

function App() {
  return (
    <>
    <Header />
     <HeroHome />
    <main className='mx-auto flex flex-col items-center gap-10'>
    <HomePromoOne />
    <Specials />
    <HomeCofee />
    </main>
    <Footer />
    </>
  );
}

export default App;
