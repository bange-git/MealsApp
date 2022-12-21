import { View, Text, FlatList, Pressable } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealsItem = ({ item }) => {
    
    return (
        <MealItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          affordability={item.affordability}
          complexity={item.complexity}
          duration={item.duration}
        />
    );
  };

  return (
    <View>
      <Text>Meals Overview </Text>
      <FlatList data={displayMeals} renderItem={renderMealsItem} />
    </View>
  );
};

export default MealsOverViewScreen;
