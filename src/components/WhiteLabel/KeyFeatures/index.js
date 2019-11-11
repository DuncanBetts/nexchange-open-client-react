import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import { SectionHeading } from 'Pages/WhiteLabelSEO/style.js'
import { I18n } from 'react-i18next'
import styled from '@emotion/styled'

import FeatureItem from './FeatureItem'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-end;
  padding: 5px;
  min-width:
`

const KeyFeatures = ({features, ...props}) => {
  return (
    <I18n ns="translations">
      {t => (
        <>
          <SectionHeading>{ t('keyfeatures.title') }</SectionHeading>
          <Wrapper>
            {features && features.length && features.map(({title, content, art}, index) => (
                  <FeatureItem name={title} description={content} art={art && art.url} />
            ))}
          </Wrapper>
        </>
      )}
    </I18n>
  )
}

export default KeyFeatures