import React from "react"
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react"
function Employee(item) {
    const [msg, setMsg] = useState(0);
    const updateMsg = () => {
        setMsg("Updated");
    }
    return (
        <View style={{padding: 20, backgroundColor: "#A3B0D5" }}>
            <Text style={{ fontSize: 20, color: "black",color: "#0000FF", marginBottom:10 }}>1. Form Employee</Text>
            <TextInput placeholder="Full Name" style={{ borderWidth:1, paddingLeft: 10, marginBottom: 15}} />
            <TextInput placeholder="Age" style={{ borderWidth:1, paddingLeft: 10, marginBottom:15}} />
            <TextInput placeholder="Occupation"style={{ borderWidth:1, paddingLeft: 10, marginBottom:15}} />
            <Button title="Update" onPress={updateMsg} />
            {msg && <Text style={{ color: "green" }}>{msg}</Text>}
        </View>
    )
}
export default Employee;