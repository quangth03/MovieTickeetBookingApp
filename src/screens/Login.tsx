import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

function Login({ navigation }): React.JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Tab');
            // console.log(response);
            // alert('check ur email');
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }
        finally {
            setLoading(false);
        }
    }

    // const signUp = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await createUserWithEmailAndPassword(auth, email, password);
    //         console.log(response);
    //         alert('check ur email');
    //     } catch (error) {
    //         console.log(error);
    //         alert('Sign UP failed: ' + error.message);

    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }



    return (
        <ImageBackground
            source={require('../../src/assets/image/background.jpg')}
            style={{ flex: 1 }}
            resizeMode='stretch'
        >
            <View style={styles.container}>
                <Text style={styles.title}>SIGNIN</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)} />
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password}
                    placeholder='Password'
                    autoCapitalize='none'
                    onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity
                    onPress={signIn}
                    style={{
                        backgroundColor: '#669966',
                        height: 50,
                        borderRadius: 15
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 13,
                        fontFamily: FONTFAMILY.poppins_bold,
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.White

                    }}>Login With Email</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={[styles.title,
                    {
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.White,
                        marginTop: 15
                    }]}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={[styles.title,
                        {
                            fontSize: FONTSIZE.size_18,
                            color: COLORS.White,
                            marginTop: 15
                        }]}>{' '} Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTFAMILY.poppins_extrabold,
        fontSize: FONTSIZE.size_30 * 2.5,
        color: '#669966',
        textAlign: 'center',
        marginBottom: 60
    },

    textInput: {
        marginVertical: 10,
        height: 60,
        borderWidth: 1,
        borderRadius: BORDERRADIUS.radius_15,
        padding: 10,
        backgroundColor: '#fff'
    }
});
export default Login;
