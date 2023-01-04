import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Academic from './components/Academic';
import Professional from './components/Professional';
import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
import Leadership from './components/Leadership';
import Service from './components/Service';
import Goals from './components/Goals';
// import Testimonials from  './components/Testimonials';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Academic resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Professional resumeData={resumeData}/>
        {/* <Portfolio resumeData={resumeData}/> */}
        <Leadership resumeData={resumeData}/>
        <Service resumeData={resumeData}/>

        <Goals resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        {/* <ContactUs resumeData={resumeData}/> */}
        {/* <Test resumeData={resumeData}/> */}

        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;