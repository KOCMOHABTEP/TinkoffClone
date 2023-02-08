import React from 'react';
import {AuthProvider} from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DataProvider} from './app/providers/DataProvider';
import StoryContainer from './app/components/ui/Stories/StoryContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <AuthProvider>
          <DataProvider>
            <StoryContainer />
            <Navigation />
          </DataProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
