import React from "react"
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

function Min() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [min, setMin] = useState(null);

  const findMin = () => {
    setMin(Math.min(a, b, c));
  };

  return (
    <View style={{ padding: 20, backgroundColor: "#F5A3D5" }}>
      <Text style={{ fontSize: 20, color: "red", marginBottom: 20 }}>3. Find Minimum</Text>
      <TextInput
        placeholder="Enter First Number"
        style={{ marginBottom: 20, borderWidth: 1 }}
        onChangeText={(number1) => setA(Number(number1))}
      />
      <TextInput
        placeholder="Enter Second Number"
        style={{ marginBottom: 20, borderWidth: 1 }}
        onChangeText={(number2) => setB(Number(number2))}
      />
      <TextInput
        placeholder="Enter Third Number"
        style={{ marginBottom: 20, borderWidth: 1 }}
        onChangeText={(number3) => setC(Number(number3))}
      />
      <Button title="Find Min" onPress={findMin} />
      {min !== null && <Text style={{ color: "green", marginTop: 20 }}>Minimum: {min}</Text>}
    </View>
  );
}

export default Min;
