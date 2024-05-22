<template>
    <div>{{ $t('welcome') }}</div>

    <button @click="updateLocale">
        Change Locale
    </button>
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

    onMounted(() => {
        console.log('onMounted')
    })

    onUnmounted(() => {
        console.log('onUnmounted')
    })
</script>
