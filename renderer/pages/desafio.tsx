import { FormEvent, useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  Row,
} from 'react-bootstrap';
import { FaCalculator, FaCaretRight } from 'react-icons/fa';
import CardCenter from '../components/CardCenter';
import NavBar from '../components/NavBar';
import api from '../services/api';
import styles from '../styles/pages/Desafio.module.css';

export default function Desafio() {
  const [hypotenuse, setHypotenuse] = useState<undefined | number>();
  const [oppositeSide, setOppositeSide] = useState(3);
  const [adjacentSide, setAdjacentSide] = useState(4);
  const [errorMessage, setErrorMessage] = useState(String);
  const [loadingMessage, setLoadingMessage] = useState<null | string>();

  function handleCaculate(e: FormEvent) {
    e.preventDefault();

    if (loadingMessage === undefined)
      setLoadingMessage('Aguardando o servidor');

    api
      .post('/calculate', {
        opposite_side: oppositeSide,
        adjacent_side: adjacentSide,
      })
      .then((res) => {
        setHypotenuse(res.data.hypotenuse);
        setLoadingMessage('');
      })
      .catch((err) => {
        console.log(err);
        setLoadingMessage(undefined);
        setErrorMessage(String(err));
        setHypotenuse(undefined);

        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });
  }

  return (
    <Container className={styles.container}>
      <NavBar />
      {loadingMessage && (
        <div className="d-flex justify-content-center">
          <Alert variant="warning" className="w-25 text-center p-1">
            {/* <Alert.Heading>Ocorreu um erro ☹!</Alert.Heading> */}
            <p className="mb-0">{loadingMessage}</p>
          </Alert>
        </div>
      )}
      {errorMessage && (
        <div className="d-flex justify-content-center">
          <Alert variant="danger" className="w-25 text-center p-1">
            {/* <Alert.Heading>Ocorreu um erro ☹!</Alert.Heading> */}
            <p className="mb-0">{errorMessage}</p>
          </Alert>
        </div>
      )}
      <CardCenter icon={FaCalculator} title="Desafio">
        <Form
          onSubmit={handleCaculate}
          className={`mt-4 d-flex flex-column justify-content-around align-items-center`}
        >
          <Row className="justify-content-center">
            <Row className="w-100 justify-content-center">
              <Col className="d-flex align-items-center justify-content-end p-3">
                <div className="d-flex flex-column align-items-center">
                  <FormLabel htmlFor="inputOppositeSide">
                    Cateto Oposto
                  </FormLabel>
                  <input
                    id="inputOppositeSide"
                    type="number"
                    step="0.01"
                    className="form-control text-center"
                    onChange={(e) => {
                      setOppositeSide(Number(e.target.value));
                    }}
                    value={oppositeSide}
                  />
                </div>
              </Col>
              <Col className="d-flex align-items-center p-0">
                <img
                  src="/static/triangle.svg"
                  alt="Triângulo para calcular"
                  width={240}
                  height={140}
                />
              </Col>
              <Col
                className={`d-flex align-items-center p-0 ${styles.colInputHypot}`}
              >
                <div className="d-flex flex-column align-items-center">
                  <FormLabel htmlFor="inputHypotenuse">Hipotenusa</FormLabel>
                  <input
                    id="inputHypotenuse"
                    type="number"
                    readOnly={true}
                    className="form-control text-center"
                    onChange={(e) => {
                      setHypotenuse(Number(e.target.value));
                    }}
                    value={hypotenuse}
                  />
                </div>
              </Col>
            </Row>
            <Row className="w-100 mt-2 justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <FormLabel htmlFor="inputAdjacentSide">
                  Cateto Adjacente
                </FormLabel>

                <input
                  id="inputAdjacentSide"
                  type="number"
                  step="0.1"
                  className="form-control text-center"
                  onChange={(e) => {
                    setAdjacentSide(Number(e.target.value));
                  }}
                  value={adjacentSide}
                />
              </div>
            </Row>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Button
              variant="success"
              type="submit"
              className="d-flex align-items-center justify-content-center"
            >
              Calcular <FaCaretRight />
            </Button>
          </Row>
        </Form>
      </CardCenter>
    </Container>
  );
}
