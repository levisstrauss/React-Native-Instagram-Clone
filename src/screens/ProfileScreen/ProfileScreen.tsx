import user from '../../assets/data/user.json';
import {ProfileHeader} from '../index';
import {FeedGridView} from '../../components';

const ProfileScreen = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
