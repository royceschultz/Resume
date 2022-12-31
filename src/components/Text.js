import React from 'react'
import { Text, Link } from '@react-pdf/renderer'
import settings from '@/settings'

const fontFamilyStyle = (fontFamily) => (props) => (
    <Text style={{ fontFamily: fontFamily }}>
        {props.children}
    </Text>
)

export const Bold = fontFamilyStyle(settings.fontBold)
export const Italic = fontFamilyStyle(settings.fontItalic)
export const BoldItalic = fontFamilyStyle(settings.fontBoldItalic)

export const NormalText = ({debug, ...props}) => (
    <Text debug={debug} style={{
        fontSize: settings.sizeS, paddingVertical: 1,
        textAlign: 'justify',
        lineHeight: 1.25,
        paddingTop: 2,
        ...(props.style ?? {})
    }}>
        {props.children}
    </Text>
)

export const NormalTextLink = ({debug, src, ...props}) => (
    <Link debug={debug} src={src} style={{
        'color': 'black', 'textDecoration': 'none'
    }}>
        {props.children}
    </Link>
)

const headerStyle = (fontSize, customStyles={}) => ({debug, ...props}) => (
    <Text debug={debug} style={{
        fontSize: fontSize,
        ...customStyles,
        ...(props.style ?? {})
    }}>
        {props.children}
    </Text>
)
export const H1 = headerStyle(settings.sizeXL)
export const H2 = headerStyle(settings.sizeL)
export const H3 = headerStyle(settings.sizeM)


export const Br = () => '\n'
