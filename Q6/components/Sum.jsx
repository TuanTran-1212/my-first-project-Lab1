import React from "react"
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

function Sum() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const str = number.toString();
    const sum = parseInt(str[0]) + parseInt(str[str.length - 1]);
    setResult(sum);
  };

  return (
    <View style={{ padding: 20, backgroundColor: "#D5E8A3" }}>
      <Text style={{ fontSize: 20, color: "black", marginBottom:20 }}>2. Sum First & Last Digit</Text>
      <TextInput
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        style={{  borderWidth: 1, padding: 5 , marginBottom:20}}
      />
      <Button title="Calculate" onPress={calculate} style={{marginBottom:20}} />
      {result !== null && <Text style={{ color: "black", marginTop:20, color:"red" }}>Result: {result}</Text>}
    </View>
  );
}

export default Sum;
