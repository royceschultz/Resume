import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import settings from '../settings.js'

const LineItem = (props) => (
  <View style={{paddingLeft: settings.defaultIndent}}>
    <Text style={{fontSize: settings.sizeS}}>
      <Text style={{'fontFamily': 'Times-Italic'}}>
        {props.Title + ': '}
      </Text>
      {props.Line}
    </Text>
  </View>
)

export default LineItem;
