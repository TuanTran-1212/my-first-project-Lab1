import React from "react"
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

function Hailstone() {
  const [n, setN] = useState("");
  const [result, setResult] = useState([]);

  const generate = () => {
    let num = parseInt(n);
    let arr = [];

    while (num > 0) {
      arr.push(num);
      if (num === 1) break;
      else if (num % 2 === 0) num = num / 2;
      else num = num * 3 + 1;
    }
    setResult(arr);
  };

  return (
    <View style={{ padding: 20, backgroundColor: "yellow" }}>
      <Text style={{ fontSize: 20, color: "black", marginBottom: 20 }}>Hailstone Sequence</Text>
      <TextInput onChangeText={setN} style={{ borderWidth: 1, marginBottom: 20, color: "black" }} />
      <Button title="Generate" onPress={generate} />
      {result.length > 0 && (
        <Text style={{marginTop: 20 }}>
          Result: {result.join(" -> ")}
        </Text>
      )}
    </View>
  );
}

export default Hailstone;
