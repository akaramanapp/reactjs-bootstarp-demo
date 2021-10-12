import React from 'react';
import useGitHub from '../../hooks/useGitHub';
import { Card, Placeholder } from 'react-bootstrap'

function UserDetail({ username }) {
    const { user, error, loading } = useGitHub(username);

    const loadingView = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={user.avatar_url} />
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    </Placeholder>
                </Card.Body>
            </Card>
        )
    }

    const dataView = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {`${user.bio} at ${user.company}`}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    if (user) {
        return !loading ? dataView() : loadingView()
    } else {
        return null;
    }
}

export default UserDetail;