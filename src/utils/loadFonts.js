import * as Font from 'expo-font';

export default () => 
    Font.loadAsync({
        'nunito-black': require('../../assets/fonts/Nunito-Black.ttf'),
        'nunito-blackitalic': require('../../assets/fonts/Nunito-BlackItalic.ttf'),
        'nunito-bold': require('../../assets/fonts/Nunito-Bold.ttf'),
        'nunito-bolditalic': require('../../assets/fonts/Nunito-BoldItalic.ttf'),
        'nunito-extrabold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
        'nunito-extrabolditalic': require('../../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
        'nunito-extralight': require('../../assets/fonts/Nunito-ExtraLight.ttf'),
        'nunito-extralightitalic': require('../../assets/fonts/Nunito-ExtraLightItalic.ttf'),
        'nunito-italic': require('../../assets/fonts/Nunito-Italic.ttf'),
        'nunito-light': require('../../assets/fonts/Nunito-Light.ttf'),
        'nunito-lightitalic': require('../../assets/fonts/Nunito-LightItalic.ttf'),
        'subtitle': require('../../assets/fonts/Nunito-Medium.ttf'),
        'nunito-mediumitalic': require('../../assets/fonts/Nunito-MediumItalic.ttf'),
        'nunito-regular': require('../../assets/fonts/Nunito-Regular.ttf'),
        'nunito-semibold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
        'nunito-semibolditalic': require('../../assets/fonts/Nunito-SemiBoldItalic.ttf'),
    })