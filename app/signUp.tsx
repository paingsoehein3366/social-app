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

const SingUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = async() => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sing Up", "please fill all the fields")
      return;
    };
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.trim(),
      password: passwordRef.current.trim(),
      options: {
        data: {
          name: nameRef.current.trim(),
        },
      }
    });
    console.log("data: ",data,"error: ", error);
    if (error) {
      Alert.alert("Sing Up", error.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  }

  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        <View style={{justifyContent:"center",}}>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize:hp(4),color:theme.colors.text}}>
              Please fill the details to create an account
          </Text>
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} color={theme.colors.text} />}
             placeholder="Enter your name"
            onChangeText={(value:string) => nameRef.current = value}
          />
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} color={theme.colors.text} />}
             placeholder="Enter your email"
            onChangeText={(value:string) => emailRef.current = value}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} color={theme.colors.text} />}
            rightSelaction={<Icon onPress={() => setShowPassword(!showPassword)} name={showPassword ? "eye" : "showEye"} size={20} strokeWidth={1.5} color={theme.colors.text} />}
             placeholder="Enter your password"
            onChangeText={(value: string) => passwordRef.current = value}
            secureTextEntry={showPassword}
          />
          <Button title="Sing Up" loading={isLoading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={[styles.footerText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold as any}]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SingUp;

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
