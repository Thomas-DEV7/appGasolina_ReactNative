import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [result, setResultado] = useState();
  const [resposta, setResposta] = useState();

  function calcular(){
    let calc = (parseFloat (valor2) / parseFloat(valor1));
    setResultado(calc.toFixed(2));
    if(calc  <= 0.7){
      setResposta("Alquinho vale mais apena");
      
    }else{
      setResposta("Gasosa vale mais apena");
    }
  }




  function clear(){
    setResultado(null);
    setValor1("");
    setValor2("");
    setResposta("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Escolha seu combustivel</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabrl2VTWfpp7MbwZp6gVKWPv5C_3Xkx-VlQ&usqp=CAU',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>VALOR GASOLINA:</Text>
        <TextInput
          maxLength={4} 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          placeholder='Valor da gasosa'
          onChangeText={(texto)=>setValor1(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}>VALOR ÁLCOOL:</Text>
        <TextInput
          maxLength={4} 
          style={styles.input}
          keyboardType="numeric"
          placeholder='Valor do Alquinho'
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={calcular}>
            <Text style={styles.textoBotao}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>Diferença: {result}  </Text>
        <Text style={styles.texto}> {resposta} </Text>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={clear}>
            <Text style={styles.textoBotao}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'black',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'orange',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center',
    borderRadius: 20
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'orange',
    width:'80%',
    textAlign:'center',
    borderRadius: 20
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5,
    borderRadius: 15
  }
});