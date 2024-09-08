import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you install the vector icons

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Home Page Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to My App!</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Example image
          style={styles.image}
        />
        <Text style={styles.description}>
          This is the home page with some content and a navbar at the bottom.
        </Text>
        <Button title="Press Me" onPress={() => alert('Button Pressed!')} />
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={30} color="#4F8EF7" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search-outline" size={30} color="#4F8EF7" />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="settings-outline" size={30} color="#4F8EF7" />
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={30} color="#4F8EF7" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});