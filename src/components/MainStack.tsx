import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { RecordingScreen } from "./screens/RecordingScreen";
import { EntryDetailsScreen } from "./screens/EntryDetailsScreen";
import { InsightsScreen } from "./screens/InsightsScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#6366f1",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "AI Diary" }}
            />
            <StackNavigator.Screen
                name="Recording"
                component={RecordingScreen}
                options={{ title: "New Entry" }}
            />
            <StackNavigator.Screen
                name="EntryDetails"
                component={EntryDetailsScreen}
                options={{ title: "Entry Details" }}
            />
            <StackNavigator.Screen
                name="Insights"
                component={InsightsScreen}
                options={{ title: "Insights" }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);