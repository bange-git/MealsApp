import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({items}) => {
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
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderMealsItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealList;
