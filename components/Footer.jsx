import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID IT!. THE BEST DONUTS EVER, WELL BAKED DONUTS WITH DIFFERENT FLAVOURS.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              Rua das Figueiras lote #304.
            <br /> Águas Claras, DF
            <br /> (61) 98575-1010
          </p>
          <p className={styles.text}>
            QSA 3/5 Área Especial 1.
            <br /> Taguatinga, DF
            <br /> (61) 98867-1011
          </p>
          <p className={styles.text}>
            SCS 510, Loja 13.
            <br /> Asa Sul, DF
            <br /> (61) 98867-1012
          </p>
          <p className={styles.text}>
            Shopping Conjunto Nacional, loja 145.
            <br /> Asa Norte, DF
            <br /> (61) 98867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
