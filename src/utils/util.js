import {LayoutAnimation} from 'react-native';

export const setAnimation = update => {
  LayoutAnimation.configureNext({
    duration: update,
    update: {
      type: LayoutAnimation.Types.easeIn,
      springDamping: 0.7,
    },
  });
  LayoutAnimation.configureNext({
    duration: update,
    create: {
      type: LayoutAnimation.Types.easeIn,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
  });
};
