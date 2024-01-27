<template>
  <section>
    <h3>Añadir Profesor</h3>
    <div><label for="">Nombre</label><input type="text" v-model="teacher.teacherName" name="" id=""></div>
    <div><label for="">Apellidos</label><input type="text" v-model="teacher.teacherSurName" name="" id=""></div>
    <div><label for="">DNI</label><input type="text" v-model="teacher.techaerDNI" name="" id=""></div>
    <div><label for="">Materias</label><input type="text" v-model="teacherSubjects" name="" id=""><button
        @click="handleSubjetc()">Agregar</button>
      <div>
        <ul>
          <li v-for="(elm, index) in teacher.teacherSubjects" :key="index">{{ elm }}</li>
        </ul>
      </div>
    </div>
    <input type="checkbox" v-model="teacher.teacherDocs" name="" id=""> Documentación entregada
    <button @click="handleAddTeacher()">Agregar</button>
  </section>

  <section>
    <h3>Listado de Profesores</h3>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>DNI</th>
        <th>Materias</th>
        <th>Documentación entregada</th>
      </tr>
      <tr v-for="(elm) in teachers" :key="elm.techaerDNI">
        <td>{{ elm.teacherName }}</td>
        <td>{{ elm.teacherSurName }}</td>
        <td>{{ elm.techaerDNI }}</td>
        <td>
          <ul>
            <li v-for="(elm, index) in teacher.teacherSubjects" :key="index">{{ elm }}></li>
          </ul>
        </td>
        <td v-if='elm.teacherDocs'>entregada</td>
        <td v-else>NO entregada</td>
      </tr>
    </table>
  </section>
</template>

<!-- JS -->
<!-- <script lang="ts" setup>
import { ref } from 'vue';
let teacher = ref({
  teacherName: '',
  teacherSurName: '',
  techaerDNI: '',
  teacherSubjects: [],
  teacherDocs: false,
})
</script> -->

<!-- TS -->
<script lang="ts" setup>
import { Ref, ref } from 'vue';

interface ITeacher {
  teacherName: string,
  teacherSurName: string,
  techaerDNI: string,
  teacherSubjects: Array<string>,
  teacherDocs: boolean,
}
let teacher: Ref<ITeacher> = ref({
  teacherName: '',
  teacherSurName: '',
  techaerDNI: '',
  teacherSubjects: [],
  teacherDocs: false,
})

// JS
// let teachers = ref([])

//  TS
let teachers: Ref<Array<ITeacher>> = ref([])

// JS
// let teacherSubjects = ref('')

//TS
let teacherSubjects: Ref<string> = ref('')

const handleSubjetc = () => {
  teacher.value.teacherSubjects.push(teacherSubjects.value)
  teacherSubjects.value = ""
}

const handleAddTeacher = () => {
  teachers.value.push({
    teacherName: teacher.value.teacherName,
    teacherSurName: teacher.value.teacherSurName,
    techaerDNI: teacher.value.techaerDNI,
    teacherSubjects: teacher.value.teacherSubjects,
    teacherDocs: teacher.value.teacherDocs
  })
  teacher.value.teacherName = ''
  teacher.value.teacherSurName = ''
  teacher.value.techaerDNI = ''
  teacher.value.teacherSubjects = []
  teacher.value.teacherDocs = false
}

</script>

<style scoped></style>
