import React from 'react'
import { I18n } from 'react-i18next'
import { Container } from 'reactstrap'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VideoCard from 'Components/WhiteLabel/VideoCard/'
import KeyFeatures from 'Components/WhiteLabel/KeyFeatures/'
import MajorCard from 'Components/WhiteLabel/MajorCard/'
import SupportedAssets from 'Components/WhiteLabel/SupportedAssets/'
import MinorCard from 'Components/WhiteLabel/MinorCard/'
import FAQ from 'Components/WhiteLabel/FAQ/'
import PriceTable from 'Components/WhiteLabel/PriceTable/'

import styles from './styles.scss'


const WhiteLabelSEO = ({data, ...props}) => {
  const { pages } = data
  const { articles, faq, features } = (pages && pages[0]) || {}

  return (
    <I18n ns="translations">
      {t => (
        <div className={ styles.whitelabel }>
          <VideoCard />
          <Container>
            <section className='row'><KeyFeatures features={features} /></section>
            <section className='row'><MajorCard /></section>
            <section className='row'><SupportedAssets /></section>
            <section className='row'><MinorCard topic={ t('minorcard.topic1title') } text={ t('minorcard.topic1text') } /></section>
            <section className='row'><MinorCard topic={ t('minorcard.topic2title') } text={ t('minorcard.topic2text') } /></section>
            <section className='row'><MinorCard topic={ t('minorcard.topic3title') } text={ t('minorcard.topic3text') } /></section>
            <section className='row'><PriceTable plans={plans} /></section>
            <section className='row'><FAQ items={faq} /></section>
          </Container>
        </div>
      )}
    </I18n>
  )
}

const plans = [
  {
    name: 'community',
    setup: 0,
    monthly: 0
  },
  {
    name: 'crypto',
    setup: 2500,
    monthly: 250,
    duration: 12,
    devhours: 1,
    hourprice: 100,
    coinlist: 5000,
  },
  {
    name: 'fiat',
    setup: 5000,
    monthly: 400,
    duration: 12,
    devhours: 2,
    hourprice: 100,
    coinlist: 5000,
  },
  {
    name: 'ieo',
    setup: 9800,
    monthly: 800,
    duration: 12,
    devhours: 4,
    hourprice: 100,
    coinlist: 0,
  }
]

const faq = gql`
  query GetWhitelabel {
    pages(where: {name: "whitelabel"}) {
      articles {
        title
        content
        date
        createdAt
      }
      faq {
        title
        content
      }
      features {
        title
        content
        art {
          fileName
          url
        }
      }
    }
  }
`

export default graphql(faq)(WhiteLabelSEO)
