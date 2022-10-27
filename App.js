import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import PhotoEditor from 'react-native-photo-editor';
//var ImagePicker = require('react-native-image-picker');
const App = () => {
  const picker = () => {
    // const options = {
    //   quality: 1.0,
    //   maxWidth: 500,
    //   maxHeight: 500,
    //   cropping: true,
    // };
    // await ImagePicker.launchImageLibrary(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled photo picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     let path = response.assets[0].uri.slice(6);
    //     console.log(path, 'Image path');

    //     PhotoEditor.Edit({
    //       path: path,
    //       onDone: async res => {
    //         console.log('On Done image edited', res);

    //         setEditedImage(path);
    //       },
    //       onCancel: res => {
    //         console.log('On cancel ', res);
    //       },
    //     });
    //   }
    // });

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      let path = image.path.slice(7);
      console.log(path);
      PhotoEditor.Edit({
        path: Platform.OS == 'android' ? path : image.path,
      });
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text onPress={() => picker()}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
