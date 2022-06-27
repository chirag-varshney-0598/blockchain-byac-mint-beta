import React, { useRef } from 'react'
import { Box } from '@material-ui/core'
import Page from 'src/component/Page'
import Banner from './Banner'
import WhatTechnologies from './WhatTechnologies'
import PublicMint from './PublicMint'
import Team from './Team'
import Corosel from './Corosel'
import FAQ from '../Header/FAQ'
import WhyUs from '../Header/WhyUs'

function Home(props) {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Page title="Become part of our NFT revolution!">
      <Box buttonClick={scrollToTop}>
        <Banner />
        <WhatTechnologies />
        {/* <PublicMint /> */}
        <Corosel />
        <div ref={refs.home} id="section3">
          <Team />
        </div>
        <div ref={refs.home} id="section2">
          <WhyUs />
        </div>
        <FAQ />
      </Box>
    </Page>
  )
}
export default Home
