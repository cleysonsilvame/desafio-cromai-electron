import { Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import ButtonLink from '../components/ButtonLink';
import CardCenter from '../components/CardCenter';
import NavBar from '../components/NavBar';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <Container className={styles.container}>
      <NavBar />
      <CardCenter icon={FaHome} title="Home">
        <Row className="justify-content-center align-items-around">
          <Row className={`m-4 p-3 bg-light text-justify ${styles.innerCard}`}>
            <h4>Olá, caro viajante do tempo!</h4>
            <p>
              Você retornou ao passado para aproximadamente 535 A.C. e encontrou
              com o grande filósofo matemático Pitágoras que naquela época
              estava pensando em largar tudo e desistir de seu trabalho. Com
              isso, o seu retorno ao passado trouxe um enorme desafio, que irá
              revolucionar o mundo, mas para isso você precisa provar ao grande
              filósofo que tudo aquilo que ele tinha construído até o momento
              era algo promissor e por isso ele deveria continuar.
            </p>
            <p>
              A sua missão nessa grande jornada é mostrar para ele que nada foi
              em vão, e para isso você precisará desenvolver uma calculadora que
              será capaz de calcular a relação entre os lados de um triângulo
              retângulo (mais conhecido popularmente como teorema de pitágoras).
            </p>
          </Row>
          <Row className="align-items-center">
            <ButtonLink path="/teoria" title="Toeria" />
          </Row>
        </Row>
      </CardCenter>
    </Container>
  );
}
