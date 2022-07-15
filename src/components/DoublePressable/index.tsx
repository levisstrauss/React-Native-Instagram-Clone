import React, { ReactNode } from "react";
import {Pressable, View, Text} from 'react-native';


interface IDoublePressable {
   onDoublePress?: () => void;
   children: ReactNode;
}
const DoublePressable = ({onDoublePress = () => {}, children}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();  // timestamp
    if(now - lastTap < 300){
      onDoublePress();
    }
    lastTap = now;
  }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  );
};
export default DoublePressable;