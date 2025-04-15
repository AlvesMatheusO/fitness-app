import React, { useContext } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

import { ThemeContext } from '../../../contexts/ui/ThemeContext';
import { lightTheme, darkTheme } from '../../theme/theme';

export default function HomeScreen() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
            <Text>This is home.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})