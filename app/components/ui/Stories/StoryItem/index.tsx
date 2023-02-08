import {View, Text, Pressable, ImageBackground} from 'react-native';
import {IStory} from '../types';
import {FC} from 'react';
import styles from './styles';

const StoryItem: FC<{story: IStory}> = ({story}) => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: story.images[0]}}
          resizeMode={'cover'}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <Text style={styles.heading}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;
