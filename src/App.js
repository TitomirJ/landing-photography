import React from 'react';
import Header from "./containers/header";
import SectionAbout from "./containers/section-about";
import SectionOffer from "./containers/section-offer";
import SectionPortfolio  from "./containers/section-portfolio";
import SectionTestimonials from "./containers/section-testimonials";
import SectionContacts from "./containers/section-contacts";
import { SectionSubscribe } from "./containers/section-subscribe";
import { Footer } from "./containers/footer";
import ScrollableAnchor from 'react-scrollable-anchor'

function App() {
  return (
    <div className="App">
        <Header/>
        <SectionAbout/>
        <SectionOffer/>
        <SectionPortfolio/>
        <SectionTestimonials/>
        <SectionContacts/>
        <SectionSubscribe/>
        <Footer/>
    </div>
  );
}

export default App;
