<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

definePageMeta({
  name: `blog-post`,
  // alias: ['/:path(.*)*'],
})

useSeoMeta({
  title: () => post.value?.title || 'Blog', // TODO: How does i18n deal with dynamic values? $t('blog.post.title'),
  description: () => (post.value?.description ? `Blog Article ${post.value?.description}` : ''),
})
</script>

<template>
  <main class="container py-8 sm:py-12 w-full">
    <!-- Header -->
    <header class="mb-8 pb-8 border-b border-border">
      <div class="">I AM A WEAK HEADER</div>
    </header>

    <article v-if="post" class="mx-auto text-base prose dark:prose-invert text-lg">
      <ContentRenderer v-if="post" :value="post" />
    </article>

    <article v-else>
      <h1>Post Not Found</h1>
      <p>We couldn't find a post at /blog/{{ route.path }}</p>
    </article>
  </main>
</template>
