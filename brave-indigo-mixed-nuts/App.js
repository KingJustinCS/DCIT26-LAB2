import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import photo from './photo.jpeg'; // ✅ your picture here

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>STUDENT PROFILE</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>King Justin Baroro</Text>
          <Text style={styles.infoText}>Age: 22</Text>
          <Text style={styles.infoText}>Course/Year/Section: BSCS / 3rd Year / 3-3</Text>
        </View>

        <Image source={photo} style={styles.profileImage} />
      </View>
      <View style={styles.separator} />

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          Currently a 3rd year Computer Science Student at Cavite State University - Main Campus.
          Hoping to graduate on time and sana mababy ng nursing student huhu.
        </Text>
      </View>

      {/* Schools Attended */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schools Attended</Text>
        <Text style={styles.sectionContent}>• Cavite State University - Main Campus (College)</Text>
        <Text style={styles.sectionContent}>• Philippine Christian University - Dasmariñas ( Senior High School)</Text>
        <Text style={styles.sectionContent}>• Santiago National High School ( Junior High School)</Text>
        <Text style={styles.sectionContent}>• St. Edward Integrated School(Elementary)</Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <Text style={styles.sectionContent}>• Mag Yearn</Text>
        <Text style={styles.sectionContent}>• Dean's Lister 2024 - 2025</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {['Figma', 'React', 'Python', 'HTML/CSS', 'Java'].map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3f2fd',
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
    color: '#0D47A1',
  },

  /* ✅ Profile Section Layout */
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0D47A1',
  },

  infoText: {
    fontSize: 16,
    color: '#3B3B3B',
    marginTop: 5,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#415A77',
    marginLeft: 30,
  },

  separator: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 15,
  },

  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 5,
  },

  sectionContent: {
    fontSize: 16,
    color: '#3B3B3B',
    lineHeight: 22,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  skillBadge: {
    backgroundColor: '#1976d2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },

  skillText: {
    color: '#F5F0E6',
    fontSize: 14,
  },
});
