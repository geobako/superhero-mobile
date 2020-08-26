import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const DummyText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum nibh. Phasellus sollicitudin, nibh quis finibus egestas, est
        tortor porttitor metus, eget tincidunt tortor orci in ex. Donec ante
        lorem, rutrum eget mi in, iaculis molestie quam. Nullam non lorem augue.
        Nullam malesuada et quam ut mollis. Quisque ut ante sodales, interdum
        lacus vitae, hendrerit mauris. In blandit eu dolor eu tincidunt. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Maecenas tempus nulla diam, vitae lacinia lectus
        interdum sit amet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    color: '#787777',
  },
});

export default DummyText;
