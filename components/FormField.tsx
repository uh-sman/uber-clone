import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
// import { icons } from "../constants";
import { Button } from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { Input } from "./ui/Input";
interface FormFieldProps {
  title: string;
  value: string | undefined;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder: string;
}
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <Input
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType || "default"}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {/* {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

export default FormField;
