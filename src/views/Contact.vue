

<template>
  <div class="contact">
    <h1>DATOS DE CONTACTO</h1>
  <!-- Aca va el contact Form -->

<ContactForm />

  <!-- HASTA ACA -->

  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '../components/ContactForm'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>