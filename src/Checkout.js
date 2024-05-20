import Header from './compononets/Header';
import Main from './compononets/Main';
import Footer from './compononets/Footer';

export default function Checkout() {
  return (
    <div>
          <Header />
          <Main>
            <p className='h-screen'>checkout here</p>
          </Main>
          <Footer />
    </div>
  )
}
