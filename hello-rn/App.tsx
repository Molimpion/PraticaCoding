import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const profileImage = require('./assets/Profile icon.jpg');

export default function App() {
  return (
    <ScrollView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.header}>
          <Text style={styles.brand}>Olimpio</Text>
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.mainHello}>Hello, I'm</Text>
          <Text style={styles.mainName}>Manoel Olímpio</Text>
          <Text style={styles.mainTitle}>Back-end Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.paragraph}>
            📌 I'm a 24-year-old from Pernambuco, Brazil, currently pursuing a degree in Systems Analysis and Development at SENAC PE via the Embarque Digital program.
          </Text>
          <Text style={styles.paragraph}>
            👾 Fan of games and geek culture, including manga and manhwa.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Journey</Text>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>SENAC Pernambuco</Text>
            <Text>Course: Systems Analysis and Development</Text>
            <Text>Period: 2nd Semester (Morning) — 2024.2 to 2027.1</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Instituto Aliança</Text>
            <Text>Program: Digital Mastery 4.0 — University Extension</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Rocketseat</Text>
            <Text>Track: Full Stack Development Training Program (Ongoing)</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages & Tools</Text>
          <Text style={styles.paragraph}>
            Languages: HTML5, JavaScript, CSS3, Python, Java, MySQL, TypeScript
          </Text>
          <Text style={styles.paragraph}>
            Tools: GitHub, Figma, Git, Node.js, Trello, React, Canva, Bootstrap
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.paragraph}>Address: Recife, Pernambuco</Text>
          <Text style={styles.paragraph}>Phone: (81)99981-3039</Text>
          <Text style={styles.paragraph}>Email: olimpiommelo@gmail.com</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Manoel Olímpio</Text>
          <Text style={styles.footerText}>Copyright @2025. All Rights Reserved.</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#012E40',
  },
  mainSection: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  mainHello: {
    fontSize: 24,
  },
  mainName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#037373',
  },
  mainTitle: {
    fontSize: 22,
    color: '#333',
    marginTop: 5,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#012E40',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#037373',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
  },
});