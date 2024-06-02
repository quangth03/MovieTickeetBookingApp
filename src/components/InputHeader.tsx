import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import CustomIcon from './CustomIcon';

import { COLORS, SPACING, BORDERRADIUS, FONTSIZE, FONTFAMILY } from '../theme/theme';

function InputHeader(props): React.JSX.Element {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.inputBox}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                placeholder="Search your Movies..."
                placeholderTextColor={COLORS.WhiteRGBA32} />
            <TouchableOpacity onPress={() => props.searchFunction(searchText)}>
                <CustomIcon name='search' color={COLORS.Orange} size={FONTSIZE.size_20} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputBox: {
        marginTop: SPACING.space_10,
        marginHorizontal: SPACING.space_36,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.space_24,
        // paddingVertical: SPACING.space_8,
        paddingTop: 3,
    },

    textInput: {
        flex: 9,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
});
export default InputHeader;