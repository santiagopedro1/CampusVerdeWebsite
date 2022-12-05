<script setup lang="ts">
useHead({
    titleTemplate(title) {
        return title
            ? `${title} - Campus Verde`
            : 'Trilha interpretativa Campus Verde'
    },
    htmlAttrs: {
        lang: 'pt-br',
        class: 'h-full bg-gray-200 dark:bg-slate-900'
    },
    bodyAttrs: {
        class: 'h-full'
    }
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtLoadingIndicator color="#6366f1" />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
