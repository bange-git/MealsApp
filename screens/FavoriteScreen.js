import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/mealLists/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
//   const favouriteMealsCtx = useContext(FavouritesContext);

  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

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
    fontWeight: "bold",
  },
});
export default FavoriteScreen;
