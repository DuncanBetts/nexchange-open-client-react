import styled from '@emotion/styled'



const SectionHeading = styled.h2`
  padding-top: .5rem;
  padding-bottom: .5rem;
  font-weight: 400;
  font-size: 2.75rem;
  font-family: 'Clan Offc Pro Book';
  @media(min-width: 750px) {
    font-size: 3.5rem;
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
  padding-bottom: .5rem;
  font-weight: 400;
  font-size: 2.5rem;
  font-family: 'Clan Offc Pro Book';
  @media(min-width: 750px) {
    font-size: 3rem;
  }
  @media(min-width: 1536px) {
    font-size: 2rem;
  }
  @media(min-width: 2048px) {
    font-size: 2.5rem;
  }
`
export { SectionSubHeading, SectionHeading }