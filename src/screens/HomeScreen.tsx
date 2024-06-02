import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, FlatList, Text } from 'react-native';
import { nowPlayingMovies, popularMovies, upcomingMovies, baseImagePath } from '../api/apicalls';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }): React.JSX.Element {
    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState(undefined);
    const [popularMoviesList, setPopularMoviesList] = useState(undefined);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState(undefined);

    const getNowPlayingMoviesList = async () => {
        try {
            let response = await fetch(nowPlayingMovies);
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(
                ' Something went wrong in getNowPlayingMoviesList Function',
                error,
            );
        }
    };

    const getPopularMoviesList = async () => {
        try {
            let response = await fetch(popularMovies);
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(
                ' Something went wrong in getPopularMoviesList Function',
                error,
            );
        }

    };

    const getUpcomingMoviesList = async () => {
        try {
            let response = await fetch(upcomingMovies);
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(
                ' Something went wrong in getUpcomingMoviesList Function',
                error,
            );
        }
    };
    // console.log(popularMovies)
    useEffect(() => {
        (async () => {
            let tempNowPlaying = await getNowPlayingMoviesList();
            setNowPlayingMoviesList([
                { id: 'dummy1' },
                ...tempNowPlaying.results,
                { id: 'dummy2' },
            ]);

            let tempPopular = await getPopularMoviesList();
            setPopularMoviesList(tempPopular.results);

            let tempUpcoming = await getUpcomingMoviesList();
            setUpcomingMoviesList(tempUpcoming.results);
        })();
    }, []);

    if (
        nowPlayingMoviesList == undefined && nowPlayingMoviesList == null &&
        popularMoviesList == undefined && popularMoviesList == null &&
        upcomingMoviesList == undefined && upcomingMoviesList == null
    ) {
        return (
            <ScrollView
                style={styles.container}
                bounces={false}
                contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={COLORS.Orange} />
                </View>
            </ScrollView>
        );
    }

    return (
        <ScrollView
            style={styles.container}
            bounces={false}
        // showsVerticalScrollIndicator={true}
        >
            <Text style={styles.title}>Movie Ticket Booking Application</Text>
            <CategoryHeader title={'Now Playing'} />
            <FlatList
                data={nowPlayingMoviesList}
                keyExtractor={(item) => item.id}
                bounces={false}
                snapToInterval={width * 0.7 + SPACING.space_36}
                horizontal
                // showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                contentContainerStyle={styles.containerGap36}
                renderItem={({ item, index }) => {
                    if (!item.original_title) {
                        return (
                            <View
                                style={{ width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2, }}>
                            </View>
                        );
                    }
                    return (
                        <MovieCard
                            shoudlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id });
                            }}
                            cardWidth={width * 0.7}
                            isFirst={index == 0 ? true : false}
                            isLast={index == nowPlayingMoviesList.length - 1 ? true : false}
                            title={item.original_title}
                            imagePath={baseImagePath('w780', item.poster_path)}
                            genre={item.genre_ids.slice(1, 4)}
                            vote_average={item.vote_average}
                            vote_count={item.vote_count}
                        />
                    );
                }}
            />
            <CategoryHeader title={'Popualar'} />
            <FlatList
                data={popularMoviesList}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={styles.containerGap36}
                renderItem={({ item, index }) => (
                    <SubMovieCard
                        shoudlMarginatedAtEnd={true}
                        cardFunction={() => {
                            navigation.push('MovieDetails', { movieid: item.id });
                        }}
                        cardWidth={width / 3}
                        isFirst={index == 0 ? true : false}
                        isLast={index == popularMoviesList.length - 1 ? true : false}
                        title={item.original_title}
                        imagePath={baseImagePath('w342', item.poster_path)}
                    />
                )}
            />
            <CategoryHeader title={'Coming Soon'} />
            <FlatList
                data={upcomingMoviesList}
                keyExtractor={(item) => item.id}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerGap36}
                renderItem={({ item, index }) => (
                    <SubMovieCard
                        shoudlMarginatedAtEnd={true}
                        cardFunction={() => {
                            navigation.push('MovieDetails', { movieid: item.id });
                        }}
                        cardWidth={width / 3}
                        isFirst={index == 0 ? true : false}
                        isLast={index == upcomingMoviesList.length - 1 ? true : false}
                        title={item.original_title}
                        imagePath={baseImagePath('w342', item.poster_path)}
                    />
                )}
            />
        </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Black,
    },

    scrollViewContainer: {
        flex: 1,
    },

    title: {
        color: COLORS.Orange,
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_30,
        textAlign: 'center',
        // backgroundColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_18,
        marginHorizontal: 5
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerGap36: {
        gap: SPACING.space_36,
    }
});

export default HomeScreen;
