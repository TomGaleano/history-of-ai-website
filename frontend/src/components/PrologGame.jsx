import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { prologQuery } from '../services/api';

const PrologGame = () => {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');

  const handleQuery = async () => {
    try {
      let modifiedQuery = query;
      if (query.endsWith('.')) {
        modifiedQuery = query.slice(0, -1) + ', R).';
      }
      const result = await prologQuery(modifiedQuery);
      let outputText = '';
      if (result.solutions.length > 0) {
        outputText = result.solutions.join('\n');
      } else {
        outputText = result.stdout || result.stderr;
      }
      setOutput(outputText);
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <Container fluid data-testid="prolog-game">
      <Row>
        <Col md={4} data-testid="story-guide-panel">
          <Card>
            <Card.Body>
              <Card.Title>The Archivist's Key</Card.Title>
              <Card.Text>
                You are an archivist who has locked a valuable artifact in a safe. You've forgotten the combination, but you know it's hidden in three parts across the archive.
              </Card.Text>
              <Card.Text>
                <strong>Goal:</strong> Use Prolog queries to explore the archive, find the three parts of the combination, and open the safe.
              </Card.Text>
              <div>
                <strong>How to Play:</strong>
                <ul>
                  <li>Use Prolog queries to interact with the world.</li>
                  <li>Available predicates: `look(Place)`, `examine(Object)`, `goto(Place)`.</li>
                  <li>End your queries with a period (.).</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} data-testid="prolog-interpreter-panel">
          <Card>
            <Card.Body>
              <Card.Title>Prolog Interpreter</Card.Title>
              <Form.Control
                as="textarea"
                rows={10}
                readOnly
                value={output}
                className="mb-3"
              />
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your Prolog query here..."
                className="mb-3"
              />
              <Button onClick={handleQuery}>Submit</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrologGame;