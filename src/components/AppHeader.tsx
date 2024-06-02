import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomIcon from './CustomIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

const AppHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.emptyContainer}></View>
            <Text style={styles.headerText}>{props.header}</Text>
            <TouchableOpacity style={styles.iconBG} onPress={() => props.exitFunction()}>
                <CustomIcon name={props.name} color={COLORS.White} size={FONTSIZE.size_24} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SPACING.space_28,
        marginTop: SPACING.space_20,
    },
    emptyContainer: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
        // backgroundColor: COLORS.White
    },
    headerText: {
        flex: 1,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        color: COLORS.White,
    },
    iconBG: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.Orange,
    },
});

export default AppHeader;