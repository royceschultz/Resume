import React from 'react'
import { View } from '@react-pdf/renderer'

import { Row, Col, VPack } from '../components/Layout'
import { H2 } from '../components/Text.js'
import { TitleSection } from './sections/Title.js'
import { SummarySection } from './sections/Summary.js'
import { EducationSection } from './sections/Education.js'
import { SkillsSection } from './sections/Skills.js'
import { ExperienceSection, OtherExperienceSection } from './sections/Experience.js'

import settings from '@/settings.js'

const styles = {
  sectionTitle: {
    paddingBottom: 5,
    color: settings.color.accent,
  },
  columnStyle: {
    marginHorizontal: '0.37in',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  }
}

const Column1 = () => (
  <View style={styles.columnStyle}>
    <VPack space={settings.space.section}>
      <TitleSection />
      {/* <SummarySection /> */}
      <>
        <H2 style={styles.sectionTitle} >Education</H2>
        <EducationSection />
      </>
      <>
        <H2 style={styles.sectionTitle} >Skills</H2>
        <SkillsSection />
      </>
    </VPack>
  </View>
)

const Column2 = () => (
  <View style={styles.columnStyle}>
    <VPack space={settings.space.section}>
      <>
        <H2 style={styles.sectionTitle} >Relevant Experience</H2>
        <ExperienceSection />
      </>
      <>
        {/* <H2 style={styles.sectionTitle} >Other Experience</H2>
        <OtherExperienceSection /> */}
      </>
    </VPack>
  </View>
)

const Content = () => (
  // Main container for whole page.
  <Row style={{ height: '100%', alignItems: 'flex-start' }}>
    <Col style={{
      height: '100%', width: '41%',
      backgroundColor: settings.color.background,
      justifyContent: 'center',
    }}>
      <Column1 />
    </Col>

    <Col style={{
      height: '100%', width: '59%',
      justifyContent: 'center',
    }}>
      <Column2 />
    </Col>
  </Row >
)

export default Content
