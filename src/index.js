import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import Title from './Title.js';
import Section from './components/Section.js'
import Item from './components/Item.js'
import LineItem from './components/LineItem.js'

import settings from './settings.js'

// Disable Hyphenation
Font.registerHyphenationCallback(word => [word]);

const styles = {
  Page: {
    'fontFamily': 'Times-Roman',
    'paddingHorizontal': '1in', 'paddingVertical': '0.5in'
  }
}

const MyDocument = () => (
  <Document>
    <Page size='letter' style={styles.Page}>
      <Title/>
      <Text style={{'fontSize': settings.sizeS, 'fontFamily': 'Times-Italic', 'textAlign': 'center', 'marginHorizontal': 0, 'marginTop': 5}}>
        I am a graduate student seeking a software internship for Summer 2022. I will receive my Master's degree in computer science in December 2022 and seek a full-time position starting January 2023. I am looking to join a highly collaborative team working on innovative projects.
      </Text>
      <Section title='Education'>
        <Item
          Title='New York University'
          Note='Graduating December 2022'
          Subtitle='Pursuing a M.S. in Computer Science'
          Icon='./Images/nyu.png'
        />
        <Item
          Title='University of Colorado, Boulder'
          Note='Graduated May 2021'
          Subtitle='B.S. Computer Science, Minor Applied Mathematics, GPA 3.5'
          Description={[
            'Favorite Classes: Big Data Architecture, Machine Learning, Natural Language Processing, Advanced Data Science, Computer Vision, Numerical Analysis, Robotics'
          ]}
          Icon='./Images/cu.png'
        />
      </Section>

      <Section title='Relevant Experience'>

        <Item
          Title="University Finance Lab"
          Subtitle='Research Assistant, Machine Learning'
          Note='September 2020 - May 2021'
          Description={[
            'Parsed data from 60,000 scanned financial texts using a custom trained AI vision model.',
            'Created a data pipeline to gather and clean over 100,000 TV News transcripts.',
            'Built distributed data infrastructure to support collaboration for remote developers.',
            'Used containers to support many different runtime environments.'
          ]}
          Icon='./Images/cu.png'
        />
        <Item
          Title='Amazon'
          Subtitle='Software Engineering Intern'
          Note='May 2020 - July 2020'
          Description={[
            'Used cloud services to deploy a web portal to solve data needs and privacy concerns.',
            'Wrote efficient algorithms to detect erroneous metrics in a massive data warehouse.',
            'Supported continuous integration using automated deployment pipelines and unit tests.'
          ]}
          Icon='./Images/amazon.png'
        />

      </Section>

      <Section title='Other Experience'>
        <Item
          Title='University Math Department'
          Subtitle='Exam Proctor'
          Note='Fall 2021'
          Description={[
            'Assisted professors in administering exams for hundreds of students.'
          ]}
          Icon='./Images/nyu.png'
        />

        <Item
          Title='Chipotle'
          Subtitle='Line Cook'
          Note='Summer 2021'
          Description={[
            'Cooked food for over one hundred customers per hour.',
          ]}
          Icon='./Images/chipotle.png'
        />

        <Item
          Title='University Math Resource Center'
          Subtitle='Math Tutor'
          Note='Fall 2019 - Spring 2020'
          Description={[
            'Encouraged students to use their analytical thinking skills to solve math problems.',
            'Held regular office hours, aiding dozens of students each week.'
          ]}
          Icon='./Images/cu.png'
        />
      </Section>

      <Section title='Technical Skills'>
        <LineItem Title='Languages' Line="Python, JavaScript, Bash, C, C++, SQL, MatLab, Scala"/>
        <LineItem Title='Tools' Line="Git, Docker, Linux, AWS Cloud Computing, Distributed Systems, Arduino"/>
        <LineItem Title='Services' Line="NginX, MongoDB, Elasticsearch, Kibana, Home Assistant, Jellyfin, Minio"/>
      </Section>

    </Page>
  </Document>
);

ReactPDF.render(<MyDocument />, `${__dirname}/resume.pdf`);
