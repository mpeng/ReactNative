import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class ChartScreen extends React.Component {
  static navigationOptions = {
    title: 'Big Data Visualization 3',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
