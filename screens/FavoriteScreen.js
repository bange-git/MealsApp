import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/mealLists/MealList";
import { FavouritesContext } from "../store/favourite-context";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  } else {
    return <MealList items={favMeals} />;
  }
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default FavoriteScreen;
