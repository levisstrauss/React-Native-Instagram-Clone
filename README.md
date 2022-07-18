
This project is an Instagram clone mobile application developed with React Native cli
react-native start
react-native run-ios or react-native run-ios --simulator="iPhone 13 Pro Max"
npx pod-install ios
================== ENVIRONMENT SET UP =========================

        - Install Brew 
        - brew -version
        - brew install node, yarn or npm, watcham, git if not install already
        - yarn add golbal expo-cli - expo --version - expo whoami - expo register - expo login
        - Install Xcode -> set up the command line -> download the simulator of Xcode
        - install Ruby  -> brew install ruby
        - Install cocoapoads in this directory -> sudo gem install -n /usr/local/bin ffi cocoapods - pod --version

        - if we want to run the app on IOS just open the IOS folder in Xcode
        - To run the different simulator: react-native run-ios --simulator="iPhone 13 Pro Max"
        - To start the server: react-native start

========= Create a react native cli project =============== 

        Initialize the project
        npx react-native init InstagramPrepTS --template react-native-template-typescript
        CLI Commands
        start development server
        $ npm start
        start a clean, fresh development server by resetting the cache
        yarn start -- --reset-cache

        run the app on an android device/emulator
        yarn run android

        Install Pods (macOS users only)
        npx pod-install ios 

        run the app on an iOS device/simulator
        npm run ios

        Configuration of babel.config.js this will allows you to not import 
        react all the time.
        module.exports = {
        presets: [
          [
            'module:metro-react-native-babel-preset',
            {useTransformReactJSXExperimental: true},
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
        ],
        };


       For both templates, we can refer to this description

        CLI Commands

        start development server
        npm or yarn start

        start a clean, fresh development server by resetting the cache
        npm or yarn start -- --reset-cache
        
        Install Pods (macOS users only)
        npx pod-install ios
        
        run the app on an android device/emulator
        run the app on an iOS device/simulator
        Run instructions for Android:
        • Have an Android emulator running (quickest way to get started), or a device connected.
        • cd "/Users/Admin/Desktop/projects/Instagram" && npx react-native run-android

        Run instructions for iOS:
          • cd "/Users/Admin/Desktop/projects/Instagram" && npx react-native run-ios
          - or -
          • Open Instagram/ios/Instagram.xcworkspace in Xcode or run "xed -b ios"
          • Hit the Run button



        NB: For the windowns systems, it is pretty much the same thing. Install all the requires dependencies
            For the REACT-NATIVE CLI, follow the recommedation on the reactnative.dev website
==================  Git Commands ====================

    - rm -rf .git*  => Completly remove git from a project
    - git init      => Add git
    - git remote add origin https://url
    - git status
    - git add .
    - git commit -m "Message"
    - git push origin master
    - git branch -M branch name 
    - git pull => to fetch all the changes

    Branching:

    git checkout main
    git fetch origin
    git reset --hard origin/main
    
    Create
    git checkout -b new-feature
    
    Update
    git status
    git add <some-file>
    git commit
    
    Push
    git push -u origin new-feature
==================  Project Structures  ====================

      - App.tsx represents the entry point of the application

      - Instagram -> the project folder
           _android
           -ios
           - src
              |_assets
              |_components
              |_screens
              |_theme
              |_types
           - App.tsx
           - babel.config.js
           - app.json
           - Readme
           - index.js
           -......
==================  Vectors Icons ==========================   

    ----------- Installation ---------------
    npm or yarn add react-native-vector-icons
    npm or yarn add  @types/react-native-vector-icons

    React native vector icon github website
    https://github.com/oblador/react-native-vector-icons#option-manually

    All the beautiful vector Icon use website
    https://oblador.github.io/react-native-vector-icons/

    ----------- Configurations ---------------
          ------------ IOS-------------
    We have to configure IOS by copying the icon array inside of:
    IOS folder => Instagram => info.plist => Paste right before closing the dictionary

        <key>UIAppFonts</key>
            <array>
              <string>AntDesign.ttf</string>
              <string>Entypo.ttf</string>
              <string>EvilIcons.ttf</string>
              <string>Feather.ttf</string>
              <string>FontAwesome.ttf</string>
              <string>FontAwesome5_Brands.ttf</string>
              <string>FontAwesome5_Regular.ttf</string>
              <string>FontAwesome5_Solid.ttf</string>
              <string>Foundation.ttf</string>
              <string>Ionicons.ttf</string>
              <string>MaterialIcons.ttf</string>
              <string>MaterialCommunityIcons.ttf</string>
              <string>SimpleLineIcons.ttf</string>
              <string>Octicons.ttf</string>
              <string>Zocial.ttf</string>
              <string>Fontisto.ttf</string>
            </array>

        ------------ Android -------------

    Android folder => app => build.gradle
    Add this: 
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

    The image picker library for IOS in the plist info file
    <key>NSPhotoLibraryUsageDescription</key>
    <string>Photo library permission is needed to change the avatar</string>

================= Building the App ==========================

      - FeedPost
      - Comment
      ...........
      - HomeScreen

      - EditProfileScreen has been possible with the use of react hook form.

        For the image picker: library called: react-native-image-picker
        URL: https://github.com/react-native-image-picker/react-native-image-picker
        Follow the description: in Android nothing is needed by IOS make some change inside of info.plist file

        <key>NSPhotoLibraryUsageDescription</key>
        <string>Photo library permission is required to change the avatar</string>
 
     -PostUploadScreen
      The library needed is react-native-camera
      docs URL: https://docs.expo.dev/versions/latest/sdk/camera/
      Installing the expo module: https://docs.expo.dev/bare/installing-expo-modules/
      Run the App on device: https://reactnative.dev/docs/running-on-device

      - React-Navigation

        Installation
        Let's install and setup the Core library:

        1. Install the core library and the dependencies

        yarn add @react-navigation/native react-native-screens react-native-safe-area-context

        2. Install ios native dependencies (for macOS only)

        npx pod-install ios

        3. Extra step for react-native-screens

        import android.os.Bundle;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        }
       4. Setup Navigation Container
        Resources
        React Navigation: https://reactnavigation.org/
        Getting started guide: https://reactnavigation.org/docs/getting-started

      NB: For the react native screen top work properly we have to go inside of:
      Android => app => main => java => MainActivity and override this method
        
        @Override
        protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        }
      And then import the bundle 
      import android.os.Bundle;

      - Stack Navigator

        Stack Navigator
        Let's focus on 2 screens Feed and ProfileScreen.
        
        install stack navigator
        
        yarn add @react-navigation/native-stack
        Create the Navigation Stack
        
        import { createNativeStackNavigator } from '@react-navigation/native-stack';
        
        const Stack = createNativeStackNavigator();
        
        ...
        <Stack.Navigator>
        <Stack.Screen name="Feed" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        ...
        With options property on the Stack.Screen component, we can adjust a lot of things regarding the look and functionality of that screen. For example, using headerShown: false we can hide the header of that specific screen. With title we can override the title of the screen.
        
        If you want to add a set of options to all of the screens in the Navigator, then you can pass them to the screenOptions property to the Stack.Navigator component. The Stack.Navigator can also receive a prop initialRouteName
        
        Stack.Group groups a set of Screens with the purpose to apply screenOptions to all of them.
        
        Custom Header: Download and add the logo.png to the assets/images. Render the logo in an image component, and send it to the headerTitle option of the Feed Screen.
        
        Resources
        More information about the Stack Navigator can be found in the official docs https://reactnavigation.org/docs/native-stack-navigator
      
