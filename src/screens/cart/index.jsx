import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { confirmOrder, removeFromCart } from "../../store/actions";
import LocationForm from "../../components/LocationForm";


const Cart = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);
  const [address, setAddress] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);

  const isCartEmpty = cart.length === 0;
  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const onConfirmOrder = async () => {
    try {
      await dispatch(confirmOrder({ cart, total }));
      setShowLocationModal(true);
    } catch (error) {
      console.log("Error:", error);
      // Maneja el error de manera adecuada, como mostrar un mensaje de error al usuario
    }
  };

  const closeLocationModal = () => {
    setShowLocationModal(false);
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={isCartEmpty}
          style={isCartEmpty ? styles.buttonDisabled : styles.buttonConfirm}
          onPress={onConfirmOrder}
        >
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}> ${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={showLocationModal} onRequestClose={closeLocationModal}>
        <LocationForm closeModal={closeLocationModal} />
      </Modal>
    </View>
  );
};

export default Cart;
