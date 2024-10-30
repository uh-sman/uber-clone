import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { arrowRight, maskImage } from "@/constants";
import { Button } from "@/components/ui/CustomButton";
import { router } from "expo-router";
// import CustomButton from "@/components/custom/CustomButton";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-screen h-screen bg-blue-500">
          <Text className="text-center font-bold text-4xl text-white pt-[16vh]">
            Uber
          </Text>
          <View className=" max-h-[370px] items-center">
            <Image
              // className=" bg-center object-center"
              source={maskImage}
              resizeMode="center"
              width={10}
              height={10}
            />
          </View>
          <View className="items-center gap-[150px] flex-col">
            <Text className="text-center font-bold text-3xl text-white ">
              Move with safety
            </Text>
            {/* <View className="relative"> */}
            <Button
              className="bg-black flex-row items-center rounded-md w-[90vw]"
              onPress={() => router.push("/login")}
              variant="default"
              size={"full"}
            >
              <Text className="text-gray-300 font-semibold text-lg">Get Started</Text>
              <Image
                className="absolute right-4"
                source={arrowRight}
                resizeMode="contain"
              />
            </Button>
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
