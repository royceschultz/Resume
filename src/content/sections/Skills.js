import React from 'react'
import { View } from '@react-pdf/renderer'

import { NormalText, Italic } from '@/components/Text'

import { globalStyles } from '@/settings.js'

export const SkillsSection = () => {
    const Accent = Italic
    return (
        <View style={globalStyles.itemContent}>
            <NormalText>
                <Accent>Specialization:</Accent> Git, Docker, Python, JavaScript, Typescript, React, SQL, MongoDB, Bash, Linux, Arduino/ESP
            </NormalText>
            <NormalText>
                <Accent>Proficiency:</Accent>  AWS, Jenkins, Rancher, Helm, Terraform, CI/CD, ThreeJS, Automated&nbsp;Testing, MapBoxGL, D3, Vue, Airflow, Fusion360&nbsp;(CAD), Jira, Confluence, Code&nbsp;Reviews
            </NormalText>
            <NormalText>
                <Accent>Competency:</Accent> ROS, HPC, C++, Kubernetes, Pytorch, Tensorflow, Scala, RedShift&nbsp;(Data&nbsp;Warehousing)
            </NormalText>
            <NormalText>
                <Accent>Industry&nbsp;Knowledge:</Accent> Geospatial&nbsp;Data, Digital&nbsp;Signal&nbsp;Processing, Algorithms, Autonomous&nbsp;Vehicles, Robotics, Computational&nbsp;Geometry, Teaching, Real-Time&nbsp;Programming, Testing, CNC&nbsp;Manufacturing, Applied Statistics, Machine&nbsp;Learning, Object Detection, Technical&nbsp;Writing&nbsp;and&nbsp;Communication
            </NormalText>
        </View>
    )
}
