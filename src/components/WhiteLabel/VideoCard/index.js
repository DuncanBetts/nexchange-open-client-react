import React from 'react'
import { Button, Col } from 'reactstrap'
import styled from '@emotion/styled'
import { I18n } from 'react-i18next'
import ellipse from 'Img/ellipse.svg'



const PageTitle = styled.h1`
  grid-column: 1;
  grid-row: 1;
  font-size: 3.25rem;
  text-align: center;
  @media(min-width: 768px) {
    font-size: 4rem;
    text-align: inherit;
  }
  @media(min-width: 1536px) {
    font-size: 5rem;
  }
  @media(min-width: 2048px) {
    font-size: 7rem;
  }
`

const IframeContainer = styled.div`
  grid-row: 2;
  grid-column: 1;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  max-width: 100%;
  @media(min-width: 768px) {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: start;
  }
`

const Iframe = styled.iframe`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 97%;
  height: 100%;
`

const videoID = "7ujmzb3HzCA"

const YTPlayer = () => {
  return (
  <IframeContainer>
    <Iframe src={ `https://www.youtube.com/embed/${videoID}` } frameBorder="0" title="Set up your own cryptocurrency exchange" />
  </IframeContainer>
  )
}

// WIP
const reorder = `
:nth-child(2) { order: 3 }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: left;
  background-color: #01031e;
  background-image: url( ${ellipse} );
  background-position: 50% 50%;
  background-size: 80%;
  background-repeat: no-repeat;
  color: #FFF;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 150px 200px 150px;
  grid-template-columns: 360px;
  grid-gap: .5rem;
  @media(min-width: 768px) {
    grid-template-rows: 250px 125px;
    grid-template-columns: 348px 398px;;
  }
  @media(min-width: 1024px) {
    grid-template-columns: 15px minmax(497px, 625px) minmax(497px, 625px) 15px;
  }
`

// BS3 Container
// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-right: auto;
//   margin-left: auto;
//   padding-left: 15px;
//   padding-right: 15px;
//   @media (min-width: 768px) {
//     width: 750px;
//   }
//   @media (min-width: 992px) {
//     width: 970px;
//   }
//   @media (min-width: 1200px) {
//     width: 1170px;
//   }
// `

const Buttons = styled.div`
  padding-top: 3rem;
  grid-column: 1;
  grid-row: 3;
  justify-self: center;
  @media(min-width: 768px) {
    padding-top: inherit;
    grid-row: 2;
    justify-self: left;
  }
`

const StyledButton = styled(Button)`
  margin: 1rem;
`

export default function VideoCard() {
  return (
    <I18n ns="translations">
      {t => (
        <Wrapper>
          <GridContainer>
            <PageTitle>{ t('videocard.title') }</PageTitle>
            <Buttons>
              <StyledButton>{ t('videocard.livepreview') }</StyledButton>
              <StyledButton>{ t('videocard.contactus') }</StyledButton>
            </Buttons>
            <YTPlayer />
          </GridContainer>
        </Wrapper>
      )}
    </I18n>
  )
}