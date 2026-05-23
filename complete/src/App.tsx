import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import StartNavigation from './navigation/StartNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StartNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App