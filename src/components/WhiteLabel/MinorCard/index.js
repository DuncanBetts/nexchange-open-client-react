import React from 'react'
import styled from '@emotion/styled'
import { Paragraph, SectionHeading } from 'Pages/WhiteLabelSEO/style.js'


export default function MinorCard({ topic , text }) {

  // const imgPath = `/img/white_label_page/feature/${topic}.jpg`
  const imgPath = 'http://www.placekitten.com/300/300'
  const imgAltText = { topic }

  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `

  const Item = styled(Paragraph)`
    margin-bottom: 1rem;
  `

  return (
    <Wrapper>
        <SectionHeading>{ topic }</SectionHeading>
        <Item>{ text }</Item>
        <img src={ imgPath } alt={ imgAltText } />
    </Wrapper>
  )
}