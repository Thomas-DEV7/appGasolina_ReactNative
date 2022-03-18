import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);
  var [resposta, setResposta] = useState();

  function calcular(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
    if(resultado >= 0.7){
      setResposta = "Vale mais apena usar alcool.";
    }else{
      setResposta = "não vale";
    }
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Adolpho's Smart Calculator</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cY64IC1j6Ldim8oMmahvNvIgLWkQpB6aDQ&usqp=CAU',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Gasolina:</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o valor da gasolina"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Alcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o valor do álcool"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={calcular}
        >
            <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado} {resposta}</Text>
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
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:1,
    borderRadius:20,
    textAlign: 'center',
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#f81',
    width:'80%',
    textAlign:'center',
    borderRadius: 20,
    marginTop: 10
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:70,
    height:70
  }
  
});