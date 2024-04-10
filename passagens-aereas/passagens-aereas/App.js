import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [passengerName, setPassengerName] = useState("");
const [destination, setDestination] = useState("");
const [departureDate, setDepartureDate] = useState("");
const [passengerList, setPassengerList] = useState([]);

const handleRegister = () => {
const newPassenger = {
passengerName: passengerName,
destination: destination,
departureDate: departureDate
};

setPassengerList([...passengerList, newPassenger]);

setPassengerName('');
setDestination('');
setDepartureDate('');
};

return (
<View style={styles.container}>
<View style={styles.topView}>
<ImageBackground source={require('./i549563.jpeg')} style={styles.imageBackground}>
<Text style={styles.title}>Venda de passagens aereas</Text>
</ImageBackground>
</View>
<View style={styles.bottomView}>
<View style={styles.formContainer}>
<Text style={styles.sectionTitle}>Cadastro de Passageiros</Text>
<Text style={styles.blueText}>Nome do passageiro:</Text>
<TextInput 
style={styles.input}
value={passengerName}
onChangeText={setPassengerName}
/>
<Text style={styles.blueText}>Destino:</Text>
<TextInput 
style={styles.input}
value={destination}
onChangeText={setDestination}
/>
<Text style={styles.blueText}>Data do embarque:</Text>
<TextInput 
style={styles.input}
value={departureDate}
onChangeText={setDepartureDate}
/>
<Button title="Vender" onPress={handleRegister} />
</View>
<View style={styles.passengerList}>
{passengerList.map((passenger, index) => (
<View key={index} style={styles.passengerItem}>
<Text>Nome do passageiro: {passenger.passengerName}</Text>
<Text>Destino: {passenger.destination}</Text>
<Text>Data do embarque: {passenger.departureDate}</Text>
</View>
))}
</View>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'lightgray',
},
topView: {
height: '30%',
},
bottomView: {
flex: 2,
},
imageBackground: {
flex: 1,
padding:60,
height:250,
justifyContent: 'flex-center',
},
title: {
textAlign: 'center',
fontSize: 24,
fontWeight: 'bold',
color: '#ffff',
backgroundColor: 'lightgray',
height:150,
padding:10,
borderRadius:30,

},
formContainer: {
padding: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
color:'blue'
},
input: {
height: 40,
borderColor: 'blue',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 10,
backgroundColor: '#fff',
borderRadius:20,

},
passengerList: {
flex: 1,
padding: 20,
backgroundColor: 'yellow',

},
passengerItem: {
marginBottom: 10,
backgroundColor: 'lightblue',
padding: 10,
borderRadius:20,
},

blueText:{
color:'blue',
fontWeight: 'bold',

}
});

