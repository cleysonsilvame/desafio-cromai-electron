import { Container, Row } from 'react-bootstrap';
import { FaHistory } from 'react-icons/fa';
import ButtonLink from '../components/ButtonLink';
import CardCenter from '../components/CardCenter';
import NavBar from '../components/NavBar';
import styles from '../styles/pages/Teoria.module.css';

export default function Teoria() {
  return (
    <Container className={styles.container}>
      <NavBar />
      <CardCenter icon={FaHistory} title="Teoria">
        <Row className="justify-content-center align-items-around">
          <Row className={`m-4 p-3 bg-light text-justify ${styles.innerCard}`}>
            <h4>Veja como é feito o cálculo sem nossa calculadora</h4>
            <p>
              Num triângulo retângulo, sempre que souber o comprimento de dois
              dos seus lados, torna-se relativamente fácil descobrir o
              comprimento do terceiro lado que falta. Para descobrir isso basta
              utilizar a seguinte fórmula designada por Teorema de Pitágoras:{' '}
              <code>a² = b² + c²</code>
            </p>
            <p>
              Em linguagem corrente este teorema afirma que o quadrado da
              hipotenusa é igual à soma do quadrado dos catetos. Para ver como é
              que funciona basta introduzir nas respetivas caixas os valores.
            </p>
            <p>
              A nossa calculadora irá mostrar os cálculos necessários para obter
              o resultado.
            </p>
          </Row>
          <Row className="align-items-center">
            <ButtonLink path="/desafio" title="Desafio" />
          </Row>
        </Row>
      </CardCenter>
    </Container>
  );
}
