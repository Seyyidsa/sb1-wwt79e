import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { ObservableArray } from "@nativescript/core";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

const moodData = [
    { day: 'Mon', mood: 7 },
    { day: 'Tue', mood: 6 },
    { day: 'Wed', mood: 8 },
    { day: 'Thu', mood: 5 },
    { day: 'Fri', mood: 9 },
    { day: 'Sat', mood: 8 },
    { day: 'Sun', mood: 7 },
];

const recentEntries = [
    { title: "Productive day at work", time: "2h ago" },
    { title: "Feeling excited about the weekend", time: "Yesterday" },
    { title: "Stressed about upcoming deadline", time: "2 days ago" },
    { title: "Had a great workout session", time: "3 days ago" },
    { title: "Enjoyed dinner with friends", time: "4 days ago" },
];

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout className="flex-1 flex-col bg-gray-50">
            {/* Header */}
            <gridLayout rows="auto" columns="auto, *, auto" className="p-4 bg-white border-b border-gray-200">
                <image
                    col="0"
                    src="~/assets/placeholder-avatar.jpg"
                    className="w-10 h-10 rounded-full"
                />
                <label
                    col="1"
                    className="text-xl font-bold text-center"
                    text="AI Diary"
                />
                <button
                    col="2"
                    className="text-gray-600 p-2"
                    text="⚙️"
                    onTap={() => navigation.navigate("Settings")}
                />
            </gridLayout>

            {/* Main Content */}
            <scrollView className="flex-grow">
                <stackLayout className="p-4 space-y-4">
                    {/* Daily Insight Card */}
                    <stackLayout className="bg-white rounded-lg p-4 shadow-sm">
                        <label className="text-lg font-bold" text="Daily Insight" />
                        <label className="mt-2 text-gray-700" textWrap="true"
                            text="You've been mentioning your project more often. It seems like you're making good progress!"
                        />
                    </stackLayout>

                    {/* Mood Trend Card */}
                    <stackLayout className="bg-white rounded-lg p-4 shadow-sm">
                        <label className="text-lg font-bold" text="Mood Trend" />
                        <gridLayout className="h-[150] mt-4">
                            <stackLayout orientation="horizontal" className="justify-around items-end h-full">
                                {moodData.map((data, index) => (
                                    <stackLayout key={index} className="items-center">
                                        <stackLayout 
                                            className="w-8 rounded-t-lg bg-indigo-600" 
                                            height={data.mood * 15}
                                        />
                                        <label className="text-xs mt-1 text-gray-600" text={data.day} />
                                    </stackLayout>
                                ))}
                            </stackLayout>
                        </gridLayout>
                    </stackLayout>

                    {/* Recent Entries Card */}
                    <stackLayout className="bg-white rounded-lg p-4 shadow-sm">
                        <label className="text-lg font-bold mb-2" text="Recent Entries" />
                        <stackLayout className="space-y-2">
                            {recentEntries.map((entry, index) => (
                                <gridLayout 
                                    key={index}
                                    rows="auto" 
                                    columns="*, auto, auto" 
                                    className="border-b border-gray-200 py-3"
                                    onTap={() => navigation.navigate("EntryDetails", { entryId: index.toString() })}
                                >
                                    <label 
                                        col="0" 
                                        className="text-gray-800"
                                        text={entry.title}
                                    />
                                    <label 
                                        col="1" 
                                        className="text-xs text-gray-500 mr-2" 
                                        text={entry.time}
                                    />
                                    <label 
                                        col="2" 
                                        className="text-gray-400" 
                                        text="›"
                                    />
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </stackLayout>
                </stackLayout>
            </scrollView>

            {/* Footer */}
            <gridLayout rows="auto" columns="*, *" className="p-4 bg-white border-t border-gray-200 gap-4">
                <button
                    col="0"
                    className="bg-white text-indigo-600 border border-indigo-600 rounded-lg p-3"
                    onTap={() => navigation.navigate("Insights")}
                >
                    📊 Goals
                </button>
                <button
                    col="1"
                    className="bg-indigo-600 text-white rounded-lg p-3"
                    onTap={() => navigation.navigate("Recording")}
                >
                    🎤 New Entry
                </button>
            </gridLayout>
        </flexboxLayout>
    );
}