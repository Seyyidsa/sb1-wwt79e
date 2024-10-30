import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type EntryDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "EntryDetails">;
    navigation: FrameNavigationProp<MainStackParamList, "EntryDetails">;
};

export function EntryDetailsScreen({ route, navigation }: EntryDetailsScreenProps) {
    const { entryId } = route.params;

    return (
        <scrollView className="flex-1 bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <label className="text-xl font-bold text-gray-800">
                    Entry Details
                </label>

                <stackLayout className="bg-white p-4 rounded-lg space-y-2">
                    <label className="text-gray-600">Transcription</label>
                    <label className="text-gray-800">
                        Your transcribed entry will appear here...
                    </label>
                </stackLayout>

                <stackLayout className="bg-white p-4 rounded-lg space-y-2">
                    <label className="text-gray-600">AI Insights</label>
                    <label className="text-gray-800">
                        AI-generated insights will appear here...
                    </label>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}