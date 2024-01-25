import React from 'react'
import { Text, View, Image, Link } from '@react-pdf/renderer'

import { Center } from '@/components/Layout.js'
import { H1, H2, NormalText, NormalTextLink, Br } from '@/components/Text.js'
import { ProfilePhoto } from '@/components/icons/Profile.js'

import settings from '@/settings.js'


export const TitleSection = () => (
    <Center>
        <ProfilePhoto style={{ color: settings.color.background }} />
        <H1 style={{ color: settings.color.accent }} >Royce&nbsp;Schultz</H1>
        <H2 style={{ color: settings.color.accent }} >Software Engineer</H2>
        <NormalText style={{ textAlign: 'center' }}>
            royce.schultz@nyu.edu
            <Br />
            <NormalTextLink src="https://github.com/royceschultz">GitHub</NormalTextLink>, <NormalTextLink src="https://linkedin.com/in/royceschultz/">LinkedIn</NormalTextLink>: royceschultz
            <Br />
            {/* Portfolio: <NormalTextLink src="https://royceschultz.com">royceschultz.com</NormalTextLink>
            <Br /> */}
            Dual Citizen: USA & Iceland
        </NormalText>
    </Center>
)
