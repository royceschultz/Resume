import React from 'react'
import { View } from '@react-pdf/renderer'

export const Row = ({debug, ...props}) => (
    <View debug={debug} style={{
        display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'flex-end',
        ...(props.style ?? {})
    }}>
        {props.children}
    </View>
)

export const Col = ({debug, ...props}) => (
    <View debug={debug} style={{
        display: 'flex', flexDirection: 'col',
        justifyContent: 'space-between', alignItems: 'flex-start',
        ...(props.style ?? {})
    }}>
        {props.children}
    </View>
)

export const Center = ({debug, ...props}) => (
    <View debug={debug} style={{
        alignItems: 'center',
        ...(props.style ?? {})
    }}>
        {props.children}
    </View>
)

export const VSpace = ({debug, space, ...props}) => (
    <View debug={debug} style={{paddingVertical: space, ...(props.style ?? {})}}>
        {props.children}
    </View>
)

export const HSpace = ({debug, space, ...props}) => (
    <View debug={debug} style={{paddingHorizontal: space, ...(props.style ?? {})}}>
        {props.children}
    </View>
)
