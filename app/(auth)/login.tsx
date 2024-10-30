import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Alert, TextInput, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextComponent from "@/components/ui/Text";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/CustomButton";
import SocialsButton from "@/components/SocialsButton";
import { apple, arrowLeft, facebook, google, search } from "@/constants";
import CustomDivider from "@/components/CustomDivider";
import { router } from "expo-router";
import { CountryPickerComponent } from "@/utils/picker";
import FormField from "@/components/FormField";
// import { createUser } from "@/auth/auth";

type loginTypeProps = "PHONE" | "SOCIAL";
type authPhone = {
  country: string;
  phoneNo: string;
}

const Login = () => {
  const [variant, setVariant] = useState<loginTypeProps>("PHONE");
  const [show, setShow] = useState<boolean>(false)
  const [countryCode, setCountryCode] = useState<string>("")
  const [countryFlag, setCountryFlag] = useState<ImageSourcePropType | undefined>()
  const [authPhone, setAuthPhone] = useState<authPhone>({
    country: "",
    phoneNo: ""
  });
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleAuth = async () => {
    if (variant === "SOCIAL") {
      Alert.alert("SOCIAL", "Social variant!!!");
    }else {
      console.log("user")
    //   const user = createUser(authPhone.country, authPhone.phoneNo)
    //   if ((await user).user) {
    //     return user
    // }
  }
    return Alert.alert("PHONE VARIANT!!!")
  };


  

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="mx-2 mt-10">
          <TextComponent size="lg" weight="normal">
            Enter your mobile number
          </TextComponent>
          <View className="flex-row gap-3 my-3">
            <View
              className={`w-[25vw] rounded-lg py-1 border border-gray-200 bg-gray-200`}
            >
              {/* <Input
              // value={countryCode}
                onBlur={handleBlur}
                ref={inputRef}
              /> */}
              <CountryPickerComponent setShow={setShow} show={show} countryCode={countryCode} setCountryCode={setCountryCode} setCountryFlag={setCountryCode} countryFlag={countryFlag}/>
            </View>
            <View
              className={`w-[68vw] rounded-lg py-1 border ${
                isFocused ? "border-2 border-black" : "border-gray-200"
              }`}
            >
              <FormField value={authPhone.phoneNo} placeholder="Phone Number" title="Phone number" handleChangeText={(e: any) => setAuthPhone({...authPhone, phoneNo: e})} keyboardType={"numeric"}/>
            </View>
          </View>
          <Button className="bg-black" size={"lg"} variant={"default"} onPress={handleAuth}>
            <Text className="text-gray-100">Continue</Text>
          </Button>
          <CustomDivider />
          <SocialsButton title="Continue with Apple" icon={apple} onPress={() => setVariant("SOCIAL")} />
          <SocialsButton title="Continue with Facebook" icon={facebook} onPress={() => setVariant("SOCIAL")} />
          <SocialsButton title="Continue with Google" icon={google} onPress={() => setVariant("SOCIAL")} />
          <CustomDivider />
          <View className="flex-row justify-center gap-2 mt-2 items-center">
            <Image source={search} className="w-5 h-5" />
            <Text className="font-semibold text-lg">Find my account</Text>
          </View>
          <Text className="text-sm text-gray-400 py-8 px-2 tracking-tighter">
            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text "STOP" to 89203 to opt out.
          </Text>
          <Button onPress={() => router.back()} className="bg-gray-200/100 rounded-full h-[45px] w-[45px]">
            <Image source={arrowLeft} className="w-6 h-6" />
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
