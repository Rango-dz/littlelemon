import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';
import Specials from './compononets/Specials';

export default function Menu() {
  return (
    <div>
          <Header />
            <Main>
              <Specials />
            </Main>
          <Footer />
    </div>
  )
}
