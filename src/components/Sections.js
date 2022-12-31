import React from 'react'
import { View } from '@react-pdf/renderer'

import { Bold, Italic, Br, NormalText, H1, H2, H3 } from './Text'
import { Row, VSpace } from './Layout'
import { CUIcon, NYUIcon, AmazonIcon, TuSimpleIcon } from './Icons'

import settings from '@/settings'


const styles = {
  itemContent: {
    'marginLeft': 4,
  },
  itemSubtitle: {
    'fontFamily': settings.fontItalic,
    'fontSize': settings.sizeS,
  },
  itemNote: {
    'fontSize': settings.sizeS,
    'flexGrow': 1,
    'textAlign': 'right',
    'color': '#99F',
  },
  icon: {
    height: 25, width: 25,
    paddingRight: 5,
  },
}

const Item = ({ title, subtitle, note, description, icon, debug, ...props }) => (
  <View debug={debug}>
    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
      {icon}
      <View style={{ flexGrow: 1 }}>
        <Row>
          <H3>{title}</H3>
          <NormalText style={styles.itemNote}></NormalText>
        </Row>
        <NormalText><Italic>{subtitle}, {note}</Italic></NormalText>
      </View>
    </Row>
    <View style={styles.itemContent}>
      {description ? description.map((x, i) => (
        <NormalText key={i}>{x}</NormalText>
      )) : null}
    </View>
  </View>
)

export const EducationSection = ({ styleProp, ...props }) => {
  const NarrowItem = ({ title, icon, ...props }) => (
    <>
      <Row style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        {icon}
        <H3>{title}</H3>
      </Row>
      <NormalText style={styles.itemContent}><Italic>
        {props.children}
      </Italic></NormalText>
    </>
  )
  return (
    <View>
      <NarrowItem title='New York University' icon={<NYUIcon style={{
        color: settings.color.background,
        ...styles.icon,
      }} />}>
        M.S. Computer&nbsp;Science<Br />
        Graduated December 2022, 3.8&nbsp;GPA
      </NarrowItem>
      <VSpace space={settings.space.item} />
      <NarrowItem title='University of Colorado' icon={<CUIcon style={{
        color: settings.color.background,
        ...styles.icon,
      }} />}>
        B.S. Computer Science<Br />
        Minor Applied Mathematics<Br />
        Graduated May 2021, 3.5 GPA
      </NarrowItem>
    </View>
  )
}

export const ExperienceSection = () => (
  <View>
    <Item
      title='TuSimple, Autonomous Trucking'
      subtitle='Software Engineering Intern'
      note='May&nbsp;2022&nbsp;-&nbsp;December&nbsp;2022'
      description={[
        'Contributed to software projects that support the development and operation of autonomous vehicles.',
        'Lead development of a Looker (Google Cloud) data visualization dashboard to monitor map metrics.',
        'Built distributed data pipelines to apply computational geometry algorithms over hundreds of gigabytes of map data.',
        'Created data visualization tools in a 3D webGL environment to aid downstream teams in research and validation.',
        'Supported release of a new web portal used to manage geographic markers of hazard zones.',
      ]}
      icon={<TuSimpleIcon style={styles.icon} />}
    />
    <VSpace space={settings.space.item} />
    <Item
      title="University Finance Lab"
      subtitle='Research Assistant'
      note='September 2020 - May 2021'
      description={[
        'Developed data pipelines to gather and process financial data from multiple sources.',
        'Deployed system infrastructure to make data available for peers.',
        'Researched natural language processing algorithms used to analyze TV news transcripts on the order of 10GB.',
        'Parsed data from 60,000 images of scanned financial texts using a computer vision model tuned on a custom dataset.',
      ]}
      icon={(<CUIcon style={styles.icon} />)}
    />
    <VSpace space={settings.space.item} />
    <Item
      title='Amazon'
      subtitle='Software Engineering Intern'
      note='May 2020 - July 2020'
      description={[
        'Supported infrastructure used to gather IOT device metrics that provide quantitative insights for business intelligence.',
        'Deployed a web portal used to distribute data across internal teams while protecting customer privacy.',
        'Developed algorithms to identify erroneous metrics in a massive data warehouse to ensure quality data for downstream research.',
      ]}
      icon={<AmazonIcon style={styles.icon} />}
    />
  </View>
)

export const OtherExperienceSection = () => (
  <View>
    <Item
      title='University Math Department'
      subtitle='Exam Proctor'
      note='Fall 2021 - Spring 2022'
      description={[
        // 'Assisted professors in administering exams for hundreds of students.'
      ]}
      icon={<NYUIcon style={styles.icon} />}
    />
    <VSpace space={settings.space.item} />
    <Item
      title='University Math Resource Center'
      subtitle='Math Tutor'
      note='Fall 2019 - Spring 2020'
      description={[
        'Encouraged students to use their analytical thinking skills.',
        'Held regular office hours, aiding dozens of students each week.'
      ]}
      icon={<CUIcon style={styles.icon} />}
    />
  </View>
)

export const SkillsSection = () => {
  const Accent = Italic
  return (
    <View style={styles.itemContent}>
      <NormalText>
        <Accent>Specialization:</Accent> Git, Docker, Python, JavaScript, SQL, MongoDB, Bash, Linux, Arduino/ESP , Home&nbsp;Assistant
      </NormalText>
      <NormalText>
        <Accent>Proficiency:</Accent> C, C++, Typescript, ThreeJS&nbsp;(WebGL), ETL&nbsp;Pipelines, AWS, Fusion360&nbsp;(CAD), Kibana, Looker, Jira, Confluence, Code&nbsp;Reviews
      </NormalText>
      <NormalText>
        <Accent>Competency:</Accent> ROS, HPC, Tensorflow, PyTorch, Scala, Rancher, Kubernetes, RedShift&nbsp;(Data&nbsp;Warehousing)
      </NormalText>
      <NormalText>
        <Accent>Industry&nbsp;Knowledge:</Accent> Robotics, Autonomous&nbsp;Vehicles, Geospatial&nbsp;Data, Algorithms, Computational&nbsp;Geometry, CNC&nbsp;Manufacturing, Applied Statistics, Machine&nbsp;Learning, Object Detection, Teaching, Technical&nbsp;Communication
      </NormalText>
      <NormalText>
        <Accent>Hobby:</Accent> FPV Drones, Endurance Cycling
      </NormalText>
    </View>
  )
}

export const SummarySection = (props) => (
  <NormalText style={styles.itemContent}>
    <Italic>
      I am a recent MS graduate of NYU. I am passionate about software projects that support the robotic infrastructure of the future. I enjoy using creativity to solve challenging engineering problems.
    </Italic>
  </NormalText>
)
