import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  return (
    <View>
      <Text>Meals Detals - {catId}</Text>
      <FlatList
        data={displayMeals}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
          />
        )}
      />
    </View>
  );
};

export default MealsOverViewScreen;
