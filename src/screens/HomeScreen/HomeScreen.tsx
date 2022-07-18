import { FlatList, ViewabilityConfig, ViewToken } from "react-native";
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';
import { useRef, useState } from "react";

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  // This is where the logic of when an item should be considered visible
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    }
  );

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost isVisible={item.id === activePostId} post={item} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
