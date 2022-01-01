import React from 'react'
import styles from './Footer.module.scss'
import config from '../../data/SiteConfig'

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a
          href={`http://www.emanna-japan.com/`}
          target="_blank"
          rel="emanna"
        >
        命のパン
        </a>
        <a
          href={`http://www.jgbr.com/`}
          target="_blank"
          rel="福音"
        >
        福音書房
        </a>
        <a
          href={`https://biblesforjapan.org/`}
          target="_blank"
          rel="聖書"
        >
          聖書無料進呈
        </a>
      </div>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
)

export default Footer
