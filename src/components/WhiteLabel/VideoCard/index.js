import React, { useState, useMemo, useCallback } from 'react'
import styled from '@emotion/styled'
import { I18n } from 'react-i18next'
import ellipse from 'Img/ellipse.svg'
import Support from './Support'
import YouTube from 'react-youtube'
import { Form } from 'reactstrap'


const PageTitle = styled.h1`
  grid-column: 1;
  grid-row: 1;
  font-size: 3.5rem;
  text-align: center;
  @media(min-width: 768px) {
    font-size: 4rem;
    text-align: inherit;
  }
  @media(min-width: 1024px) {
    font-size: 5rem;
    grid-column: 2;
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
  transform: translateX(5px);
  @media(min-width: 768px) {
    transform: translate(-10px, 10px);
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: start;
  }
  @media(min-width: 1024px) {
    grid-column: 3;
    transform: initial;
  }
`

const Iframe = styled(YouTube)`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 97%;
  height: 100%;
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
  grid-template-rows: 220px 200px 150px;
  grid-template-columns: 360px;
  grid-gap: .5rem;
  @media(min-width: 768px) {
    grid-template-rows: 250px 125px;
    grid-template-columns: 348px 398px;;
  }
  @media(min-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 15px 1fr 1fr 15px;
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
  @media(min-width: 1024px) {
    grid-column: 2;
    align-self: center;
  }
`

const StyledButton = styled.button`
  margin: 1rem;
  -webkit-appearance: button;
  -webkit-tap-highlight-color: transparent;
  background-color: #044264;
  border-radius: 4px;
  border: none;
  display: inline-block;
  font-family: 'Clan Offc Pro Medium';
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 1.33333;
  margin: 8px 8px;
  padding: 8px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  white-space: nowrap;
  will-change: box-shadow, transform;
  :hover {
    background-color: #033855;
  }
  @media(min-width: 365px) {
    margin: 10px 10px;
  }
  @media(min-width: 750px) {
    padding: 12px 30px;
    border-radius: 4px;
    margin: 12px 12px;
    font-size: 16px;
  }
  @media(min-width: 1536px) {
    padding: 14px 36px;
    border-radius: 5px;
    margin: 16px 16px;
    font-size: 18px;
  }
`

export default function VideoCard() {
  const [ showSupportModal, setShowSupportModal ] = useState(false)

  const onContactUs = useCallback(() => {
    setShowSupportModal(s => !s)
    window.gtag('event', 'Whitelabel Hero', { event_category: 'interaction', event_label: 'Click Contact Us' })
  })

  const youtubeOptions = useMemo(() => 
    ({
        onPlay: () => { window.gtag('event', 'Whitelabel Video', { event_category: 'interaction', event_label: 'Video Start' }) },
        onEnd: () => { window.gtag('event', 'Whitelabel Video', { event_category: 'interaction', event_label: 'Video Finished' }) }
    })
  , [])

  const livePreviewURL = 'https://n.exchange'

  return (
    <I18n ns="translations">
      {t => (
        <Wrapper>
          <GridContainer>
            <PageTitle>{ t('videocard.title') }</PageTitle>
            <Buttons>
              <Form action={ livePreviewURL }>
              <StyledButton type="submit">{ t('videocard.livepreview') }</StyledButton>
              </Form> 
              <StyledButton onClick={ onContactUs }>{ t('videocard.contactus') }</StyledButton>
            </Buttons>
            <IframeContainer>
              <Iframe videoId="7ujmzb3HzCA" opt={ youtubeOptions } />
            </IframeContainer>
          </GridContainer>
          <Support show={ showSupportModal } onClose={ () => setShowSupportModal(false) } />
        </Wrapper>
      )}
    </I18n>
  )
}