import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import text from '../Components/Assets/text.png';
import w from '../Components/Assets/w.png';
const Projects = () => {
    const customButtonStyle = { backgroundColor: '#F9EEB7', borderColor: '#F9EEB7' ,color: 'black' };
    const handleClick= (url) =>{
            window.open(url,"_blank");
    }
    return(
        <div className="projects" style={{display: 'flex', marginLeft:'20px',textAlign:'center'}}>
            <h1>Projects</h1>
        <Card style={{ width: '18rem' ,marginTop:'200px'}}>
        <Card.Img variant="top" src={text} width={200} height={200}/>
        <Card.Body style={{borderColor:'black' }}>
          <Card.Title>SheSafe</Card.Title>
          <Card.Text>
          Together, we're on a mission to raise awareness about online safety,providing you with the tools and knowledge to navigate the internet confidently and ensure your well-being in the virtual space.


          </Card.Text>
          <Button variant="primary" style={customButtonStyle} onClick={() => handleClick("https://github.com/NoorDYahya/SheSafe-Web")}>GitHub</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , marginLeft:'20px',marginTop:'200px'}}>
        <Card.Img variant="top" src={w} width={200} height={200}/>
        <Card.Body style={{borderColor:'black' }}>
          <Card.Title>Weather App</Card.Title>
          <Card.Text>
          This interactive application enables users to seamlessly search for cities, providing a user-friendly interface that visually presents essential information such as temperature, humidity, and wind speed.
          </Card.Text>
          <Button variant="primary" style={customButtonStyle} onClick={() => handleClick("https://github.com/NoorDYahya/Weather-app")}>GitHub</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , marginLeft:'20px',marginTop:'200px'}}>
        <Card.Img variant="top" src="" width={200} height={200}/>
        <Card.Body style={{borderColor:'black' }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" style={customButtonStyle} onClick={() =>handleClick("")} >GitHub</Button>
        </Card.Body>
      </Card>
      </div>
    );
}
export default Projects