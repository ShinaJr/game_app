import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({
  name,
  placeholder,
  style,
  control,
  rules = {},
  keyboardType,
  secureTextEntry,
  inputType,
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={(
        { field: { value, onChange, onBlur }, fieldState: { error } } //implicit return
      ) => (
        <>
          <View
            style={{ flex:1 }}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={style}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              inputType={inputType}
            />
             {/* if error is true render the error message below */}
           {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "error"}
              </Text>
      
            )}
           
          </View>
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
