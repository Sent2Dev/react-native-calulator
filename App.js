import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  const [operator, setOperator] = useState('+');
  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  let multiplied = parseFloat(previous * current);
  let added = parseFloat(previous + current);
  let substructed = parseFloat(previous - current);
  let divided = parseFloat(previous/current);
  function clear() {
    setCurrent('');
    setPrevious('');
  }
  function divide() {
    setOperator('/');
    setPrevious(current);
    setCurrent('')
  }
  function multiply() { 
    setOperator('*');
    setPrevious(current);
    setCurrent('')
  } 
  function add() {
    setOperator('+');
    setPrevious(current);
    setCurrent('')
  }
  function minus() {
    setOperator('-');
    setPrevious(current);
    setCurrent('')
  }
  function equals() {
    if(operator === '/'){
      setCurrent(divided.toString());
      setPrevious('');
    } else if(operator === '+'){
      setCurrent(added.toString());
      setPrevious('');
    } else if(operator === '-'){
      setCurrent(substructed.toString());
      setPrevious('');
    } else if(operator === '*'){
      setCurrent(multiplied.toString())
      setPrevious('');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.outputWrapper}>
      <View style={styles.output}><Text style={styles.white}> {current} </Text></View>
       </View>
      <View style={styles.numbersWrapper}>
        <View style={styles.RowWrapper}> 

          <Pressable style={styles.greyButton} onPress={() => clear()}><Text> AC </Text></Pressable>
          <Pressable style={styles.greyButton} onPress={() => setCurrent(-current)}><Text> +/- </Text></Pressable>
          <Pressable style={styles.greyButton} onPress={() => setCurrent(current/100)}><Text> % </Text></Pressable>
          <Pressable style={styles.operatorButton} onPress={() => divide()}><Text> ÷ </Text></Pressable>

        </View>
        <View style={styles.RowWrapper}>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 7)} ><Text> 7 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 8)}><Text> 8 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 9)}><Text> 9 </Text></Pressable>
          <Pressable style={styles.operatorButton} onPress={() => multiply()}><Text> x </Text></Pressable  >

        </View>
        <View style={styles.RowWrapper}> 
        
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 4)}><Text> 4 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 5)}><Text> 5 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 6)}><Text> 6 </Text></Pressable>
          <Pressable style={styles.operatorButton} onPress={() => minus()}><Text> - </Text></Pressable>

        </View>
        <View style={styles.RowWrapper}> 

          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 1)}><Text> 1 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 2)}><Text> 2 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + 3)}><Text> 3 </Text></Pressable>
          <Pressable style={styles.operatorButton} onPress={() => add()}><Text> + </Text></Pressable>

        </View>
        <View style={styles.RowWrapper}> 

          <Pressable style={styles.zeroButton} onPress={() => setCurrent(current + 0)}><Text> 0 </Text></Pressable>
          <Pressable style={styles.numberButton} onPress={() => setCurrent(current + '.')}><Text> . </Text></Pressable>
          <Pressable style={styles.operatorButton} onPress={() => equals()}><Text> = </Text></Pressable>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    fontFamily: 'Poppins',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexGrow: 1,

  },
  operatorButton: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#faaf2d'
  },
  numberButton: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#464c53',
  },
  zeroButton: {
    height: 75,
    width: 150,
    borderRadius: 37.5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    margin: 5,
    backgroundColor: '#464c53',
  },
  greyButton: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b1b8be',
    fontSize: 25,
  },
  RowWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  Text: {
    fontSize: 20,
    color: 'white',
  },
  output: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'flex-end',
    fontSize: 35,
    paddingTop: 70,
    marginTop: 50,
    marginLeft: 180,
  },
  white: {
    color: '#ffffff',
    justifyContent: 'flex-end',
    fontSize: 45,
    alignItems: 'flex-end' ,
    paddingTop: 60,
  },
  numbersWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  // dark: {
  // color: '#ffffff',
  // justifyContent: 'flex-end',
  // fontSize: 25,
  // alignItems: 'flex-end' 
  // },
  outputWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',

  }
});
