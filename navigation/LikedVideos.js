import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const LikedVideos = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Videos
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default LikedVideos;
