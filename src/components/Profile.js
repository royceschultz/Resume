import React from 'react'
import MaskedImage from './MaskedImage'

export const ProfilePhoto = (props) => (
    <MaskedImage src='./assets/profilePhoto.png' style={{
        height: (props.size ?? 100), width: (props.size ?? 100),
        marginHorizontal: 10,
        ...(props.style ?? {})
      }}/>
)
