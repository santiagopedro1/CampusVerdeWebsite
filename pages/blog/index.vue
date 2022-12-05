<script setup lang="ts">
useHead({
    title: 'Blog'
})

const posts = await queryContent('/blog')
    .only(['title', 'description', 'image', 'tags'])
    .find()
</script>

<template>
    <section class="text-black dark:text-white">
        <header class="mb-12 space-y-2 text-center mt-6">
            <h2
                class="text-3xl dark:text-zinc-100 text-zinc-900 font-bold md:text-4xl"
            >
                Blog
            </h2>
            <p class="lg:w-6/12 lg:mx-auto dark:text-white">
                Fique por dentro das atividades desenvolvidas na trilha!
            </p>
        </header>
        <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div
                class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <cardPost
                    v-for="post in posts"
                    :key="post.title"
                    :post_title="post.title"
                    :post_description="post.description"
                    :post_tags="post.tags"
                    post_image="https://source.unsplash.com/random/480x360?1"
                />
                <cardPost
                    v-for="post in posts"
                    :key="post.title"
                    :post_title="post.title"
                    :post_description="post.description"
                    :post_tags="post.tags"
                    post_image="https://source.unsplash.com/random/480x360?1"
                />
                <cardPost
                    v-for="post in posts"
                    :key="post.title"
                    :post_title="post.title"
                    :post_description="post.description"
                    :post_tags="post.tags"
                    post_image="https://source.unsplash.com/random/480x360?1"
                />
                <cardPost
                    v-for="post in posts"
                    :key="post.title"
                    :post_title="post.title"
                    :post_description="post.description"
                    :post_tags="post.tags"
                    post_image="https://source.unsplash.com/random/480x360?1"
                />
            </div>
        </div>
    </section>
</template>
