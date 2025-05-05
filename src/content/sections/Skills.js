import React from 'react'
import { View } from '@react-pdf/renderer'

import { NormalText, Italic } from '@/components/Text'

import { globalStyles } from '@/settings.js'

export const SkillsSection = () => {
    const Accent = Italic
    return (
        <View style={globalStyles.itemContent}>
            {/* To Add:
                * Github Actions
            */}
            <NormalText>
                <Accent>Developer&nbsp;Tools:</Accent> Git, Linux, Docker, VSCode, AWS, Terraform, Rancher, Kubernetes, Github&nbsp;Actions, Jenkins, Grafana&nbsp;(Service&nbsp;Monitoring)
            </NormalText>

            <NormalText>
                <Accent>Languages:</Accent> Python, JavaScript, Typescript, C++, Rust, SQL, Bash, HTML, CSS
            </NormalText>

            <NormalText>
                <Accent>Web&nbsp;Technologies:</Accent> React, Vue, Svelte, Vite, Node, ThreeJS, WebGL, MapBoxGL, Lodash, Flask, Django, gRPC, WASM
            </NormalText>

            <NormalText>
                <Accent>Data&nbsp;Science:</Accent> Pytorch, Tensorflow, Numpy, Pandas, Scikit-learn, OpenCV
            </NormalText>

            <NormalText>
                <Accent>Testing&nbsp;Tools:</Accent> Pytest, Behave, Vitest, Jest
            </NormalText>

            <NormalText>
                <Accent>Databases:</Accent> Postgres, MongoDB, Redis, Elasticsearch, InfluxDB, TimescaleDB
            </NormalText>

            <NormalText>
                <Accent>Industry Knowledge:</Accent> Geospatial&nbsp;Data, Time&nbsp;Series&nbsp;Data, Scientific&nbsp;Calibration, Digital&nbsp;Signal&nbsp;Processing, AI Training, GPU&nbsp;Acceleration, Computer&nbsp;Vision, Robotics, Autonomous&nbsp;Vehicles, HPC, Algorithms,&nbsp;Computational&nbsp;Geometry, Distributed&nbsp;Systems, Parallel Computing
            </NormalText>
        </View>
    )
}
