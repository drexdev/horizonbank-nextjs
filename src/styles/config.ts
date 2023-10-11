import { Montserrat } from "next/font/google";

export const Colors = {
  highlight: '#e72640',
  background: {
    normal: '#ffffff',
    primary: 'fffdfd'
  },
  text: {
    normal: '#2e2e2e'
  }
};

export const Font = {
  size: {
    normal: '1rem',
    title: {
      sub: '1.5rem',
      big: '3rem',
      normal: '2.3rem'
    }
  }
}

export const fontDefault = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});