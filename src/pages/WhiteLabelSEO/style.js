import styled from '@emotion/styled'


const SectionHeading = styled.h2`
  padding-bottom: .5rem;
  font-weight: 400;
  font-size: 2.75rem;
  font-family: 'Clan Offc Pro Book';
  @media(min-width: 1024px) {
    font-size: 3.5rem;
    color: #F0F0F0;
  }
  @media(min-width: 1536px) {
    font-size: 4rem;
  }
  @media(min-width: 2048px) {
    font-size: 4.5rem;
  }
`

const SectionSubHeading = styled.h3`
  padding-top: 1rem;
  font-weight: 400;
  font-size: 2.5rem;
  font-family: 'Clan Offc Pro Book';
  @media(min-width: 1024px) {
    font-size: 2rem;
    color: #F0F0F0;
  }
  @media(min-width: 1536px) {
    font-size: 2rem;
  }
  @media(min-width: 2048px) {
    font-size: 2.75rem;
  }
`

const Paragraph = styled.p`
@media(min-width: 1024px) {
  color: #DCDCDC;
}
@media(min-width: 1920px) {
  font-size: 2rem;
}
`

export { Paragraph, SectionSubHeading, SectionHeading }