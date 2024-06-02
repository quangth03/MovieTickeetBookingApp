import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import { baseImagePath, searchMovies } from '../api/apicalls';
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';

const { width, height } = Dimensions.get('window');

function SearchScreen({ navigation }): React.JSX.Element {
    const [searchList, setSearchList] = useState([]);

    const searchMoviesFunction = async (name) => {
        try {
            let response = await fetch(searchMovies(name));
            let json = await response.json();
            setSearchList(json.results)
        } catch (error) {
            console.error(
                ' Something went wrong in searchMoviesFunction',
                error,
            );
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={searchList}
                keyExtractor={(item) => item.id}
                bounces={false}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{ marginBottom: SPACING.space_18 }}>
                        <InputHeader searchFunction={searchMoviesFunction} />
                    </View >}
                renderItem={({ item, index }) => (
                    <SubMovieCard
                        shouldMarginatedAround={true}
                        cardFunction={() => {
                            navigation.push('MovieDetails', { movieid: item.id });
                        }}
                        cardWidth={width / 2 - SPACING.space_12 * 2}
                        title={item.original_title}
                        imagePath={baseImagePath('w342', item.poster_path)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Black,
    },
});

export default SearchScreen;
