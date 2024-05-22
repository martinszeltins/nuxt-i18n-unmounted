<template>
    <div>{{ $t('welcome') }}</div>

    <div v-if="locale === 'en'">
        EN
    </div>

    <div v-if="locale === 'fr'">
        FR
    </div>
</template>

<script setup lang="ts">
    const { locale } = useI18n()
    
    onMounted(() => {
        console.log('onMounted')
    })

    onUnmounted(() => {
        console.log('onUnmounted')
    })
</script>
