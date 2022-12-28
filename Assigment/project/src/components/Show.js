import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router'
import FormModal from "./FormModal"

function Show() {
    const { state } = useLocation();
    const summaryRef = useRef();
    console.log(state);

    useEffect(() => {

        summaryRef.current.innerHTML = state.show.summary;
    },[])

    return (
        <>
            <Container>
                <h2>Summary</h2>
                <p ref={summaryRef}></p>
            </Container>

            <Container>
                <FormModal show={state?.show} />
            </Container>
        </>
    )
}

export default Show
