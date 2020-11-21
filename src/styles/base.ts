import {createContext} from 'react';

export enum Colors {
  PRIMARY = 'PRIMARY',
  FONT = 'FONT',
  FONT_SECOND = 'FONT_SECOND',
  MAIN_BG = 'MAIN_BG',
  SECOND_BG = 'SECOND_BG',
  BORDER_COLOR = 'BORDER_COLOR',
  BORDER_SECOND = 'BORDER_SECOND',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  STAR_COLOR = 'STAR_COLOR',
}

export interface ColorsIN {
  PRIMARY: string,
  FONT: string,
  FONT_SECOND: string,
  MAIN_BG: string,
  SECOND_BG: string,
  BORDER_COLOR: string,
  BORDER_SECOND: string,
  ERROR: string,
  SUCCESS: string,
  STAR_COLOR: string,
}

export interface ChangeColorsIN {
  PRIMARY?: string,
  FONT?: string,
  FONT_SECOND?: string,
  MAIN_BG?: string,
  SECOND_BG?: string,
  BORDER_COLOR?: string,
  BORDER_SECOND?: string,
  ERROR?: string,
  SUCCESS?: string,
  STAR_COLOR?: string,
}

export const defaultColors = {
	PRIMARY: '#2A2AC0',
	FONT: '#1C1C1C',
	FONT_SECOND: '#A4A4A4',
	FONT_THIRD: '#181461',
	MAIN_BG: '#ECF1FA',
	SECOND_BG: '#fff',
	BORDER_COLOR: '#181461',
	BORDER_SECOND: '#E7E7E7',
	ERROR: '#F81300',
	SUCCESS: '#2AC052',
	STAR_COLOR: '#F8A200',
};

export const ThemeContext = createContext({
	colors: defaultColors,
	showIntro: false,
	changeColors: (colors: ChangeColorsIN) => {
		console.log(colors)
	},
	hideIntro: () => {
	  console.log('hide intro')
	}
});

export enum TextSize {
  small = 12,
  medium = 14,
  large = 16,
  xlarge = 20,
  extraLarge = 24,
}

export enum TextFamily {
  REGULAR = 'Lato-Regular',
  BOLD = 'Lato-Bold',
  LIGHT = 'Lato-Light',
  BLACK = 'Lato-Black',
}
