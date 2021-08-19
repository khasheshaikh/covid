import React,{useEffect,useState} from 'react'
import {DropdownButton,Container,Card,Row,Col, Form,Dropdown} from 'react-bootstrap'
import "./Covid.css"

export const Covid=()=> {

    const [data, setData] = useState([])
    const [states, setStates] = useState("")
    
    const getCovidData = async()=>{
            try {
        const res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
        const actualData = await res.json();
         //console.log(actualData.MH.districts.Nanded.delta7);
        setData(actualData.MH.districts.Nanded.delta7);
         console.log(setStates)
        // setStates(actualData)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
         getCovidData();
        }, []);

    return (
    <Card className="main">    
        <Container className="head">
        <Row>
        <h1>🔴 LIVE</h1>  
        </Row>
        <Row>
        <h2>COVID-19 LIVE CASES TRACKER</h2>
        </Row>
        
        </Container>
        
        <Container className="cardsbox">
        <Row>
        <Col md={4}>
                <DropdownButton
            variant="outline-secondary"
            title="State"
            id="state-dropdown"
            ><Dropdown.Item href="#">MH</Dropdown.Item>
            <Dropdown.Item href="#">AP</Dropdown.Item>
            </DropdownButton>
            </Col>
            <Col md={4}>
                <DropdownButton
            variant="outline-secondary"
            title="District"
            id="state-dropdown"
            >{states}</DropdownButton>
            </Col>
            </Row>
        <Row className="row1">
            <Col md={4}>
                <Card className="card1">
                    <p>District</p>
                    <span>Nanded</span>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card2">
                    <p>Confirmed</p>
                    <span>{data.confirmed}</span>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card3">
                    <p>deceased</p>
                    <span>{data.deceased}</span>
                </Card>
            </Col>
        </Row>
        <Row className="row2">
            <Col md={4}>
                <Card className="card4">
                    <p>recovered</p>
                    <span>{data.recovered}</span>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card5">
                    <p>vaccinated1</p>
                    <span>{data.vaccinated1}</span>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card6">
                    <p>vaccinated2</p>
                    <span>{data.vaccinated2}</span>
                </Card>
            </Col>
        </Row>
        </Container>

</Card>

    )
}
