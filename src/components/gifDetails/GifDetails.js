import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './style.css';

const GifDetails = () => {
    let location = useLocation();
    return (
        <div className="detailsDiv">
            <Card>
                <Card.Header variant="top"  >
                    <img src={ location.state.images.original.url } alt={ "123" } />
                </Card.Header>
                <Card.Body>
                    <Card.Title> { location.state.username } </Card.Title>
                    <Card.Text>
                        { location.state.title }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Imported: { location.state.import_datetime }</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GifDetails;