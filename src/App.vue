<template>
    <h1 class="text-3xl font-bold underline dark:text-yellow-300">
        Hello world!
    </h1>
    <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span
            class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
    </blockquote>
    <input type="checkbox" class="accent-pink-500" checked> Customized
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-spin">
        旋转效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-ping">
        闪烁效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-pulse">
        脉冲效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-bounce">
        弹跳效果
    </button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full animate-custom-animation">
        自定义效果
    </button>
    <div></div>
    <div class="relative flex items-center justify-center h-12 w-12 bg-gray-600 aria-checked:bg-red-700"
        aria-checked="false">
        <!-- 标记图标或内容 -->
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
    </div>
    <div class="w-full flex flex-col items-center justify-center">
        <iframe class="w-1/2 aspect-video" playsinline="true" preload="auto" autoplay="" x5-playsinline="true"
            webkit-playsinline="true" src="https://duringbug.cloud:9090/vedio/demovedio.mp4"></iframe>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-blur-sm bg-white/30 aspect-square w-1/4">backdrop-blur-sm</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-brightness-50 bg-white/30 aspect-square w-1/4">backdrop-brightness-50</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-contrast-125 bg-blue/30 aspect-square w-1/4">backdrop-contrast-125</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-grayscale bg-white/30 aspect-square w-1/4">backdrop-grayscale</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-hue-rotate-30 bg-white/30 aspect-square w-1/4">backdrop-hue-rotate-30</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-invert bg-white/30 aspect-square w-1/4">backdrop-invert</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-opacity-50 bg-white/30 aspect-square w-1/4">backdrop-opacity-50</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-saturate-200 bg-white/30 aspect-square w-1/4">backdrop-saturate-200</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="h-[800px] flex flex-col justify-center items-center">
        <div class="backdrop-sepia bg-white/30 aspect-square w-1/4">backdrop-sepia</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-rose-500 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-rose-500</div>
    </div>
    <div class="w-full h-[200px] flex flex-col justify-center items-center">
        <div class="w-1/6 aspect-square bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-rose-500 bg-opacity-40 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-rose-500 bg-opacity-40</div>
    </div>

    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-top bg-blue-400 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-top</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)!important`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `50%`,
        backgroundBlendMode: `multiply`,
    }" class="bg-custom bg-blue-400 h-[800px] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-custom</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-auto bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-auto</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-cover bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-cover</div>
    </div>
    <div :style="{
        backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundBlendMode: `multiply`,
    }" class="bg-contain bg-sky-400 w-[100wh] h-[100vh] flex flex-col justify-center items-center">
        <div class=" aspect-square w-1/4">bg-contain</div>
    </div>
    <div class="my-2 border-4 border-custom">
        border-custom
    </div>
    <div class="my-2 border-4 border-green-700 border-opacity-50">
        border-opacity-50
    </div>
    <div class="my-2 border-4 border-green-700 rounded-lg border-opacity-50">
        rounded-lg
    </div>
    <table class="border-separate border-spacing-2 border border-slate-500">
        <thead>
            <tr>
                <th class="border border-slate-600">State</th>
                <th class="border border-slate-600">City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-700">Indiana</td>
                <td class="border border-slate-700">Indianapolis</td>
            </tr>
            <tr>
                <td class="border border-slate-700">Ohio</td>
                <td class="border border-slate-700">Columbus</td>
            </tr>
            <tr>
                <td class="border border-slate-700">Michigan</td>
                <td class="border border-slate-700">Detroit</td>
            </tr>
        </tbody>
    </table>
    <div class="my-2 border-[12px] border-green-700 rounded-lg border-opacity-50">
        border-4
    </div>

    <div class="w-full h-[200px] mx-4 my-4 shadow-lg">
        shadow-lg
    </div>
    <div class="w-full h-[200px] mx-4 my-4 shadow-lg shadow-orange-500">
        border-orange-500
    </div>
    <div class="brightness-200 bg-green-600">brightness-200</div>
    <input class="caret-red-500" placeholder="caret-red-500" />
    <div class="columns-4">
        <div class="bg-red-500">第一列</div>
        <div class="bg-green-500">第二列</div>
        <div class="bg-blue-500">第三列</div>
        <div class="bg-orange-500">第四列</div>
    </div>
    <div class="columns-md">
        <div class="bg-red-500">第一列</div>
        <div class="bg-green-500">第二列</div>
    </div>
    <div class="container">
        container
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
        }
    }
}

</script>


<style scoped></style>
