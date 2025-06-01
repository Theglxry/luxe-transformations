import NavBar from '@/components/layout/navbar/Navbar'
import BorderedPageWrapper from '@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper'
import React from 'react'
import Herosection from './herosection'
import AboutProject from './aboutProject'
import DesignSolution from './designSolution'
import Testimonials from '@/components/reuseables/Testimonials/Testimonials'
import Deliverables from './deliverables'
import HomepageOurProcess from '../homepage/homepage_our_process'
import Duration from './duration'
import Result from './result'
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";
import Footer from '@/components/layout/footer/Footer'


function CaseStudyPage() {
  return (
    <BorderedPageWrapper>
        {/* <div className={styles.home_container}> */}
          <NavBar dark={false} />
          <Herosection />
          <AboutProject/>
          <div className='md:p-16 p-4'>

          <Testimonials title_color="#100E10" description_color="#100E10"/>
          </div>
          <DesignSolution />
          <Deliverables/>
          <div className='bg-[#0F0F0F]'>

          <HomepageOurProcess />

          </div>
          <Duration/>
          <Result/>
          <MakeInquiry />
          <Footer /> 
        
      </BorderedPageWrapper>
  )
}

export default CaseStudyPage