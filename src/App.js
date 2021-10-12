import './App.css';
import UserDetail from './components/UserDetail';
import { Container, Row, Col } from 'react-bootstrap'
import useRepo from './hooks/useRepo';
import RepoList from './components/RepoList';

function App() {
  const username = 'akaramanapp';
  const { repos } = useRepo(username)

  return (
    <>
      <Container style={{ margin: 20 }}>
        <Row>
          <Col md="auto"><UserDetail username={username} /></Col>
          <Col>
            <RepoList repos={repos} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
