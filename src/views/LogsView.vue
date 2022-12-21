<script setup>

import CampoFormato from "../components/CampoFormato.vue";
import {ref} from "vue";

const jsonObjects=ref({});
const fecha1=ref('');
const fecha2=ref('');
const usuarios=ref([]);
const delimitador= ref('0');

const logFormate=ref([ 
  {
    usuarios:{}
  }
]);


const añadirUsuarios=()=>{

}
const añadirCampo=()=>{
  
  
  logFormate.value.push({ type:'', contenido:''});

}

const reformarCampo=(objeto, type,contenido)=>{
  objeto.type= type;
  objeto.contenido= contenido;
}
</script>





<template>
  <div class="about">

    <h1>Formato de Logs</h1> 

    <h4 class="content-heading"><small>Crea un Formato de logs</small> </h4>
        

      <div class="row col-12 col-md-12">

          <div class="row col-md-6 mt-3 mb-3"> 
            <span style="color:blue">Rango de Fecha : </span>
              <div class="col-md-4">
                Inicio
                <input :v-model="fecha1" type="date" class="form-control"/> 
                <input type="time" class="form-control mt-2"/>  
              </div>
              <div class="col-md-4">
                Fin
                <input :v-model="fecha2" type="date" class="form-control"/>  
                <input type="time" class="form-control mt-2"/>  
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

              <textarea  class="form-control mt-2" rows="4"/>  <button class="btn btn-outline-primary btn-sm mt-2">+Añadir</button>
              
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
  </div>
</template>


