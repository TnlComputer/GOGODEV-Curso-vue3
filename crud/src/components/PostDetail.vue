<template>
  <div class='post'>
    <H3>{{ props.title }}</H3>
    <p>{{ props.content }}</p>
    <input type='text' v-model="message" />
    <button @click='handleClick'>Di Hola</button>
  </div>
</template>

<script lang="ts" setup >
import { defineProps, defineEmits, Ref, ref } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false,
    default: "Este post no tiene contenido"
  }
})

const emit = defineEmits(["sayHi"])

const handleClick = () => {
  emit("sayHi", message.value)
}
let message: Ref<string> = ref("")
</script>

<!-- 
  <script lang="ts" >
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
  name: 'PostDetail',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false,
      default: "Este post no tiene contenido"
    },
  },
  emits: ["sayHi"],

  setup(props, { emit }) {
    const handleClick = () => {
      emit("sayHi", message.value)

    }
    let message: Ref<string> = ref("")
    return { props, message, handleClick }
  }
})
</script>
 -->

<style scoped>
.post {
  width: 250px;
  border-radius: 10px;
  height: 150px;
  background-color: antiquewhite;
  margin: 5px;
  padding: 5px;
}
</style>