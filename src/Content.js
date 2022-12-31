import React from 'react'
import { View, Text, Svg, G, Path } from '@react-pdf/renderer'

import { Row, Col, Center, VSpace } from './components/Layout'
import { NormalText, Bold, Italic, H1, H2, H3, Br, NormalTextLink } from './components/Text.js'
import { ProfilePhoto } from './components/Profile'
import { EducationSection, ExperienceSection, OtherExperienceSection, SkillsSection, SummarySection } from './components/Sections.js'

import settings from '@/settings.js'

const styles = {
  sectionTitle: {
    paddingBottom: 5,
    color: settings.color.accent,
  }
}


const Content = () => (
  <Row style={{ height: '100%', alignItems: 'flex-start' }}>
    {/* Column 1 */}
    <Col style={{
      height: '100%', width: '41%',
      backgroundColor: settings.color.background,
      justifyContent: 'center',
    }}>
      <View style={{
        marginHorizontal: '0.37in',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <Center>
          <ProfilePhoto style={{ color: settings.color.background }} />
          <H1 style={{color: settings.color.accent}} >Royce&nbsp;Schultz</H1>
          <H2 style={{color: settings.color.accent}} >Software Engineer</H2>
          <NormalText style={{ textAlign: 'center' }}>
            royce.schultz@nyu.edu
            <Br />
            <NormalTextLink src="https://github.com/royceschultz">GitHub</NormalTextLink>, <NormalTextLink src="https://linkedin.com/in/royceschultz/">LinkedIn</NormalTextLink>: royceschultz
            <Br/>
            Dual Citizen: USA & Iceland
          </NormalText>
        </Center>

        {/* <VSpace space={settings.space.section} />

        <H2 style={styles.sectionTitle} >Summary</H2>
        <SummarySection /> */}

        <VSpace space={settings.space.section} />

        <H2 style={styles.sectionTitle} >Education</H2>
        <EducationSection />

        <VSpace space={settings.space.section} />

        <H2 style={styles.sectionTitle} >Skills</H2>
        <SkillsSection />
      </View>
    </Col>
    {/* Column 2 */}
    <View style={{ height: '100%', width: '59%' }}>
      <View style={{
        height: '100%', marginHorizontal: '0.37in',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <H2 style={styles.sectionTitle} >Relevant Experience</H2>
        <ExperienceSection />

        <VSpace space={settings.space.section} />

        <H2 style={styles.sectionTitle} >Other Experience</H2>
        <OtherExperienceSection />
      </View>

    </View>
  </Row >
)

export default Content
