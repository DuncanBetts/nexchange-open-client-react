import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import { Paragraph, SectionHeading } from 'Pages/WhiteLabelSEO/style.js'
import { I18n } from 'react-i18next'


const imageLocation = 'http://www.placekitten.com/550/350'
const imageAltText = 'placekitten'

export default function MajorCard() {
  return (
    <I18n ns="translations">
      {t => (
        <Fragment>
          <Col md={12}>
            <SectionHeading>{ t('majorcard.title') }</SectionHeading>
          </Col>
          <Col md={6}>
            <Paragraph>
            { t('majorcard.text') }
            </Paragraph>
          </Col>
          <Col md={6}>
            <img src={ imageLocation } alt={ imageAltText } />
          </Col>
        </Fragment>
      )}
    </I18n>
  )
}