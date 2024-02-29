
import HomePage from '../Components/HomePage';
import Navbar from './Navbarr';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Connect from '../Components/Connect';
import '../Components/Home.css';
function Home() {

  return (
   <div>


         <Navbar/>
        <div id="home"><HomePage/> </div>
        <div id="about"><About/> </div>
        <div id="projects"><Projects/> </div>
        <div id="connect"><Connect/></div>
        <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DEC7E2" fill-opacity="1" d="M0,32L34.3,58.7C68.6,85,137,139,206,160C274.3,181,343,171,411,160C480,149,549,139,617,122.7C685.7,107,754,85,823,90.7C891.4,96,960,128,1029,122.7C1097.1,117,1166,75,1234,64C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </footer>
      
 
 
  

    </div>
  );
   
    
}
export default Home;