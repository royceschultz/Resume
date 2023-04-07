import React from 'react'
import { View } from '@react-pdf/renderer'

import { Row, VSpace, VPack } from '@/components/Layout'
import { NormalText, Italic, H3 } from '@/components/Text'
import { TuSimpleIcon, AmazonIcon, CUIcon, NYUIcon } from '@/components/icons/Icons.js'

import settings, { globalStyles } from '@/settings.js'

const Item = ({ title, subtitle, note, description, icon, debug }) => (
    <View debug={debug}>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
            {icon}
            <View style={{ flexGrow: 1 }}>
                <H3>{title}</H3>
                <NormalText><Italic>{subtitle}, {note}</Italic></NormalText>
            </View>
        </Row>
        <View style={globalStyles.itemContent}>
            {description ? description.map((x, i) => (
                <NormalText key={i}>{x}</NormalText>
            )) : null}
        </View>
    </View>
)

const TuSimple = () => Item({
    title: 'TuSimple, Autonomous Trucking',
    subtitle: 'Software Engineer',
    note: 'May 2022 - December 2022',
    description: [
        'Contributed to software projects that support the development and operation of autonomous vehicles.',
        'Lead development of a Looker (Google Cloud) data visualization dashboard to monitor map metrics.',
        'Built distributed data pipelines to apply computational geometry algorithms over hundreds of gigabytes of map data.',
        'Created data visualization tools in a 3D webGL environment to aid downstream teams in research and validation.',
        'Supported release of a new web portal used to manage geographic markers of hazard zones.',
    ],
    icon: <TuSimpleIcon style={globalStyles.icon} />,
})

const CUResearch = () => Item({
    title: 'University Finance Lab',
    subtitle: 'Research Assistant',
    note: 'September 2020 - May 2021',
    description: [
        'Developed data pipelines to gather and process financial data from multiple sources.',
        'Deployed system infrastructure to make data available for peers.',
        'Researched natural language processing algorithms used to analyze TV news transcripts on the order of 10GB.',
        'Parsed data from 60,000 images of scanned financial texts using a computer vision model tuned on a custom dataset.',
    ],
    icon: <CUIcon style={globalStyles.icon} />,
})

const Amazon = () => Item({
    title: 'Amazon',
    subtitle: 'Software Engineering Intern',
    note: 'May 2020 - August 2020',
    description: [
        'Supported infrastructure used to gather IOT device metrics that provide quantitative insights for business intelligence.',
        'Deployed a web portal used to distribute data across internal teams while protecting customer privacy.',
        'Developed algorithms to identify erroneous metrics in a massive data warehouse to ensure quality data for downstream research.',
    ],
    icon: <AmazonIcon style={globalStyles.icon} />,
})

const NYUMath = () => Item({
    title: 'University Math Department',
    subtitle: 'Course Assistant',
    note: 'Fall 2021 - Spring 2022',
    icon: <NYUIcon style={globalStyles.icon} />,
})

const CUMath = () => Item({
    title: 'University Math Department',
    subtitle: 'Course Assistant & Tutor',
    note: 'Spring 2017 - Spring 2020',
    icon: <CUIcon style={globalStyles.icon} />,
})

export const ExperienceSection = () => (
    <VPack space={settings.space.item}>
        <TuSimple />
        <CUResearch />
        <Amazon />
    </VPack>
)

export const OtherExperienceSection = () => (
    <VPack space={settings.space.item}>
        <NYUMath />
        <CUMath />
    </VPack>
)
