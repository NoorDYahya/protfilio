


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import GithubIcon from '../Components/Assets/github.svg';
import LinkedinIcon from '../Components/Assets/linkedin.svg';
import Image from 'react-bootstrap/Image';

function Connect (){
    const customColor = {backgroundColor:'#DEC7E2', borderColor:'#DEC7E2', width:"100%", color:'black'}
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        console.log("Submit button clicked");
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
            "Content-Type": "application/json",
        },
       
        body: JSONdata,
        
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        }
        console.log("After fetch request"); 
  };
    return(
     <Container href= 'features'>
        <Row>
        <Col>
        <div style={{textAlign:'left'}}>
            <h5 className='text-xl font-bold text-black my-2 text-left'>Let's connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>
            <div style={{display: 'flex' ,alignItems:'center'}}>
            <a href="https://github.com/NoorDYahya" >
                <Image src={GithubIcon} alt="Github Icon" width={30} height={30} style={{marginRight:'10px'}}/>
            </a>
            <a href="linkedin.com">
                <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30}/>
            </a>
            </div>
        </div>
        </Col>
        <Col>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Subject</Form.Label>
                    <Form.Control type="text" name="subject" placeholder="Just say Hi!" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Let's talk about ..."/>
                </Form.Group>
                <Button type='submit' size="m" style={customColor}>
                    Send messege
                </Button>
            </Form>
        </Col>
      </Row>
     </Container>
    );
}
export default Connect;