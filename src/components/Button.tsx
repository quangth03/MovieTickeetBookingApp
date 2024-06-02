import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

function Button(props): React.JSX.Element {
    const isLoading = props.isLoading || false;
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={props.onPress}>
            {
                isLoading && isLoading == true ? (
                    <ActivityIndicator size='large' color={COLORS.Orange} />) : (
                    <Text style={styles.title} >
                        {props.title}
                    </Text>
                )
            }
        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SPACING.space_36,
        paddingVertical: SPACING.space_10,
        borderColor: COLORS.White,
        borderWidth: 2,
        borderRadius: BORDERRADIUS.radius_15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.Orange
    },
    title: {
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.White
    }
});
export default Button;