import logo from './logo.svg';
import './App.css';
import HeroSection from './heroSection';
import Footer from './footer';
import AboutMe from './aboutme';
import Skills from './skills';
import Portfolio from './portfolio';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
