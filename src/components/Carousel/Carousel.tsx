import { FlatList, Image, useWindowDimensions, View } from "react-native";

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}
const Carousel = ({images}: ICarousel) => {

  const {width} = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        )}
        horizontal={true}
        pagingEnabled={true}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0, }}>
          <View
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor: 'red'}}
          />
          <View
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor: 'red'}}
          />
      </View>
    </View>
  );
};


export default Carousel;
