import {useEffect, useState, useRef} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Camera} from 'expo-camera';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import {FlashMode} from 'expo-camera/build/Camera.types';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  const flipCamera = () => {
    setCameraType((currentCameraType: any) =>
      currentCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }
    const result = await camera.current.takePictureAsync();
  };

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermissions === false) {
    return <Text>No Access to the camera</Text>;
  }
  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonsContainer, {top: 10}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 10}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />

        {isCameraReady && (
          <Pressable onPress={takePicture}>
            <View style={styles.circle} />
          </Pressable>
        )}

        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;
