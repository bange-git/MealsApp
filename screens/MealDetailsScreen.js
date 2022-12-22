import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import MealDetails from "../components/MealDetails";
import List from "../components/mealDetails/List";
import Subtitle from "../components/mealDetails/Subtitle";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/favourite-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favouriteMealCtx = useContext(FavouritesContext);

  const mealId = route.params.mealsId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealCtx.ids.includes(mealId);

  const changeFavouriteStatus = () => {
    if (mealIsFavourite) {
      favouriteMealCtx.removeFavourite(mealId);
    } else {
      favouriteMealCtx.addFavourite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatus}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  detailText: {
    color: "white",
  },

  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
