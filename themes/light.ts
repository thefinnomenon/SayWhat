import { Theme } from '../types';

const light: Theme = {
  theme: {
    nav: {
      background: '#f8f8f8',
      tintColor: '#000',
      activeTintColor: '#000',
      inactiveTintColor: '#a9a9a9',
      borderColor: '#e0e0e0',
      borderWidth: 1,
      titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    colors: {
      background: '#fff',
      primary: '#50b7ff',
      secondary: '#5c8bad',
      border: '#e8e8e8',
      backgroundAlt: '#fff',
      borderAlt: '#bdbdbd',
      text: '#202020',
      textAlt: '#999',
    },
  },
};

export default light;
