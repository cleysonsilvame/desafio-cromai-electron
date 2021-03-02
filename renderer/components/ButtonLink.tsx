import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import styles from '../styles/components/ButtonLink.module.css';

interface ButtonLinkProps {
  title: string;
  path: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link href={props.path}>
      <Nav.Link
        as="a"
        href={props.path}
        className={`btn ${styles.button} text-white d-flex align-items-center justify-content-center`}
      >
        {props.title}
        <FaCaretRight />
      </Nav.Link>
    </Link>
  );
}
