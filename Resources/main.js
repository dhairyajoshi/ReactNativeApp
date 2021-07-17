import React from 'react';
import { useState,useEffect } from "react";
import { View , Text} from "react-native";
import { StyleSheet } from "react-native";
import Keypad from "./keypad";


export default function Main(){

    const [act,setact]= useState(0);

  const [his,sethis]= useState(null);

  const [first,setfirst]= useState(0);

  const [op,setop]= useState(null);

  const [dec,setDec]= useState(false);

  const [neg,setNeg]= useState(false);

  const [ans,setAns]=useState(false);

  useEffect(()=>{})

  const handleNumber= (n)=>
  {

    if(ans)
    {
      setact(n);
      setAns(false);
    }


    else
    {
      if(dec)
      {
        let num=n.toString();
        let s=act+num;
        let final=parseFloat(s)
        setact(final);
      }

      else if(act<10E13)
      {
        if(neg)
        setact(10*act-n)

        else
        setact(10*act+n)
      }
    }
  }

  const handleNeg=()=>{
    
    setNeg(!neg);

    setact(-1*act);

  }

  const handleDecimal=()=>{
    if(ans)
    {
      setact(0);
      setAns(false);
    }

    else
    {
      if(act.toString().length===1)
        setDec(false);

      if(!dec)
      {
        
        let s=act.toString()+'.';
        setact(s);
        setDec(true);
      }
    }
  }
  
  const handleOperator=(o)=>{

    if(his!==null)
    {
      let res=solve('func');
      sethis(null);
      setact(res);
      setfirst(res);
      setop(o);
      const update= res.toString()+o;
      setact(0);
      sethis(update);
      setDec(false);
      setNeg(false);
    }


    else
    {
      setfirst(act);
      setop(o);
      const update= his==null?act.toString()+o:his+act.toString();
      setact(0);
      sethis(update);
      setDec(false);
      setNeg(false);
    }

    
  }

  const del= ()=>{
    if(ans)
    {
      setact(0);
      setAns(false);
    }

    else
    {
      let res=act.toString();
      let len=res.length;
      if(len>0)
      {
        len=len-1;
        if(len!==0)
        {
          res=res.slice(0,len);
          res=parseFloat(res);
          setact(res);
        } 

        else
        setact(0);
      }
    }
  }

  const clear =()=>{
    setact(0);
    sethis(null);
    setfirst(0)
    setDec(false)
    setNeg(false)
    setAns(false)
  }

  const solve= (call)=>{
    
    if(dec)
    setDec(false);

    let last=act;
    let res;

    if(op==='+')
    res=first+last;

    else if(op==='-')
    res=first-last;

    else if(op==='×')
    res=first*last;

    else if(op==='÷')
    {
      res=first/last;

    }

    else if(op==='%')
    res=first%last;

    else
    res=act;

    if(call==='main')
    {
      setact(res);
    }

    else if(call==='func')
    {
      setact(res);
  
      setfirst(res);
  
      setAns(true);

      return res;
    }


    sethis(null);

    setop(null);

    setfirst(res);

    setAns(true);
  }


    return(

        <View style={styles.main}>

            <View style={styles.upper}>

                <View style={styles.his}>
                    <Text style={styles.text}>{his}</Text>
                </View>


                <View style={styles.act}>
                    <Text style={styles.text}>{act}</Text>
                </View>                

            </View>

            <View style={styles.lower}>
                <Keypad 
                handleNumber={handleNumber}
                handleNeg={handleNeg}
                handleDecimal={handleDecimal}
                handleOperator={handleOperator}
                del={del}
                clear={clear}
                solve={solve}
                style={styles.keypad}/>

            </View>




            
        </View>

    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"black",
        flexDirection:"column",
        flex:1
    },
    upper:{
        flex:2,
        flexDirection:"column",
        
    },
    his:{
        flex:1,
        justifyContent:"center",

    },
    act:{
        flex:1,
        justifyContent:"center",
    },
    text:{
        color:"white",
        fontSize:50,
        textAlign:"right",
    },
    lower:{
        flex:4,

    },
    keypad:{
        flex:1,
    }

    
    


  });