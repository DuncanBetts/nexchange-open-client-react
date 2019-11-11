import React from 'react'
import { Col } from 'reactstrap'
import styles from './SupportedAsset.scss'
import styled from '@emotion/styled'

export default function SupportedAsset({ coin: { name, src } }) {
  return (
    <Item>
      <div className={styles.profile}>
        <img src={src} alt={`${name}`} />
      </div>
      <div className={styles.title}>
        {name}
      </div>
    </Item>
  )
}

const Item = styled.div`
  height: 230px;
  @media(min-width: 1024px) {
    flex: 1 0 20%;
  }
  .${styles.profile} {
    text-align: center;
    > img {
      display: inline-block;
      height: 180px;
      width: auto;
    }
  }
`