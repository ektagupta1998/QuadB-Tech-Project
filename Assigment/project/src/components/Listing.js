import React, { useEffect, useState } from 'react'
import CustomNavbar from './CustomNavbar'
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';



function Listing() {
    const navigate = useNavigate();
    const [data, setData] = useState([])

    const getApiRequest = async () => {

        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        getApiRequest()
    }, [])


    const handleRedirct = (item) =>{
        navigate('/show', {
            state: item
        })
    }

    return (
        <>
            <CustomNavbar />
            <Container>
                <ListGroup>
                    {data.map((item, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col xs={11}>
                                        {item?.show?.name}
                                    </Col>
                                    <Col>
                                        <Button onClick={() => handleRedirct(item)}>
                                            Show 
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    })}

                </ListGroup>
            </Container>

        </>
    )
}

export default Listing
