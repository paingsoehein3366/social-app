import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Index</Text>
      <Button title="Welcome" onPress={() => router.push('/welcome')} />
    </View>
    </ScreenWrapper>
  );
};

export default Index;