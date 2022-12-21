import { View, FlatList } from "react-native";
import CategoriesGridTitle from "../components/CategoriesGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({navigation}) => {
    
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
        navigation.navigate('MealsOverview')
    }
    return <CategoriesGridTitle title={item.title} color={item.color} onPress={pressHandler} />;
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
