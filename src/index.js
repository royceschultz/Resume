import React from 'react'
import { Page, Document, Font } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'

import Content from './Content.js'
import settings from './Settings.js'

import SetUpFonts from './fontConfig.js'

SetUpFonts()

// Disable Hyphenation
Font.registerHyphenationCallback(word => [word]);

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="letter" style={{
      backgroundColor: '#FFFFFF', fontFamily: settings.fontFamily
    }}>
      <Content />
    </Page>
  </Document>
)

ReactPDF.render(<MyDocument />, `${__dirname}/index.pdf`)
