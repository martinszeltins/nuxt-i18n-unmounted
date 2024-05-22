<template>
    <HelloWorld />

    <button @click="updateLocale">Change</button>
</template>

<script setup lang="ts">
  const { locale, setLocale } = useI18n()

  const updateLocale = () => {
    if (locale.value === 'en') {
      setLocale('fr')
    } else {
      setLocale('en')
    }
  }
</script>
