import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';
import Specials from './compononets/Specials';
import HeroHome from './compononets/HeroHome';
import HomePromoOne from './compononets/HomePromoOne';
import HomeCofee from './compononets/HomeCofee';
import { Toaster } from './compononets/ui/toaster';

function App() {


  return (
    <>
    <Header />
    <Toaster />
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
