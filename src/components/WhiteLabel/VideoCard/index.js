import React from 'react'
import { Col, Button } from 'reactstrap'
import styled from '@emotion/styled'
import styles from './VideoCard.scss'
import { I18n } from 'react-i18next'


const IframeContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  height: 0;
  max-width: 100%;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

export default function VideoCard() {
  return (
    <I18n ns="translations">
      {t => (
        <div className={styles.videoContainer}>
          <div className='container'>
            <Col md="6">
              <h1>{ t('videocard.title') }</h1>
              <Button>{ t('videocard.livepreview') }</Button>
              <Button>{ t('videocard.contactus') }</Button>
            </Col>
            <Col md="6">
              <YTPlayer />
            </Col>
          </div>
        </div>
      )}
    </I18n>
  )
}