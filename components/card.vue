
<template>
    <div class="flex flex-col gap-2 bg-white p-4 rounded-xl border border-black custom-shadow">
        <Graphic class="mb-2" />
        <div class="flex flex-col gap-2 max-w-[336px]">
            <div class="flex flex-col gap-3">
                <span class="font-bold text-theme-black bg-theme-base text-sm py-1 px-2 rounded w-fit">Learning</span>
                <p class="text-theme-black text-xs">Published 21 Dec 2023</p>
            </div>
            <span class="text-xl text-theme-base font-bold">HTML & CSS foundations</span>
            <p class="text-theme-grey text-sm w-11/12">
                These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
            <div class="flex items-center gap-2 mt-2">
                <img src="/avatar.webp" class="aspect-square w-6" />
                <span class="font-bold text-sm">Greg Hooper</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-shadow{
    box-shadow: 12px 12px 0px 0px black;
}
</style>