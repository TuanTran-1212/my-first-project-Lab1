import React from 'react';
import Employee from './components/Employee';
import Sum from './components/Sum';
import Min from './components/Min';
import Hailstone from './components/Hailstone';
import { ScrollView, View} from 'react-native';
function App() {
  return (
    <ScrollView>
      <Employee />
      <Sum />
      <Min />
      <Hailstone />
    </ScrollView>
  );
}
export default App;