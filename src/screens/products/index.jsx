import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { ProductItem } from "../../components";
import { filterProducts, selectProduct } from "../../store/actions";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Product", {
      name: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={category.color} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Products;
