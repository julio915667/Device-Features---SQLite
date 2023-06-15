import { View, TextInput, Text } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import Label from "../label";

const Input = ({
  editable,
  children,
  value,
  style,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor = COLORS.darkGray,
  keyboardType = "default",
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          editable={editable}
          value={value}
          style={{ ...styles.input, ...style }}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;
