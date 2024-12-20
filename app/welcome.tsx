import ScreenWrapper from "@/components/ScreenWrapper";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image style={styles.welcomeImage} resizeMode="contain" source={require('../assets/images/welcome.png')} />
        <View style={{gap:20}}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.puchline}>
            Where every thought finds a home and every image tells a story.
          </Text>
        </View>
        <View style={styles.footer}>
          <Button title="Get Started" onPress={() => router.push('/signUp')} />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.loginText}>
              Already have an account!
            </Text>
            <Pressable onPress={() => router.push('/login')}>
              <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold as any}]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(30),
    height: wp(30),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(8),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold as any,
  },
  puchline: {
    color: theme.colors.text,
    fontSize: hp(3.5),
    textAlign: "center",
    paddingHorizontal: wp(4),
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  loginText: {
    fontSize: hp(3.4),
    textAlign: "center",
    color: theme.colors.text,
  },
})