================= Adding video to react native ================

      - yarn add react-native-video    // Install the library
      - yarn add --save-dev @types/react-native-video // Inatall the type
      - npx pod-install // to install all dependencies and then restart the App
      
      If a problem appear while playing the video check here:
      https://github.com/react-native-video/react-native-video/issues/2468
      Also, make sure to add https for the video links for IOS



================= Tricks and problems sections ====================

      - Anytime we need to reuse something for more than one,
        we definitly need to create a component for it.
      
     - State
       - if you want to update the value of the state setState(true)
       - if the update value depends of the existing one
            setState( existingValue => !existingValue)

     ------------------------------------------------------
    In case the first letter ion the website url is capitalize,
    This is how we fix it:
    For that you need to make the properties of the TextInput available in the CustomInput.
    Extend the ICustomInput interface like so:
    interface ICustomInput extends TextInputProps {...}
    Then, destruct all the missing properties in the CustomInput declaration with "...rest":
    const CustomInput = ({
    label,
    multiline,
    control,
    name,
    rules = {},
    ...rest
    }: ICustomInput) => {...}
    
    Last step is to provide the properties from the "...rest" to the TextInput inside the CustomInput:
    < TextInput
    {...rest}
    value={value}
    onChangeText={onChange}
    ... / >
    
    Now you can use all the properties available at TextInput in the CustomInput component:
    < CustomInput
    autoCapitalize="none"
    label="Website"
    name="website"
    ... / >
          


================= Templates ====================

    import {View, Text} from 'react-native';
    const Comment = () => {
    return (
    <View>
    <Text>Hello</Text>
    </View>
    );
    };
    export default Comment;

     4.6 Type checking with TypeScript video 6