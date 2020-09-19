import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const GifDetails = () => {
    let location = useLocation();
    return (
        <div>
            <Card>
                <Card.Header variant="top"  >
                    <p> { location.state.id } </p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Imported: </small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GifDetails;