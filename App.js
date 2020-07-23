import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import FlashCard from "./components/FlashCard";
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "react-native";
import configureStore from "./store";
import {fetchDecks} from "./actions";
import {Provider} from "react-redux";

const Tabs = createBottomTabNavigator()

const Home = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen
            name="DeckList"
            component={DeckList}
            options={{
              tabBarLabel: "Decks",
              tabBarIcon: ({ color }) => <Ionicons name='ios-bookmarks' size={30} color={color} />
            }}
        />
        <Tabs.Screen
            name="NewDeck"
            component={NewDeck}
            options={{
                tabBarLabel: 'Add Entry',
                tabBarIcon: ({ color }) => <FontAwesome name='plus-square' size={30} color={color} />
            }}
        />
      </Tabs.Navigator>
  );
}

const Main = createStackNavigator()

/*

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})
*/
const navigationOptions= {
    headerTintColor: "#000000",
    headerStyle: {
        backgroundColor: "#76DD77",
    },
    headerTitleStyle: {
        fontWeight: 'boldder',
    }
}
const App = () => {
  const store = configureStore()

  return (
      <Provider store={store}>
          <NavigationContainer>
              <StatusBar
                  barStyle="light-content"
              />
              <Main.Navigator>
                <Main.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: null,
                        headerStyle: navigationOptions
                    }}
                />
                <Main.Screen name="FlashCard" component={FlashCard} options={{
                    headerStyle: navigationOptions
                }}/>
                <Main.Screen name="NewQuestion" component={NewQuestion} options={{
                    headerStyle: navigationOptions
                }}/>
                <Main.Screen name="Quiz" component={Quiz} options={{
                    headerStyle: navigationOptions
                }}/>
              </Main.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

export default App
