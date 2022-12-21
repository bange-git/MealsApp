import { View, FlatList} from "react-native";
import CategoriesGridTitle from "../components/CategoriesGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  const renderCategoryItem = ({ item }) => {
    return <CategoriesGridTitle title={item.title} color={item.color} />;
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
