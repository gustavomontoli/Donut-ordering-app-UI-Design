import React from 'react'
import styles from '../styles/DonutList.module.css';
import DonutCard from "./DonutCard"

const DonutList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST DONUT IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
          <DonutCard/>
      </div>
    </div>
  )
}

export default DonutList
