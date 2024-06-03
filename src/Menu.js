import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';
import Specials from './compononets/Specials';
import { Toaster } from './compononets/ui/toaster';

export default function Menu() {
  return (
    <div>
          <Header />
          <Toaster />
            <Main>
              <Specials />
            </Main>
          <Footer />
    </div>
  )
}
