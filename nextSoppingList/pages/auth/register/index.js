import React from "react";
import { Container } from "reactstrap";
import Register from "../../../components/auth/Register";
import styles from "../../../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className="m-5 d-flex justify-content-center">
          <Register />
        </div>
      </Container>
    </div>
  );
};

export default index;
