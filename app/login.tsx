import Icon from "@/assets/icons";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async() => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login","please fill all the fields")
    } 
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.trim(),
      password: passwordRef.current.trim(),
    });
    setIsLoading(false);
    // console.log("data: ",data,"error: ", error);
    if (error) {
      Alert.alert("Login", error.message);
      setIsLoading(false);
      return;
    }
  }

  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        <View style={{justifyContent:"center",}}>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize:hp(4),color:theme.colors.text}}>
            Please login to continue
          </Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} color={theme.colors.text} />}
             placeholder="Enter your email"
            onChangeText={(value:string) => emailRef.current = value}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} color={theme.colors.text} />}
             placeholder="Enter your password"
            onChangeText={(value: string) => passwordRef.current = value}
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>
            Forgot your password?
          </Text>
          <Button title="Login" loading={isLoading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push("/signUp")}>
            <Text style={[styles.footerText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold as any}]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: wp(2),
   
  },
  welcomeText:{
    color: theme.colors.text,
    fontSize: hp(8),
    fontWeight: theme.fonts.semibold as any,
  },
  form: {
    gap: 30,
    justifyContent: "center",
    height:hp(95),
  },
  forgotPassword: {
    textAlign: "right",
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
})
