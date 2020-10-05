<template>
  <div id="resumeContent">
    {{patientData}}
    {{summary}}
  </div>
</template>

<script>
export default {
  props: {
    patientData: {
      required: true,
      type: Object,
      default: () => {}
    },
    summary: {
      required: true,
      type: Object,
      default: () => {}
    }
  }
}
</script>
