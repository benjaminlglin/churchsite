import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
    「わたしたちはこの宝を土の器の中に持っています．

それは、この卓越した力が神のものであって、わたしたちからではないことが現れるためです。」―Ⅱコリント4:7
      {` `}
    
    </p>
  </>
)

export default Bio
