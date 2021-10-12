import React from 'react';
import { Row, Card, Col } from 'react-bootstrap'

function RepoList({ repos }) {
    const repoItem = (item) => {
        return (
            <Col key={item.id} md={3} style={{ marginTop: 5 }}>
                <Card style={{ backgroundColor: '#efeff5'}}>
                    <Card.Body>{item.name}</Card.Body>
                </Card>
            </Col>
        )
    }

    return (
        <Row style={{ margin: 10 }}>
            {
                repos ? repos.map((item) => {
                    return repoItem(item)
                }) : null
            }
        </Row>
    );
}

export default RepoList;