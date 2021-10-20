import React from 'react';
import { Page, Text, View, Document, Image, StyleSheet, Link } from '@react-pdf/renderer';

import settings from './settings.js'

const styles = {
  Link: {
    'fontSize': settings.sizeS, 'padding': 2, 'color': 'black', 'textDecoration': 'none'
  },
  Contact: {
    'fontSize': settings.sizeS, 'padding': 2
  }
}


const Title = () => (
  <View style={{flexBox: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

    <Image
      src='./Images/profilePhoto.png'
      style={{
        height: 80, width: 80,
        marginHorizontal: 10
      }}
    />

    <View>
      <Text style={{
        'fontSize': settings.sizeXL,
        'color': settings.primaryColor
      }}>
        Royce Schultz
      </Text>
      {/* Email */}
      <Text style={styles.Contact}>
        royce.schultz@nyu.edu
      </Text>
      {/* Website */}
      <Text style={styles.Contact}>
        <Link src='https://royceschultz.com' style={styles.Link}>
          Website: royceschultz.com
        </Link>
      </Text>
      {/* Social */}
      <Text style={styles.Contact}>
        <Link src='https://github.com/royceschultz' style={styles.Link}>
          GitHub
        </Link>, <Link src='https://www.linkedin.com/in/royceschultz' style={styles.Link}>
          LinkedIn
        </Link>: royceschultz
      </Text>
    </View>
  </View>
)


export default Title;
