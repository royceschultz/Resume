import React from 'react'
import { View } from '@react-pdf/renderer'

import { NormalText, Italic } from '@/components/Text'

import { globalStyles } from '@/settings.js'

export const SkillsSection = () => {
    const Accent = Italic
    return (
        <View style={globalStyles.itemContent}>
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
