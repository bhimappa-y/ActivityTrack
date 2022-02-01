import React from "react";

import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev";

export default function FloatingButton() {
  const fetchDatos = async () =>  {
    //function to handle click on floating Action Button
      alert('Floating Button Clicked');
      console.log("testing app")
    };

 
        return (   
           
            <View style={styles.MainContainer}>
              <TouchableOpacity activeOpacity={0.5} onPress={fetchDatos} style={styles.TouchableOpacityStyle} >
                <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                       style={styles.FloatingButtonStyle} />
                      
              </TouchableOpacity>
              
            </View>
          
          );
        
};

const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#F5F5F5'
    },
  
    TouchableOpacityStyle:{
  
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
  
    FloatingButtonStyle: {
  
      resizeMode: 'contain',
      width: 50,
      height: 50,
    }
  });