import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';
import { TouchableOpacity } from 'react-native';

const UserAccountScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    name="close"
                    header={'My Profile'}
                    exitFunction={() => navigation.goBack()}
                />
            </View>

            <View style={styles.profileContainer}>

                <Text style={[styles.avatarText, { fontSize: FONTSIZE.size_24 }]}>Hoang Quang</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.avatarText}>Logout</Text></TouchableOpacity>
            </View>

            <View >
                <SettingComponent
                    icon="user"
                    heading="Account"
                    subheading="Edit Profile"
                    subtitle="Change Password"
                />
                <SettingComponent
                    icon="setting"
                    heading="Settings"
                    subheading="Theme"
                    subtitle="Permissions"
                />
                <SettingComponent
                    icon="dollar"
                    heading="Offers & Refferrals"
                    subheading="Offer"
                    subtitle="Refferrals"
                />
                <SettingComponent
                    icon="info"
                    heading="About"
                    subheading="About Movies"
                    subtitle="more"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    appHeaderContainer: {
        // marginHorizontal: SPACING.space_36,
        // marginTop: SPACING.space_20 * 2,
    },
    profileContainer: {
        alignItems: 'center',
        padding: SPACING.space_20,
    },
    avatarImage: {
        height: 80,
        width: 80,
        borderRadius: 80,
    },
    avatarText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_16,
        color: COLORS.White,
    },
});

export default UserAccountScreen;