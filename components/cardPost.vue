<script setup lang="ts">
defineProps({
    post_title: {
        type: String,
        required: true
    },
    post_description: {
        type: String,
        required: true
    },
    post_tags: {
        type: Array<string>,
        required: true
    }
})

const post_date = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
</script>

<template>
    <div class="space-y-4 bg-white transition duration-300 hover:scale-105">
        <nuxt-link :to="'/blog/' + post_title.toLowerCase()">
            <img
                :src="post_title.toLowerCase() + '.jpg'"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                class="h-64 w-full object-cover object-top"
            />
        </nuxt-link>

        <div class="space-y-2 px-3 py-2">
            <p
                v-for="tag in post_tags"
                class="dark:text-zinc-900"
            >
                {{ tag }}
            </p>
            <div class="space-y-4">
                <nuxt-link
                    :to="'/blog/' + post_title.toLowerCase()"
                    class="text-2xl font-semibold text-gray-700"
                >
                    {{ post_title }}
                </nuxt-link>
                <p class="text-gray-600">
                    {{ post_description }}
                </p>
                <span class="text-sm">{{ post_date }}</span>
            </div>
        </div>
    </div>
</template>
