import React from 'react';
import { Card, Button, Container } from 'react-bootstrap'

const ImageText = () => {
    return (
        <div className=''>
            <Card>
                <Card.Body>
                    <Container>
                    <Card.Title>
                        <h1 className="display-4">
                            DESIGN THAT MAKES YOU FEEL AT HOME
                        </h1>
                    </Card.Title>
                    <Card.Text>
                        Every great design begins with an even better story. Let us tell your story.
                    </Card.Text>
                    <Button variant='success' >Contact Us</Button>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ImageText