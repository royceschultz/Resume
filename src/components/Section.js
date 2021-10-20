import React from 'react';
import { Page, Text, View, Svg, Rect, Document, StyleSheet } from '@react-pdf/renderer';

import Item from './Item.js'

import settings from '../settings.js'

const styles = {
  Title: {
    // 'fontFamily': 'Times-Italic',
    'fontSize': settings.sizeM,
    'color': settings.primaryColor,
    'paddingTop': 3, 'paddingRight': 5
  }
}

const Section = (props) => (
  <View style={{paddingHorizontal: settings.margin}}>

    <View style={{'flex': 1, 'flexDirection': 'row', 'position': 'relative'}}>
      <Text style={styles.Title}>
        {props.title}
      </Text>

      <View style={{ // Breaker Bar (black rectangle)
        'backgroundColor': '#000000', 'height': 1,
        'flexGrow': 1, 'alignSelf': 'flex-end',
        'position': 'relative', 'bottom': 5
      }}>
      </View>
    </View>

    {props.children}
  </View>
)

export default Section;
