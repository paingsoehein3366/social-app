import { theme } from "@/constants/theme";
import { Text, View,StyleSheet, ActivityIndicator } from "react-native";

const Loading = ({size="large",color=theme.colors.primary}:any) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
 
});