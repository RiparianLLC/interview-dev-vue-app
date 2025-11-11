# interview-dev-weatherapp

Template exercise for candidates to clone and work off for interview purposes.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Tech Stack

- Vue 3 + TypeScript
- Vite
- Vue Router + Pinia
- PrimeVue (UI components)
- Jest (testing)

## Available Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Lint code

## Project Structure

```
src/
├── components/  # Reusable components
├── views/       # Page components
├── router/      # Routes
├── stores/      # Pinia stores
└── utils/       # Utilities
```

## Using PrimeVue

```vue
<template>
  <Card>
    <Button label="Click Me" icon="pi pi-check" @click="handleClick" />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default defineComponent({
  name: 'MyComponent',
  components: {
    Button,
    Card
  },
  methods: {
    handleClick() {
      console.log('Clicked!')
    }
  }
})
</script>
```

## Using Pinia Stores

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { useExampleStore } from '@/stores'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const store = useExampleStore()
    return { store }
  },
  methods: {
    increment() {
      this.store.increment()
    }
  }
})
</script>
```

## Path Aliases

- `@/` → `src/`

Example: `import { useStore } from '@/stores'`

## License

MIT License
