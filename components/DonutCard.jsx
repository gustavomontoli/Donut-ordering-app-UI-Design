import React from 'react'
import Image from 'next/image'
import styles from '../styles/DonutCard.module.css'

const DonutCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/donut.png" alt="" width="500" height="500"/>
      <h1 className={styles.title}>BUTTERFLY DONUT</h1>
      <span className={styles.price}>R$6.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default DonutCard
