import React from 'react'
import { View } from '@react-pdf/renderer'

import { Row, VPack } from '@/components/Layout'
import { NormalText, Italic, Br, H3 } from '@/components/Text'
import { NYUIcon, CUIcon } from '@/components/icons/Icons.js'

import settings, { globalStyles } from '@/settings.js'

const iconStyle = {
    ...globalStyles.icon,
    color: settings.color.background,
}

const Item = ({ title, icon, ...props }) => (
    <>
        <Row style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            {icon}
            <H3>{title}</H3>
        </Row>
        <NormalText style={globalStyles.itemContent}><Italic>
            {props.children}
        </Italic></NormalText>
    </>
)

const NYU = () => Item({
    title: 'New York University',
    icon: <NYUIcon style={iconStyle} />,
    children: <>
        M.S. Computer&nbsp;Science, Cum Laude<Br />
        Awarded Merit-based Scholarship<Br />
        Graduated December 2022, 3.8&nbsp;GPA
    </>,
})

const CU = () => Item({
    title: 'University of Colorado',
    icon: <CUIcon style={iconStyle} />,
    children: <>
        B.S. Computer Science<Br />
        Minor Applied Mathematics<Br />
        Graduated May 2021, 3.5 GPA
    </>,
})

export const EducationSection = () => (
    <VPack space={settings.space.item}>
        <NYU />
        <CU />
    </VPack>
)
