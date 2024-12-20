import Icon from "@/assets/icons";
import { theme } from "@/constants/theme";
import {  Pressable, StyleSheet } from "react-native";

const BackButton = ({size=26,router}:any) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={3} size={size} color={theme.colors.text} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
});