
This project is an Instagram clone mobile application developed with React Native cli

================== ENVIRONMENT SET UP =========================

        - Install Brew 
        - brew -version
        - brew install node, yarn or npm, watcham, git if not install already
        - yarn add golbal expo-cli - expo --version - expo whoami - expo register - expo login
        - Install Xcode -> set up the command line -> download the simulator of Xcode
        - install Ruby  -> brew install ruby
        - Install cocoapoads in this directory -> sudo gem install -n /usr/local/bin ffi cocoapods - pod --version

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
==================  Vectors Icons ====================    

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


================= Building the App ====================

      - FeedPost
      - Comment
      - HomeScreen

================= Tricks ====================

      - Anytime we need to reuse something for more than one,
        we definitly need to create a component for it.
      
     - State
       - if you want to update the value of the state setState(true)
       - if the update value depends of the existing one
            setState( existingValue => !existingValue)
          


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