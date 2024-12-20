import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import {TextInput, View,StyleSheet} from "react-native"

const Input = (props: any) => {
  return (
    <View style={styles.container}>
      {props.icon && props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(13),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderCurve: "continuous",
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xl,
    paddingHorizontal: 18,
    gap: 12,
  }
});