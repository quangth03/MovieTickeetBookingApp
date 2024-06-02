import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

function SubMovieCard(props): React.JSX.Element {
    return (
        <TouchableOpacity onPress={() => props.cardFunction()}>
            <View
                style={[
                    styles.container,
                    props.shoudlMarginatedAtEnd
                        ? props.isFirst
                            ? { marginLeft: SPACING.space_32 }
                            : props.isLast
                                ? { marginRight: SPACING.space_32 }
                                : {}
                        : {},
                    props.shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
                    { maxWidth: props.cardWidth },
                ]}>
                <Image
                    style={[styles.cardImage, { width: props.cardWidth }]}
                    source={{ uri: props.imagePath }}
                />
                <Text numberOfLines={1} style={styles.textTitle}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Black,
    },

    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20,
    },

    textTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
        textAlign: 'center',
        paddingVertical: SPACING.space_10,
    },
});
export default SubMovieCard;