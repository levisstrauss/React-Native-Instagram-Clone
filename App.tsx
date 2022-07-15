import {SafeAreaView, StyleSheet} from 'react-native';
import {
  HomeScreen,
  CommentsScreen,
  ProfileScreen,
  EditProfileScreen,
  PostUploadScreen,
} from './src/screens/index';



const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      {/*<HomeScreen />*/}
      {/*<CommentsScreen />*/}
      {/*<ProfileScreen />*/}
      {/*<EditProfileScreen />*/}
      {/*<PostUploadScreen />*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
