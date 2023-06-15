import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.total}>TOTAL: ${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.brightRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
