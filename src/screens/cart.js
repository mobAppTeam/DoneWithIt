import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState, useReducer } from 'react'
import CartReducer from '../Components/cartreducer'
import Products from './Products'

const cart = ({ navigation }) => {
    const initialState = [];
    const [cartItems, dispatch] = useReducer(CartReducer, initialState);
   // let {itemID, Qty} = route.params;
    useEffect(() => {
        console.log("error")
        dispatch({ type: "RETRIEVE_LIST" });
        if (!cartItems)
        {
            alert("cart is empty");
            }
        console.log("here")
    },[])
   
    const {image, title, price} = Products[1];
    // const countTotal = () => {
    //     return Number(Qty) * price;
    // }
    // const orderDone = () => {
    //     alert("your order has been placed");
    //     navigation.navigate("Home1");
    // }

    return (
        <ScrollView>
            {cartItems.map((elem) => 
            {
                return (
                    <View style={[Styles.card, Styles.cardShadow]}>
                    <Image source={elem.image}
                    style={Styles.image}
                    resizeMode="contain"/>
                
                    <View style={Styles.desc}>
                        <Text  style={Styles.title}> Product: {elem.title}</Text>
                        <Text  style={Styles.title}> Qty: {elem.Qty}</Text>
                        <Text  style={Styles.title}> Price: {elem.price}</Text>
                    </View>
                 </View>            
                );
            })}
                
                 <View  style={Styles.total}>
                    {/* <Text style={Styles.text}> Total: {countTotal(Qty, price)} </Text> */}
                    <Text style={Styles.text}> Amount </Text>
                </View>

            <TouchableOpacity  style={Styles.button} onPress={()=> {orderDone()}}>
                <Text> CHECK OUT </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


export default cart;

const Styles = StyleSheet.create({
    card:{
        marginTop:30,
        height: 200,
        borderRadius:35,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor:'#fff',
        marginHorizontal: 5,
        marginBottom:30
    },
   image:{
       height: "100%",
       width: '40%'
   },
   desc:{
       justifyContent: 'center', //Centered horizontally
       flex:1
   },
   cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title:{
        fontFamily: 'DMSans-Bold',
        fontSize:15,
        paddingVertical: 5
    },
    total:{
    paddingHorizontal:30,
    paddingVertical:30,
    borderTopColor: '#ededed',
    borderTopWidth: 3,
    borderBottomColor: '#ededed',
    borderBottomWidth: 3,
  },
text:{
    fontFamily: 'DMSans-Bold',
    fontSize:15,
  },
button: {
    margin: 30,
    paddingVertical:20,
    alignItems: 'center',
    backgroundColor: '#afafda',
    borderRadius: 50
}

})