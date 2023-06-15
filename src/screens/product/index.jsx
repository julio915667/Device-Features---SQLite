import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addToCart } from "../../store/actions";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.nombre}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: ${product.price}</Text>
      <Text style={styles.weight}>Stock: {product.stock}</Text>
      <Button title="Añadir al Carrito" onPress={onAddToCart} color={COLORS.text} />
    </View>
  );
};

export default Product;
