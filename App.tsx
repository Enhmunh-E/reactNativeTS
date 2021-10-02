/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactChild } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type BackgroundStyles = {
  children: ReactChild | ReactChild[];
  height?: number | string;
  width?: number | string;
  color?: string;
  url: string;
  opacity?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat';
  overflow?: 'hidden' | 'scroll' | 'visible' | undefined;
}

const Background: React.FC<BackgroundStyles> = ({ height="auto", width="auto", color, url, opacity=1, resizeMode="cover", overflow="hidden", children }) => {
  return (
    <ImageBackground source={{ uri: url }} resizeMode={resizeMode}  style={{
      height,
      width,
      backgroundColor: color,
      opacity,
      overflow,
    }} >
      {children}
    </ImageBackground>
  );
};
type QueueStyles = {
  children: ReactChild | ReactChild[],
  gap: number
}
const Queue: React.FC<QueueStyles> = ({ gap, children }) => {
  return (
    <View style={[{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    }]}>
      {
        React.Children.map(children, (child) => (
          <View style={{marginHorizontal: gap}}>
            {child}
          </View>
        ))
      }
    </View>
  );
};
type StackStyles = {
  children: ReactChild | ReactChild[],
  gap: number
}
const Stack: React.FC<StackStyles> = ({ gap=0 , children }) => {
  return (
    <View style={[{
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap'
    }]}>
      {
        React.Children.map(children, (child) => (
          <View style={{marginVertical: gap}}>
            {child}
          </View>
        ))
      }
    </View>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.flex1]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
        {/* <Margin top={200} right={'small'} left={'big'} bottom={'big'}>
          <Text>Hello</Text>
        </Margin>
        <Padding top={100}>
          <Text>Hello2</Text>
        </Padding> */}
        <Background width={'100%'} height={'100%'} color="red" url="https://wallpaperaccess.com/full/187161.jpg" opacity={1} resizeMode="contain">
          <Text>Background</Text>
        </Background>
        {/* <Queue gap={10}>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
        </Queue> */}
        {/* <Stack gap={10}>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
            <Image source={{uri: 'https://wallpaperaccess.com/full/187161.jpg'}} style={{width: 100, height: 100}}/>
        </Stack> */}
    </SafeAreaView>
  );
};

export default App;
const marginSizes = {
  'small': 20,
  'big': 60,
  'medium': 40,
}
const paddingSizes = {
  'small': 20,
  'big': 60,
  'medium': 40,
}
type Props = {
  top?: keyof typeof marginSizes | number; 
  right?: keyof typeof marginSizes | number; 
  left?: keyof typeof marginSizes | number; 
  bottom?: keyof typeof marginSizes | number;
  children: ReactChild | ReactChild[];
}
type Styles = {
  top?: keyof typeof marginSizes | number; 
  right?: keyof typeof marginSizes | number; 
  left?: keyof typeof marginSizes | number; 
  bottom?: keyof typeof marginSizes | number;
}
const marginStyle = (props: Styles) => {
  let { top=0, right=0, left=0, bottom=0 } = props;
  if (typeof top == 'string') top = marginSizes[top];
  if (typeof right == 'string') right = marginSizes[right];
  if (typeof left == 'string') left = marginSizes[left];
  if (typeof bottom == 'string') bottom = marginSizes[bottom];
  return {
    marginTop: top,
    marginLeft: left,
    marginBottom: bottom,
    marginRight: right,
  }
}
const Margin: React.FC<Props> = ({ top, right, left, bottom, children }) => {
  const style = marginStyle({ top, right, left, bottom });
  return (
    <View style={style}>
      {children}
    </View>
  );
};
const paddingStyle = (props: Styles) => {
  let { top=0, right=0, left=0, bottom=0 } = props;
  if (typeof top == 'string') top = paddingSizes[top];
  if (typeof right == 'string') right = paddingSizes[right];
  if (typeof left == 'string') left = paddingSizes[left];
  if (typeof bottom == 'string') bottom = paddingSizes[bottom];
  return {
    paddingTop: top,
    paddingLeft: left,
    paddingBottom: bottom,
    paddingRight: right,
  }
}
const Padding: React.FC<Props> = ({ top, right, left, bottom, children }) => {
  const style = paddingStyle({ top, right, left, bottom });
  return (
    <View style={style}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  }
});