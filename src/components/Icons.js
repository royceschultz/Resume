import React from 'react'
import MaskedImage from './MaskedImage'

const customImage = (src, customStyles) => ({debug, style={}, ...props}) => {
    return (
        <MaskedImage debug={debug} src={src} style={{
            height: 20, width: 20,
            color: '#FFFFFF',
            ...customStyles,
            ...style,
        }} />
    )
}

export const CUIcon = customImage('./assets/cu.png', {
    backgroundColor: '#121212', scale: 0.7,
})

export const NYUIcon = customImage('./assets/nyu.png', {
    backgroundColor: '#f6e4fd', scale: 0.8,
})

export const AmazonIcon = customImage('./assets/amazon.png', {
    backgroundColor: '#121212', scale: 0.8,
})

export const TuSimpleIcon = customImage('./assets/tusimple.png', {
    backgroundColor: '#FFFFFF', scale: 0.93,
})
