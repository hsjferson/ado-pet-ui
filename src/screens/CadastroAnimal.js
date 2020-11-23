import React, { Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert,TouchableOpacity} from 'react-native';

export default class CadastroAnimal extends Component {
 
     
    constructor(props) {
        super(props);
        this.state = { 
            formEmail:'',
            formNome:'',
            formTelefone:'',
            formSenha:''
        };
         
         
    } 
    alterarBotao() {
        Alert.alert("Add a função cadastrar aqui")
    }

   render(){
       return(
           <View style={styles.container}>
               <View style={styles.cadastroArea} behavior="padding"> 
                    <View style={styles.form}>
                        <View style={styles.areaAvatar}>
                        <Image style={styles.formAvatar} source={require('../img/cadastroAnimal.png')}></Image>
                        <Text style={styles.title}>Cadastre seu animal: </Text>
                        </View> 
                        <View style={styles.formInfo}>
                            <TextInput style={styles.input} placeholder=" Tipo" value={this.state.formTipo} onChangeText={(formEmail)=>this.setState({formEmail})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Raça" value={this.state.formRaça} onChangeText={(formNome)=>this.setState({formNome})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Porte" value={this.state.formPorte} onChangeText={(formTelefone)=>this.setState({formTelefone})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Idade" value={this.state.formIdade} onChangeText={(formNome)=>this.setState({formNome})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Quantidade" value={this.state.formQuantidade} onChangeText={(formNome)=>this.setState({formNome})}></TextInput>
                            
                        
                        </View>
                        <View style={styles.BtnGeral}> 
                            {/*<Button title="Cadastrar" onPress = { () => this.props.navigation.navigate('Anuncios')  }></Button> */}   
                            <TouchableOpacity  onPress = { this.alterarBotao } style={styles.button}><Text style={styles.totuloBotao}>Cadastrar</Text></TouchableOpacity>
                             
                        </View>
                    </View> 
               </View> 
           </View>
       )
   } 
}

const styles = StyleSheet.create({
    container   : {
        flex:1,  
    },
    cadastroArea: {
        height:550, 
        margin:10, 
        padding:10, 
    },
    title: {
        fontFamily:"Arial",
        fontSize:20,
        textAlign:"center",
        margin:10
    },
    areaAvatar: {  
        alignItems:"center"
    },
    formAvatar: {
        width:100,
        height:100, 
        margin:15,
    },
    form: {
        flexDirection:"column",  
    },
    formInfo: { 
        padding:10

    },
    input: {
        height:40, 
        backgroundColor:"#fff", 
        margin:5,
        borderRadius:5
    },

    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",   
        margin:10
    },
    button:{ 
        height:40,
        backgroundColor:"#475F94",
        borderRadius:30,
        width:150,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width:3,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff"
    }
})