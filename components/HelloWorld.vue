<template>
    <div>{{ $t('welcome') }}</div>
</template>

<script setup lang="ts">
    onMounted(() => {
        console.log('onMounted')
    })

    onUnmounted(() => {
        console.log('onUnmounted')
    })
</script>
