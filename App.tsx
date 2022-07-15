import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 35,
  },
});

export default App;
