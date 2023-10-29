
import React, { useState } from "react";
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

  const [total, setTotal] = useState("");

  const handleBtnPress = (value: string) => {
    if (value === 'c') {
      setTotal("")
    } else if (value === 'back') {
      setTotal(total.slice(0,-1))
    } else if (value === '=') {
      try {
        const result = eval(total)
        setTotal(String(result))
      } catch(error) {
        setTotal("error")
        console.error("Something went wrong, check parameter")
      }
    } else if (value === '+') {
      setTotal(total + '+')
    } else if (value === '-') {
      setTotal(total + '-')
    } else if (value === '*') {
      setTotal(total + '*')
    } else if (value === '/') {
      setTotal(total + '/')
    } else {
      setTotal(total + value)
    }
  }
  return (
    <SafeAreaView style={s.main}>
      <TextInput style={s.screen} showSoftInputOnFocus={false} value={total} multiline={true}></TextInput>

      <View style={s.button_row}>
        <TouchableOpacity style={s.yellow_button} onPress={() => handleBtnPress('c')} >
          <Text style={s.button_text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.back_button} onPress={() => handleBtnPress('back')} >
          <Text style={s.button_text}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button} onPress={() => handleBtnPress('*')} >
          <Text style={s.button_text}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('7')} >
          <Text style={s.button_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('8')} >
          <Text style={s.button_text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('9')} >
          <Text style={s.button_text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button} onPress={() => handleBtnPress('/')} >
          <Text style={s.button_text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('4')} >
          <Text style={s.button_text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('5')} >
          <Text style={s.button_text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('6')} >
          <Text style={s.button_text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button} onPress={() => handleBtnPress('+')} >
          <Text style={s.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('1')} >
          <Text style={s.button_text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('2')} >
          <Text style={s.button_text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('3')} >
          <Text style={s.button_text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.other_button} onPress={() => handleBtnPress('-')} >
          <Text style={s.button_text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={s.button_row}>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('.')} >
          <Text style={s.button_text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.number_button} onPress={() => handleBtnPress('0')} >
          <Text style={s.button_text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.back_button} onPress={() => handleBtnPress('=')} >
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    gap: 10,
  },
  screen: {
    width: "95%",
    height: 200,
    color: "#ffffff",
    textAlign: 'right',
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
  },
  button_row: {
    flexDirection: "row",
    gap: 10,
    width: '90%',
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
