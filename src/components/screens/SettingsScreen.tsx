import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type SettingsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Settings">;
};

export function SettingsScreen({ navigation }: SettingsScreenProps) {
    return (
        <scrollView className="flex-1 bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <stackLayout className="bg-white p-4 rounded-lg">
                    <label className="text-lg font-semibold text-gray-800 mb-2">
                        Account Settings
                    </label>
                    <button className="text-indigo-600">
                        Profile
                    </button>
                    <button className="text-indigo-600">
                        Notifications
                    </button>
                    <button className="text-indigo-600">
                        Privacy
                    </button>
                </stackLayout>

                <stackLayout className="bg-white p-4 rounded-lg">
                    <label className="text-lg font-semibold text-gray-800 mb-2">
                        App Settings
                    </label>
                    <button className="text-indigo-600">
                        Language
                    </button>
                    <button className="text-indigo-600">
                        Theme
                    </button>
                    <button className="text-indigo-600">
                        Storage
                    </button>
                </stackLayout>

                <button className="text-red-600 font-semibold">
                    Sign Out
                </button>
            </stackLayout>
        </scrollView>
    );
}