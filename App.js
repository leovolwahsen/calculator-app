import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={s.main}>
      <TextInput style={s.screen} value="Hi"></TextInput>

      <View style={s.button_row}>
        <TouchableOpacity style={s.yellow_button}>
          <Text style={s.button_text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.back_button}>
          <Text style={s.button_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button}>
          <Text style={s.button_text}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button}>
          <Text style={s.button_text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button}>
          <Text style={s.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button}>
          <Text style={s.button_text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button}>
          <Text style={s.button_text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.back_button}>
          <Text style={s.button_text}>=</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#00ABD0",
  },
  screen: {
    width: "100%",
    height: 200,
    color: "#ffffff",
    textAlign: "right",
    fontSize: 35,
  },
  button_row: {
    flexDirection: "row",
  },
  yellow_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#FF9900",
    justifyContent: "center",
    alignItems: "center",
  },
  back_button: {
    flex: 2,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#CD00B9",
    justifyContent: "center",
    alignItems: "center",
  },
  other_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#CD00B9",
    justifyContent: "center",
    alignItems: "center",
  },
  number_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#009ddb",
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "#ffffff",
    fontSize: 35,
  },
});
