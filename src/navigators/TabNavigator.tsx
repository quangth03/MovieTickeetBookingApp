import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';

import { COLORS, SPACING, BORDERRADIUS, FONTSIZE } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator(): React.JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                            <CustomIcon
                                name='video'
                                size={FONTSIZE.size_30}
                                color={COLORS.White} />
                        </View>
                    }
                }} />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                            <CustomIcon
                                name='search'
                                size={FONTSIZE.size_30}
                                color={COLORS.White} />
                        </View>
                    }
                }} />
            <Tab.Screen name="Ticket" component={TicketScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                            <CustomIcon
                                name='ticket'
                                size={FONTSIZE.size_30}
                                color={COLORS.White} />
                        </View>
                    }
                }} />
            <Tab.Screen name="User" component={UserAccountScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                            <CustomIcon
                                name='user'
                                size={FONTSIZE.size_30}
                                color={COLORS.White} />
                        </View>
                    }
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    activeTabBackground: {
        padding: SPACING.space_18,
        borderRadius: BORDERRADIUS.radius_18 * 10,
    }
});

export default TabNavigator;
