// 1 import library to create componentss
import { View, Text, StyleSheet } from 'react-native';
// 2 create a components that return some jsx / simple function

const App = ()=>{
  return(
    <View>
      <Text style={style.textStyle}>Hello World</Text>
    </View>
  )
}
// 3 Create a styleSheet to style the component
const style = StyleSheet.create({
  textStyle:{
    color:"aqua",
    display:"flex",
    justifyContent:"center",
    alignItem:"center"
  }
})
// 4 Export the file

export default App;
