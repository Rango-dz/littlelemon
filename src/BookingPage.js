import Header from "./compononets/Header";
import Main from "./compononets/Main";
import Footer from "./compononets/Footer";
import ReservetableHero from "./compononets/ReservetableHero";
import Reserve from "./compononets/BookingForm";

export default function BookingPage() {
  return (
    <div className="grid grid-flow-row justify-stretch">
      <Header />
      <ReservetableHero />
      <main className="container ~mt-5/10 px-3 py-5 bg-light text-center mx-auto">
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
