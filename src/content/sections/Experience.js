import React from 'react'
import { View } from '@react-pdf/renderer'

import { Row, VSpace, VPack } from '@/components/Layout'
import { NormalText, Italic, H3 } from '@/components/Text'
import { TuSimpleIcon, AmazonIcon, CUIcon, NYUIcon, MaxarIcon } from '@/components/icons/Icons.js'

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

const Maxar = () => Item({
    title: 'Maxar, Satellite Imagery',
    subtitle: 'Software Engineer',
    note: 'September 2023 - Present',
    description: [
        'Developing mission critical software solutions for integration throughout the entire ground software stack.',
        'Applying machine learning algorithms to satellite time-series metrics to expedite identification and resolution of anomalies.',
        'Building scalable computer systems to ingest massive data streams from a growing constellation of next-gen satellites.',
        'Deploying services and libraries with automated pipelines running comprehensive test suites to ensure reliable releases.',
        'Enhancing software tools used to calibrate the imaging sensor that produces imagery for Google maps.',
        // 'Creating intuitive interfaces to facilitate users interaction with time series data, enabling users to make informed decisions.',
        // 'Proactively engaging with users to better understand their needs and deliver tailored solutions that exceed expectations.',
    ],
    icon: <MaxarIcon style={globalStyles.icon} />,
})

const TuSimple = () => Item({
    title: 'TuSimple, Autonomous Trucking',
    subtitle: 'Software Engineer',
    note: 'May 2022 - December 2022',
    description: [
        'Contributed to software projects that support the development and operation of autonomous vehicles.',
        'Created highly interactive 3D data visualization tools to aid downstream teams in research and validation.',
        'Supported the successful release of a new web portal central to manage geographic markers of hazard zones.',
        'Designed and implemented distributed data pipelines, applying computational geometry algorithms to process high-resolution map data totaling over 20 terabytes.',
    ],
    icon: <TuSimpleIcon style={globalStyles.icon} />,
})

const CUResearch = () => Item({
    title: 'University Finance Lab',
    subtitle: 'Research Assistant',
    note: 'September 2020 - May 2021',
    description: [
        'Researched natural language processing algorithms used to analyze TV news transcripts on the order of 10 gigabytes.',
        'Applied computer vision techniques to extract textual data from 60,000 scanned financial documents.',
        'Developed multi-processing algorithms to transform data in parallel on a supercomputer cluster provided by the University.'
    ],
    icon: <CUIcon style={globalStyles.icon} />,
})

const Amazon = () => Item({
    title: 'Amazon',
    subtitle: 'Software Engineering Intern',
    note: 'May 2020 - August 2020',
    description: [
        'Supported infrastructure used to gather IOT device metrics that provide quantitative insights for business intelligence.',
        'Developed algorithms to identify erroneous metrics in a massive data warehouse to ensure quality data for downstream research initiatives.',
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
        <Maxar />
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
