import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState(150);
  const [nextNumber, setNextNumber] = useState('');
  //{setResult(); setResult(`${result} 7`)}}
  function clear() {
    setResult(0);
    setNextNumber('');
  }

  function minusOnBefore(){
    // setResult(-result);
    setNextNumber(-nextNumber)
  }
  function percents(){
    setResult(result/100);
  }
  function addition(){
    setResult(result + parseFloat(nextNumber));
    setNextNumber("")
  }


  function subtraction(){
    setResult(result - parseFloat(nextNumber));
    setNextNumber("")
  }


  function multiplication(){
    setResult(result * parseFloat(nextNumber));
    setNextNumber("")
  }


  function division(){
    setResult(result / parseFloat(nextNumber));
    setNextNumber("")
  }
  
  function equals(){
    setResult(result + parseFloat(nextNumber));
    setNextNumber("")
  }

  function insertComma(){
    setNextNumber(nextNumber + ',0');

  }

  return (
    <View style={styles.container}>
      <View style={styles.output}><Text style={styles.white}> {nextNumber} </Text></View>
      <View style={styles.output}><Text style={styles.white}> {result} </Text></View>
      <View style={styles.numbersWrapper}>
        <View style={styles.RowWrapper}> 

          <TouchableOpacity style={styles.greyButton} onPress={() => clear()}><Text> AC </Text></TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() => minusOnBefore()}><Text> +/- </Text></TouchableOpacity>
          <TouchableOpacity style={styles.greyButton} onPress={() =>percents()}><Text> % </Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() =>division()}><Text> ÷ </Text></TouchableOpacity>

        </View>
        <View style={styles.RowWrapper}>
          <TouchableOpacity style={styles.numberButton} onPress={() => setNextNumber(nextNumber + 7)}><Text> 7 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} onPress={() => setNextNumber(nextNumber + 8)}><Text> 8 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} onPress={() => setNextNumber(nextNumber + 9)}><Text> 9 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={()=> multiplication()}><Text> x </Text></TouchableOpacity  >

        </View>
        <View style={styles.RowWrapper}> 
        
          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 4)}><Text> 4 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 5)}><Text> 5 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 6)}><Text> 6 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={()=>{subtraction()}}><Text> - </Text></TouchableOpacity>

        </View>
        <View style={styles.RowWrapper}> 

          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 1)}><Text> 1 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 2)}><Text> 2 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}onPress={() => setNextNumber(nextNumber + 3)}><Text> 3 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => addition()}><Text> + </Text></TouchableOpacity>

        </View>
        <View style={styles.RowWrapper}> 

          <TouchableOpacity style={styles.zeroButton} onPress={()=>setNextNumber(nextNumber + '0')}><Text> 0 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.numberButton} onPress={()=>setNextNumber(nextNumber + '.')}><Text> . </Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => equals()}><Text> = </Text></TouchableOpacity>
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
    width: '35%',
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
    backgroundColor: '#464c53',
  },
  zeroButton: {
    height: 75,
    width: 150,
    borderRadius: 37.5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',

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

    backgroundColor: '#b1b8be',
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
    height: 200,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'flex-end',
    paddingRight: 15,
    textAlign: 'right',
    fontSize: 35,
  },
  white: {
    color: '#ffffff',
    textAlign: 'right',
    justifyContent: 'center',
    fontSize: 45,
    alignContent: 'center',
  },
  numbersWrapper: {
    flex: 1,
    width: '100%',
  }
});
