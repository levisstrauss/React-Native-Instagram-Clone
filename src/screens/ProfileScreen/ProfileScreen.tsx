import user from '../../assets/data/user.json';
import FeedGridView from "../../components/FeedGridView/FeedGridView";
import ProfileHeader from "./ProfileHeader";
import {useRoute, useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userid = route.params?.userId;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
