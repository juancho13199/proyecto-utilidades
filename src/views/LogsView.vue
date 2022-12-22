<script setup>

import CampoFormato from "../components/CampoFormato.vue";
import downloadCsv from "vue-json-csv";
import {ref,reactive} from "vue";

const jsonObjects=ref([]);
const data_ordenado=ref([]);
const fecha1=ref();
const fecha2=ref();
const hora1=ref();
const hora2=ref();
const findeSi=ref(true);
const findeNo=ref();
const registerNumber=ref();
const usuarios=ref([]);
const delimitador= ref('0');

const filterDate=(date)=>{

  return date.slice(0, 10);

}
const logFormate=ref([{}]);


const añadirUsuarios=()=>{

}
const añadirCampo=()=>{
  
  
  logFormate.value.push({ type:'', contenido:''});

}
const dividirCadena=()=>{
   usuarios.value = usuarios.value.split(delimitador.value);
   logFormate.value.push({usuarios:usuarios.value});
  console.log(usuarios.value);
}
const reformarCampo=(objeto, type,contenido)=>{
  objeto.type= type;
  objeto.contenido= contenido;
}


const prueba =(date1, date2)=>{
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    var hour = Math.trunc(Math.random() * (19 - 9)+9);
    var min =Math.trunc(Math.random()* 60 + 1) ;
    var second=Math.trunc(Math.random()* 60 + 1) ;
    var milsecond=Math.trunc(Math.random()* 600 + 1) ;
    var date1 = date1 || '01-01-1970';
    var date2 = date2 || new Date().toLocaleDateString();

    date1= new Date(date1).setHours(0,0);
    date2= new Date(date2).setHours(0,0);

    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();

    if( date1>date2){
        return new Date(getRandomArbitrary(date2,date1)).setHours(hour,min,second,milsecond);
    } else{
        return new Date(getRandomArbitrary(date1, date2)).setHours(hour,min,second,milsecond);
      
    }
  }

  const comprobando=()=>{
    // var hour = 0 + Math.random() * (19 - 9) | 0;
    //  fecha1.value = new Date(fecha1).setHours(hour);
    //  fecha2.value = new Date(fecha1).setHours(hour);
   // console.log(fecha1.value +"   "+ fecha2.value)
   //var tiempo= new Date(prueba(fecha1.value,fecha2.value)).toISOString();
   console.log("---------------------------------")
      console.log(new Date(prueba(fecha1.value,fecha2.value)).toISOString());
      console.log(new Date(prueba(fecha1.value,fecha2.value)).getUTCDay());
      console.log(new Date(prueba(fecha1.value,fecha2.value)).toLocaleDateString());
      console.log(new Date(prueba(fecha1.value,fecha2.value)).toLocaleTimeString());
    }

    const generarLog=()=>{

      for (let index = 0; index < registerNumber.value; index++) {
        
        var usuario = usuarios.value[Math.floor(Math.random() * usuarios.value.length)]
        var fechaEntera = new Date(prueba(fecha1.value,fecha2.value));

        do{
          fechaEntera = new Date(prueba(fecha1.value,fecha2.value));
        }
        while(fechaEntera.getUTCDay()==0 || fechaEntera.getUTCDay()==6)
          
        

        var fechatotal= fechaEntera.toISOString().slice(0,10);
        var fechahora= fechaEntera.toLocaleTimeString();
        var empresa='de la empresa CARRIÓN, INGENIERÍA Y ESTRUCTURAS EN ACERO S.L.'.toString();
        var accede='accede'.toString();
        if(fechahora.length< 8){
          fechahora='0'+fechahora;
        }
      
        

      jsonObjects.value.push(
        {
                'fecha':fechatotal,
                'hora': fechahora,
                'linux': 'Usuario',
                'iniciales':usuario,
                'ninguno': empresa,
                'estado': accede,
        })
      }
        data_ordenado.value = jsonObjects.value.sort((a, b) => ( Date.parse(a.fecha+"T"+a.hora+".000Z") )  - (Date.parse(b.fecha+"T"+b.hora+".000Z")));
        console.log(data_ordenado.value);
        console.log(jsonObjects.value);
   }
</script>





<template>
  <div class="about">

    <h1>Formato de Logs</h1> {{fecha1 + hora1+ "  " + fecha2 +hora2}} <button @click="comprobando()">Prueba</button>

    <h4 class="content-heading"><small>Crea un Formato de logs</small> </h4>
        

      <div class="row col-12 col-md-12">

          <div class="row col-md-6 mt-3 mb-3"> 
            <span style="color:blue">Rango de Fecha : </span>
              <div class="col-md-4">
                Inicio
                <input v-model="fecha1" type="date" class="form-control"/> 
                <input v-model="hora1" type="time" class="form-control mt-2"/> 
                <input v-model="findeNo" type="checkbox"/> no incluir finde 
              </div>
              <div class="col-md-4">
                Fin
                <input v-model="fecha2" type="date" class="form-control"/>  
                <input v-model="hora2" type="time" class="form-control mt-2"/>  
                <input v-model="findeSi" type="checkbox"/> incluir finde
              </div>
            
          </div>

          <div class="row col-md-6 mt-3 mb-3"> 

           
            <div class="col-md-12 mt-2">
              
            <span style="color:blue" class="col-md-10">Usuarios/Correos/Otros  
             
              <div class="col-12 col-md-5 mt-2">
                 
              <select v-model="delimitador" class="form-select" id="example-select" name="example-select">
                <option value="0">Delimitador</option>
                <option value=" ">Espacio pequeño (" ")</option>
                <!-- <option value="     ">Espacio Grande ("       ")</option> -->
                <option value=",">Coma (,)</option>
                <option value=";">Punto y Coma (;)</option>
              
              </select> 
              </div>
            </span>

              <textarea v-model="usuarios" class="form-control mt-2" rows="4"/>  <button @click="dividirCadena()" class="btn btn-outline-primary btn-sm mt-2">+Añadir</button>
              
            </div>
            
          
        </div>
      </div>


        <label style="color:blue" class="form-label mt-3 border-top" for="example-select">Dame el formato del log para crearlo <button @click="añadirCampo()" class="btn btn-primary btn-sm ms-1 mt-2">+Añadir campo</button></label>
          <div class="row">
            <template v-for="campo in logFormate" :key="campo">
            <CampoFormato :campo="campo" :funcion="reformarCampo" />
            </template>

          </div>
          {{ logFormate }}{{ fecha1}}<br>
          <span v-if="logFormate[0]">
            Ejemplo en CSV :  <span v-for="csv in logFormate" :key="csv"> {{csv.contenido + " "}}</span>
           
            </span>

            <div class="row col-md-12 mt-3">
              <div class="col-md-3">
                <h6>¿Cuantos Registros quieres hacer?</h6>
                <input v-model="registerNumber" type="number" class="form-control" style="width:100px">
              </div>
              
            </div>


            <div class="row col-md-12">
              <div class="col-md-3">
                
              </div>
              <div class="col-md-3">
                
              </div>
              <div class="col-md-3">
                
              </div>
              <div class="col-md-3">
                
                <downloadCsv
                :data="data_ordenado"
                :delimiter="' '"
                :separator-excel="true"
                >
                <button @click="generarLog()" class="btn btn-danger ">Generar Log</button>
                
              </downloadCsv>
                
              </div>
              
            </div>
           
  </div>
</template>


