import {View, TextInput, Button, StyleSheet,Image,Text, TouchableOpacity} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Feather';
import { firebase } from "../Firebase/Firebase";



export default function SignUp({navigation})

{
    console.log(firebase)
    return(
     <View style={styles.mainview}>
        <View style={styles.topview}>
            <Image style={styles.image} source={require("../assets/log.jpg")}/>
        </View>

        <ScrollView style={styles.bottomview}>
            <Icon style={styles.icon} name="chevron-left" size={60} color="#fff" onPress={()=>navigation.navigate('SignIn')} />
            <Text style={styles.Heading}> Create {'\n'} Account</Text>

            <View style={styles.formView}>
            <TextInput style={styles.text} placeholder={"Full Name"} placeholderTextColor={"#fff"}></TextInput>
            <TextInput style={styles.text} placeholder={"Email Address"} placeholderTextColor={"#fff"}></TextInput>
            <TextInput style={styles.text} placeholder={"Mobile"} placeholderTextColor={"#fff"}></TextInput>
            <TextInput style={styles.text} placeholder={"Password"} placeholderTextColor={"#fff"} secureTextEntry={true}></TextInput>
            <TextInput style={styles.text}placeholder={"Confirm Password"}placeholderTextColor={"#fff"} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            </View>
           
        </ScrollView>
     </View>
    )
}
const styles=StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    topview:{
        width:"100%",
        height:"20%",
      display:"flex",
      justifyContent:"center"
    },
    image:{
        height:"30%",
        width:"50%",
        alignSelf:"center",
        borderRadius:10
       
    },
    bottomview:{
        width:"100%",
        height:"85%",
        backgroundColor:"#000",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    Heading:{
        color:"#fff",
        fontSize:40,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:5
    },
    formView:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
    text:{
        width:"90%",
        borderWidth:1,
        borderColor:"#fff",
        height:52,
        borderRadius:10,
        marginTop:20,
        paddingLeft:5,
        color:"#fff"
    },
    button:{
        width:"90%",
        color:"#fff",
        height:52,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontSize:18,
        fontWeight:"bold"
    },
    signUp:{
        color:"gray",
    },
    textButton:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        marginTop:20
    },
    icon:{
        marginTop:10,
        marginLeft:15
    }
    
 
})