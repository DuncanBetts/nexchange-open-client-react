import React from 'react'
import styles from './FeatureItem.scss'
import styled from '@emotion/styled'


export default function FeatureItem( { name, description, art } ) {

  const imgPath = art || 'http://www.placekitten.com/200/200'
  const imgAltText = name

  const Item = styled.div`
    margin: 5px;
    align-self: end;
  `

  return (
    <Item>
      <div className={ styles.art }>
        <img src={ imgPath } alt={ imgAltText } />
      </div>
      <div className={ styles.description }>
        { description }
      </div>
    </Item>
  )
}