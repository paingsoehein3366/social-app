import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { StyleSheet, View,Text, Pressable } from "react-native";
import Loading from "./Loading";

const Button = ({
  children,
  onPress,
  buttonStyle,
  textStyle,
  title,
  loading = false,
  hasShadow=true,
}: any) => {
  const shadowStyle = {
    shadowColor:theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
  if (loading) {
    return (
      <View style={[styles.button,buttonStyle,{backgroundColor:"white"}]}>
        <Loading />
      </View>
    )
  }
  return (
    <Pressable style={[styles.button, buttonStyle, hasShadow && shadowStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
   </Pressable>
  )
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: hp(10),
  },
  text: {
    color: "#fff",
    fontSize: hp(3.5),
    fontWeight: theme.fonts.bold as any,
  }
});