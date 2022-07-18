import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Posting the comment', newComment);
    setNewComment('');
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Write your comment..."
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    // height: 70,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 2,
    marginRight: 5,
    marginBottom: 12,
  },
  button: {
    position: 'absolute',
    right: 25,
    bottom: 23,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
    marginBottom: 5,

  },
});
export default Input;
