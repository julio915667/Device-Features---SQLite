import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const ProductItem = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: color }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item.nombre}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.weight}>Stock: {item.stock}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
