import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

function Input(props): React.JSX.Element {
    const onChangeText = (text) => {
        props.onInputChanged(props.id, text);
    }
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, { borderColor: COLORS.Grey }]}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={onChangeText} />

            </View>
            {
                props.errorText && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{props.errorText[0]}</Text>
                    </View>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: SPACING.space_10,
        paddingVertical: SPACING.space_10,
        borderRadius: 12,
        borderBottomWidth: 1,
        borderBlockColor: 'grey',
        marginVertical: 16,
        flexDirection: 'row'
    },
    input: {
        color: 'grey',
        flex: 1,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_18,
        paddingTop: 0
    },
    errrorContainer: {
        marginVertical: 4,
    },
    errorText: {
        color: "red",
        fontSize: FONTSIZE.size_12
    }
});
export default Input;