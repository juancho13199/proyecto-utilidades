<script setup>
import {ref} from "vue";
import { computed } from "vue";
defineProps(['campo','funcion']);

const type= ref(0);
const contenido=ref('');

</script>

<template>
    
    <div class="col-md-2 mt-2">
        <div class="mb-4">
            <select v-model="type" class="form-select" id="example-select" name="example-select">
              <option value="0">Tipo Campo en log</option>
              <option value="1">Fijo</option>
              <option value="2">Fecha()</option>
              <option value="3">Hora</option>
              <option value="4">Correo</option>
              <option value="5"> Entrada/Salida/Error</option>
            
            </select>
          </div>
        <div class="block block-rounded">
          <div class="block-content">
            
           <input v-model="contenido" type="text" />
          </div>
          <button class="btn btn-outline-primary mt-2" @click="funcion(campo, type, contenido)">Añadir Campo</button>
        </div>
      </div>
</template>