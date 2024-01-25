import React from 'react'
import { View } from '@react-pdf/renderer'

import { NormalText, Italic } from '@/components/Text'

import { globalStyles } from '@/settings.js'

export const SkillsSection = () => {
    const Accent = Italic
    return (
        <View style={globalStyles.itemContent}>
            <NormalText>
                <Accent>Specialization:</Accent> Git, Docker, AWS, Terraform, CI/CD, Python, JavaScript, Typescript, React, SQL, MongoDB, Rancher, Bash, Linux, Arduino/ESP
            </NormalText>
            <NormalText>
                <Accent>Proficiency:</Accent> Helm, Jenkins, Kubernetes, Airflow, Pytorch, Tensorflow, C++, Rust, Vue, ThreeJS, MapBoxGL, D3, Automated&nbsp;Testing, Prometheus, Fusion360&nbsp;(CAD), ROS, HPC, Jira, Code&nbsp;Reviews, Data&nbsp;Warehousing
            </NormalText>
            <NormalText>
                <Accent>Industry&nbsp;Knowledge:</Accent> Geospatial&nbsp;Data, Digital&nbsp;Signal&nbsp;Processing, Algorithms, Computational&nbsp;Geometry, Robotics, Autonomous&nbsp;Vehicles, AI Training, GPU&nbsp;Accelerated&nbsp;Computing, CUDA, Generative&nbsp;AI, Large&nbsp;Language&nbsp;Models, Stable&nbsp;Diffusion, Agile&nbsp;Development, Teaching, Real-Time&nbsp;Programming, CNC&nbsp;Manufacturing, Linear&nbsp;Algebra
            </NormalText>
        </View>
    )
}
