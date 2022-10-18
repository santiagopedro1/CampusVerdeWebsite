<template>
    <div>
        <nuxt-link
            to="/blog"
            class="flex self-start space-x-3 my-4 hover:text-blue-500"
        >
            <ArrowLeftIcon class="w-6 h-6" />
            <span>Voltar</span>
        </nuxt-link>
        <main
            class="flex flex-col items-center mx-3 md:mx-6 lg:mx-10 mt-3 dark:prose-invert prose-p:indent-8"
        >
            <ContentDoc
                tag="article"
                class="prose prose-lg prose-stone dark:prose-invert"
            />
        </main>
    </div>
</template>
