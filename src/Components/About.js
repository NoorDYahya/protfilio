import React,{useTransition,useState} from 'react';
import './HomePage.css';
import girl from './Assets/aboutgirl.png';
import '../Components/About.css';
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="tab">
          <li>Node.js</li>


          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),},
      {
        title: "Education",
        id: "education",
        content: (
          <ul className="tab">
            <li>Fullstack Academy of Code</li>
            <li>University of California, Santa Cruz</li>
          </ul>
        ),
      },
      {
        title: "Certifications",
        id: "certifications",
        content: (
          <ul className="tab">
            <li>AWS Cloud Practitioner</li>
            <li>Google Professional Cloud Developer</li>
          </ul>
        ),
      },
    ];
const About = () =>{
    const [tab,setTab] = useState('skills');
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id);
        })
    }

    return ( 

        <div className="About" >
            <div className='col1'>
                <img src={girl} alt="circle" />
            </div>
            <div className="col2">
                <h2>About Me</h2>
                <p>I am a computer science student with passion.I have experince working with React,
                    JavaScrip,HTML ,CSS ,Node.js and Git.<br/> I am a quick learner and I alwayes to expand my knowledge and skill set.
                     I am a team player and I am excited to work<br/> with others to create amazing applications.
                </p>
                <div className="spans">
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                 </TabButton>
                 <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                 </TabButton>
                 <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {" "}
                        Certifications{" "}
                 </TabButton>
                </div>
                <div style={{marginTop:'8px'}}>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
           
            
        </div>
       
    
     );
}
export default About;