<script setup lang="ts">
const nav = [
    {
        title: 'Início',
        link: '/'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'Sobre',
        link: '/sobre'
    }
]
</script>

<template>
    <div class="min-h-full text-white">
        <Disclosure
            class="bg-fuchsia-700"
            as="nav"
            v-slot="{ open }"
        >
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex items-center p-2">
                            <img
                                src="/logo.svg"
                                alt="logo"
                                class="w-8 h-8"
                            />
                        </div>
                        <div class="hidden md:block">
                            <ul
                                class="items-stretch hidden space-x-3 lg:flex uppercase"
                            >
                                <li
                                    v-for="item in nav"
                                    :key="item.title"
                                    class="flex"
                                >
                                    <nuxt-link
                                        :to="item.link"
                                        class="flex items-center px-4 py-3 mt-1 border-b-2 border-opacity-0 dark:border-opacity-0 border-indigo-100 dark:border-indigo-400 duration-200 hover:border-opacity-100"
                                        activeClass="border-opacity-100 dark:border-opacity-100"
                                    >
                                        {{ item.title.toUpperCase() }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel
                v-slot="{ close }"
                class="md:hidden"
            >
                <div
                    class="flex flex-col items-start space-y-1 px-2 pt-2 pb-3 sm:px-3"
                >
                    <DisclosureButton
                        v-for="item in nav"
                        :key="item.title"
                    >
                        <NuxtLink
                            :to="item.link"
                            class="flex items-center px-4 py-3 mt-1 border-b-2 border-indigo border-opacity-0 dark:border-opacity-0 border-opacity-0 dark:border-indigo-400 duration-200 hover:border-opacity-100"
                            activeClass="border-opacity-100 dark:border-opacity-100"
                            @click="close"
                        >
                            {{ item.title }}
                        </NuxtLink>
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
        <main>
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
    </div>
</template>
