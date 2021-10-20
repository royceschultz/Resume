import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';

import settings from '../settings.js'

const styles = {
  Icon: {
    height: 23, width: 23,
    position: 'absolute',
    top: 7,
    left: 0,
    display: 'inline',
  },
  Title: {
    'fontSize': settings.sizeM,
    'flexGrow': 1
  },
  Subtitle: {
    'fontFamily': 'Times-Italic', // Font weight not supported for default font
    'fontSize': settings.sizeS,
  },
  Note: {
    'fontSize': settings.sizeS,
    'color': settings.primaryColor,
    'alignSelf': 'flex-end',
  },
  DescriptionWrapper: {'paddingLeft': 0.66 * settings.defaultIndent, paddingTop: 1},
  DescriptionPoint: {fontSize: settings.sizeS},
}

const Item = (props) => (
  <View style={{paddingLeft: settings.defaultIndent, paddingVertical: 4}}>
    {props.Icon?
      <Image
        src={props.Icon}
        style={styles.Icon}
      />
    :null}

    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.Title}>
        {props.Title}
      </Text>

      {props.Note?
        <Text style={styles.Note}>
          {props.Note}
        </Text>
      :null}

    </View>

    {props.Subtitle?
      <Text style={styles.Subtitle}>
        {props.Subtitle}
      </Text>
    :null}

    {props.Description?
      <View style={styles.DescriptionWrapper}>
        {props.Description.map((point) => (
          <Text key={point} style={styles.DescriptionPoint}>
            {point}
          </Text>
        ))}
      </View>
    :null}

  </View>
)

export default Item;
