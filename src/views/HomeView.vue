<template>
  <div class="home">
    <div class="container">
      <h1>Weather App</h1>
      
      <Card class="example-card">
        <template #title>Example Card</template>
        <template #content>
          <p>This is an example using PrimeVue components.</p>
          <Button label="Click Me" icon="pi pi-check" @click="handleClick" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default defineComponent({
  name: 'HomeView',
  components: {
    Card,
    Button,
  },
  methods: {
    handleClick() {
      console.log('Button clicked!')
    }
  }
})
</script>

<style scoped>
.home {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
}

.example-card {
  max-width: 500px;
}
</style>

