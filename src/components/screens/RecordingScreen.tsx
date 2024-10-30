import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { File, knownFolders, path } from "@nativescript/core";

type RecordingScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Recording">;
};

export function RecordingScreen({ navigation }: RecordingScreenProps) {
    const [isRecording, setIsRecording] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [transcription, setTranscription] = React.useState('');
    const [aiInsight, setAiInsight] = React.useState('');

    const startRecording = async () => {
        try {
            // TODO: Implement actual recording logic using NativeScript audio recording
            setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
            // Show error dialog
        }
    };

    const stopRecording = () => {
        if (isRecording) {
            setIsRecording(false);
            setIsProcessing(true);
            // Simulate processing delay
            setTimeout(() => {
                setTranscription("This is a simulated transcription of your audio diary entry. In a real application, this would be the result of processing your audio through a speech-to-text service.");
                setIsProcessing(false);
                generateAIInsight();
            }, 2000);
        }
    };

    const generateAIInsight = () => {
        // Simulate AI insight generation
        setTimeout(() => {
            setAiInsight("Based on your entry, it seems you're feeling positive about your recent progress. Keep up the great work!");
        }, 1500);
    };

    const saveEntry = () => {
        // TODO: Implement actual save logic
        navigation.goBack();
    };

    return (
        <flexboxLayout className="flex-1 flex-col bg-gray-100">
            {/* Main Content */}
            <scrollView className="flex-grow">
                <stackLayout className="p-4 space-y-4">
                    {/* Recording Card */}
                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-xl font-bold mb-2" text="Record Your Thoughts" />
                        <stackLayout className="h-40 justify-center items-center">
                            {isProcessing ? (
                                <activityIndicator busy={true} className="h-12 w-12" />
                            ) : (
                                <button
                                    className={`rounded-full h-20 w-20 ${isRecording ? 'bg-red-500' : 'bg-indigo-600'}`}
                                    onTap={isRecording ? stopRecording : startRecording}
                                >
                                    <label className="text-white text-center text-2xl">
                                        {isRecording ? '■' : '●'}
                                    </label>
                                </button>
                            )}
                        </stackLayout>
                        <label className="text-center text-gray-600 mt-4">
                            {isRecording ? "Recording..." : isProcessing ? "Processing..." : "Tap to record"}
                        </label>
                    </stackLayout>

                    {/* Transcription Card */}
                    {transcription && (
                        <stackLayout className="bg-white rounded-lg p-4">
                            <label className="text-xl font-bold mb-2" text="Transcription" />
                            <scrollView className="h-[200]">
                                <label textWrap="true" className="text-gray-700">
                                    {transcription}
                                </label>
                            </scrollView>
                        </stackLayout>
                    )}

                    {/* AI Insight Card */}
                    {aiInsight && (
                        <stackLayout className="bg-white rounded-lg p-4">
                            <label className="text-xl font-bold mb-2" text="AI Insight" />
                            <label textWrap="true" className="text-gray-700">
                                {aiInsight}
                            </label>
                        </stackLayout>
                    )}
                </stackLayout>
            </scrollView>

            {/* Footer */}
            <gridLayout className="p-4 bg-white border-t border-gray-200" rows="auto" columns="*, auto, *">
                <button
                    col="1"
                    className={`rounded-lg px-8 py-2 ${transcription ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-500'}`}
                    isEnabled={!!transcription}
                    onTap={saveEntry}
                    text="Save Entry"
                />
            </gridLayout>
        </flexboxLayout>
    );
}