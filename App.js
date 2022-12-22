import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {backgroundColor: "#351401"},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: '#e4baa1'
      }}
      >
         <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
          title: "All Categories",
          drawerIcon : ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          )
         }} />
         <Drawer.Screen name="Favorite" component={FavoriteScreen}
         options={{
          drawerIcon : ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          )
         }}
         />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}
          options={{
            title: "Meals Overview",
          }}
          />
          <Stack.Screen 
          name="MealDetails"
          component={MealDetailsScreen}
          options={{
            title: "About the Meal"
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
