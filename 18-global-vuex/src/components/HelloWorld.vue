<template>
  <h3>contador</h3>

  <h3>{{ counter }} x2 = {{ times2 }}</h3>
  <button @click='increment'>Incrementar</button>
</template>

<!-- opcion api -->
<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  computed: {
    // TODO: leer el counter desde el store
    counter() {
      return this.$store.state.counter
    },
    //  TODO: leer el times2 from store
    times2() {
      return this.$store.getters.times2
    }
  },
  methods: {
    //  TODO: llama al setCounter mutation  from store
    increment() {
      this.$store.commit('setCounter', this.counter + 1)
    }
  }
})
</script> -->

<!-- option api - ver 2 que es mas limpia -->
<!-- <script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  computed: {
    // TODO: leer el counter desde el store
    ...mapState(['counter']),
    //  TODO: leer el times2 from store
    ...mapGetters(['times2'])
  },
  methods: {
    //  TODO: llama al setCounter mutation  from store
    ...mapMutations(['setCounter']),
    increment() {
      this.setCounter(this.counter + 1)
    }

  }
})
</script> -->

<!-- composition api -->
<!-- <script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const times2 = computed(() => store.getters.times2)
    const increment = () => store.commit('setCounter', counter.value + 1)
    return { increment, counter, times2 }
  }
})
</script> -->

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
</script>