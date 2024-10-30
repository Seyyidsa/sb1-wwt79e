import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type InsightsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Insights">;
};

export function InsightsScreen({ navigation }: InsightsScreenProps) {
    return (
        <scrollView className="flex-1 bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <stackLayout className="bg-white p-4 rounded-lg space-y-2">
                    <label className="text-lg font-semibold text-gray-800">
                        Mood Trends
                    </label>
                    <label className="text-gray-600">
                        Your mood analysis will appear here...
                    </label>
                </stackLayout>

                <stackLayout className="bg-white p-4 rounded-lg space-y-2">
                    <label className="text-lg font-semibold text-gray-800">
                        Goals Progress
                    </label>
                    <label className="text-gray-600">
                        Your goals and progress will appear here...
                    </label>
                </stackLayout>

                <stackLayout className="bg-white p-4 rounded-lg space-y-2">
                    <label className="text-lg font-semibold text-gray-800">
                        Common Themes
                    </label>
                    <label className="text-gray-600">
                        Recurring themes from your entries will appear here...
                    </label>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}