import React from 'react'
import { View, Text, Svg, G, Path, Image, Rect } from '@react-pdf/renderer'

const CircleMask = ({ style, ...props }) => (
    <Svg
        viewBox="0 0 150 150"
        style={{ ...style, backgroundColor: undefined }}>
        <G>
            <Path
                fill={style.color ?? '#000000'}
                d="M -100 -100 L 0 150.00015 L 150.00015 150.00015 L 150.00015 0 L 0 0 z M 75.000073 5.0002116 A 70 70 0 0 1 144.99993 75.000073 A 70 70 0 0 1 75.000073 144.99993 A 70 70 0 0 1 5.0002116 75.000073 A 70 70 0 0 1 75.000073 5.0002116 z " />
        </G>
    </Svg>
)

const RoundedSquareMask = ({ style = {}, ...props }) => (
    <Svg
       viewBox="0 0 100 100"
       style={{...style, backgroundColor: undefined}}>
      <Path
         fill={style.color ?? '#000000'}
         d="M 0 0 L 0 100.0001 L 100.0001 100.0001 L 100.0001 0 L 0 0 z M 14.260628 5.0002116 L 85.739469 5.0002116 A 9.2604167 9.2604167 0 0 1 94.999886 14.260628 L 94.999886 85.739469 A 9.2604167 9.2604167 0 0 1 85.739469 94.999886 L 14.260628 94.999886 A 9.2604167 9.2604167 0 0 1 5.0002116 85.739469 L 5.0002116 14.260628 A 9.2604167 9.2604167 0 0 1 14.260628 5.0002116 z " />
    </Svg>
    )

const Square = ({ style = {}, ...props }) => (
    <Svg
        viewBox="0 0 150 150"
        style={style}
    >
        <G>
            <Rect
                fill={style.color ?? '#000000'}
                width="150"
                height="150"
                x="0"
                y="0" />
        </G>
    </Svg>
)

const MaskedImage = ({ debug, src, style = {}, ...props }) => (
    <View debug={debug} style={{
        ...style,
        backgroundColor: undefined, color: undefined,
        height: undefined, width: undefined,
    }}>
        <View style={{display: 'relative'}}>
            <Image src={src} style={{
                height: style.height, width: style.width,
                // position: 'absolute', top: 0, left: 0,
                transform: `scale(${0.98 * (style.scale ?? 1)})`
            }} />
            <RoundedSquareMask style={{
                height: style.height, width: style.width,
                position: 'absolute', top: 0, left: 0,
                color: (style.color ?? '#FFFFFF'),
            }} />

            <Square style={{
                height: style.height, width: style.width,
                position: 'absolute', top: 0, left: 0,
                color: (style.backgroundColor ?? '#FFFFFF'),
                transform: 'scale(0.95)',
                zIndex: -1
            }} />
        </View>
    </View>

)

export default MaskedImage
