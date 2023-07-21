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
    <div class="text-red-300 after:content-['\_↗']">
        content
    </div>
    <p class="contrast-0">contrast-0</p>
    <p class="contrast-200">contrast-200</p>
    <div class="flex flex-wrap gap-4">
        <button class="cursor-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">自动（auto）</button>
        <button class="cursor-default px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">默认（default）</button>
        <button class="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">链接指针（pointer）</button>
        <button class="cursor-wait px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">等待（wait）</button>
        <button class="cursor-text px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">文本（text）</button>
        <button class="cursor-move px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">移动（move）</button>
        <button class="cursor-help px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">帮助（help）</button>
        <button
            class="cursor-not-allowed px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">禁用（not-allowed）</button>
        <button class="cursor-none px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">隐藏（none）</button>
        <button
            class="cursor-context-menu px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">上下文菜单（context-menu）</button>
        <button class="cursor-progress px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">进度（progress）</button>
        <button class="cursor-cell px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">单元格（cell）</button>
        <button
            class="cursor-crosshair px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">十字线（crosshair）</button>
        <button
            class="cursor-vertical-text px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">垂直文本（vertical-text）</button>
        <button class="cursor-alias px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">链接别名（alias）</button>
        <button class="cursor-copy px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">复制（copy）</button>
        <button class="cursor-no-drop px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">不可拖放（no-drop）</button>
        <button class="cursor-grab px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">抓取（grab）</button>
        <button class="cursor-grabbing px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">抓取中（grabbing）</button>
        <button
            class="cursor-all-scroll px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">全方向滚动（all-scroll）</button>
        <button
            class="cursor-col-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">列调整（col-resize）</button>
        <button
            class="cursor-row-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">行调整（row-resize）</button>
        <button
            class="cursor-n-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">北向调整（n-resize）</button>
        <button
            class="cursor-e-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东向调整（e-resize）</button>
        <button
            class="cursor-s-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">南向调整（s-resize）</button>
        <button
            class="cursor-w-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西向调整（w-resize）</button>
        <button
            class="cursor-ne-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东北向调整（ne-resize）</button>
        <button
            class="cursor-nw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西北向调整（nw-resize）</button>
        <button
            class="cursor-se-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东南向调整（se-resize）</button>
        <button
            class="cursor-sw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西南向调整（sw-resize）</button>
        <button
            class="cursor-ew-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东西向调整（ew-resize）</button>
        <button
            class="cursor-ns-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">南北向调整（ns-resize）</button>
        <button
            class="cursor-nesw-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">东北到西南调整（nesw-resize）</button>
        <button
            class="cursor-nwse-resize px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">西北到东南调整（nwse-resize）</button>
        <button class="cursor-zoom-in px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">放大（zoom-in）</button>
        <button class="cursor-zoom-out px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">缩小（zoom-out）</button>
    </div>
    <div class="divide-y divide-blue-500 divide-opacity-50 divide-x-8">
        <p>这是第一段文字。</p>
        <p>这是第二段文字。</p>
        <p>这是第三段文字。</p>
        <p>这是第四段文字。</p>
    </div>
    <div class="w-full flex flex-row justify-center">
        <div class="drop-shadow-2xl bg-white w-64 aspect-square">
            drop-shadow-2xl
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-blue-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 fill-orange-400">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    <div class="flex">
        <div class="flex-none w-14 h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-initial w-64 bg-blue-500 mx-2">
            flex-initial w-64
        </div>
        <div class="flex-initial w-32 bg-blue-500 mx-2">
            flex-initial w-32
        </div>
    </div>
    <div class="flex">
        <div class="flex-none h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-1 w-64  h-14 bg-blue-500 mx-2">
            flex-1
        </div>
        <div class="flex-1 w-32  h-14 bg-blue-500 mx-2">
            flex-1
        </div>
    </div>
    <div class="flex">
        <div class="flex-none h-14 bg-blue-500 mx-2">
            flex-none
        </div>
        <div class="flex-auto w-64  h-14 bg-blue-500 mx-2">
            flex-auto
        </div>
        <div class="flex-auto w-32  h-14 bg-blue-500 mx-2">
            flex-auto
        </div>
    </div>
    <div class="flex flex-row">
        <div class="basis-1/4  h-14 bg-blue-500 mx-2">basis-1/4</div>
        <div class="basis-1/4  h-14 bg-blue-500 mx-2">basis-1/4</div>
        <div class="basis-1/2  h-14 bg-blue-500 mx-2">basis-1/2</div>
    </div>
    <div class="flex flex-row">
        <div class="flex-grow  h-14 bg-blue-500 mx-2">flex-grow</div>
        <div class="flex-grow-0 h-14 bg-blue-500 mx-2">flex-grow-0</div>
        <div class="flex-grow-[2] h-14 bg-blue-500 mx-2">flex-grow-[2]</div>
    </div>
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink w-64 h-14 bg-blue-500 mx-2">flex-shrink</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink-0 w-64 h-14 bg-blue-500 mx-2">flex-shrink-0</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
    <div class="flex flex-row">
        <div class="h-14 w-14 bg-blue-500 mx-2">text</div>
        <div class="flex-shrink-[2] w-64 h-14 bg-blue-500 mx-2">flex-shrink-[2]</div>
        <div class=" h-14 w-14 bg-blue-500 mx-2">text</div>
    </div>
    <p class="font-sans">这是无衬线字体文本</p>
    <p class="font-serif">这是衬线字体文本</p>
    <p class="font-mono">这是等宽字体文本</p>
    <p class="font-['Times_New_Roman']">这是Times New Roman字体</p>
    <p class="font-black">font-black</p>

    <div class="grid md:grid-cols-3 grid-cols-2 gap-2">
        <div class="bg-red-500 h-16"></div>
        <div class="bg-blue-500 h-16"></div>
        <div class="bg-green-500 h-16"></div>
        <div class="bg-yellow-500 h-16"></div>
        <div class="bg-purple-500 h-16"></div>
        <div class="bg-pink-500 h-16"></div>
    </div>

    <div class="my-2 h-8 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"></div>
    <div class="my-2 h-8 bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-blue-500 to-90%">
    </div>
    <div class="grayscale">
        <img src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
    </div>
    <div class="grid grid-flow-col auto-cols-auto">
        <div class="bg-blue-500 h-16">auto-cols-auto</div>
        <div class="bg-yellow-500 h-16">auto-cols-auto</div>
        <div class="bg-pink-500 h-16">auto-cols-auto</div>
    </div>
    <div class="grid grid-flow-col auto-cols-min">
        <div class="bg-blue-500 h-16">auto-cols-min</div>
        <div class="bg-yellow-500 h-16">auto-cols-min</div>
        <div class="bg-pink-500 h-16">auto-cols-min</div>
    </div>
    <div class="grid grid-flow-col auto-cols-max">
        <div class="bg-blue-500 h-16">auto-cols-max</div>
        <div class="bg-yellow-500 h-16">auto-cols-max</div>
        <div class="bg-pink-500 h-16">auto-cols-max</div>
    </div>
    <div class="grid grid-flow-col auto-cols-fr">
        <div class="bg-blue-500 h-16">auto-cols-fr</div>
        <div class="bg-yellow-500 h-16">auto-cols-fr</div>
        <div class="bg-pink-500 h-16">auto-cols-fr</div>
    </div>
    <div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)]">
        <div class="bg-blue-500 h-16">auto-cols-[minmax(0,_2fr)]</div>
        <div class="bg-yellow-500 h-16">auto-cols-[minmax(0,_2fr)]</div>
        <div class="bg-pink-500 h-16">auto-cols-[minmax(0,_2fr)]</div>
    </div>
    <div class="grid grid-flow-row auto-rows-max my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-max h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-max h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-max h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-min my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-min h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-min h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-min h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-fr my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-fr h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-fr h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-fr h-24</div>
    </div>
    <div class="grid grid-flow-row auto-rows-auto my-4">
        <div class="bg-blue-500 h-8 w-1/2">auto-rows-auto h-8</div>
        <div class="bg-yellow-500 h-16 w-1/3">auto-rows-auto h-16</div>
        <div class="bg-pink-500 h-24 w-1/4">auto-rows-auto h-24</div>
    </div>

    <div class="grid grid-cols-4 my-4">
        <div class="bg-red-500 h-16 col-span-3">col-span-3</div>
        <div class="bg-blue-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-green-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-yellow-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-purple-500 h-16 col-span-1">col-span-1</div>
        <div class="bg-pink-500 h-16 col-span-1">col-span-1</div>
    </div>


    <div class="grid grid-cols-4 gap-2">
        <div class="bg-red-500 h-16 col-start-3 col-end-5">col-start-2 col-end-4</div>
        <div class="bg-blue-500 h-16 col-start-2 col-end-4">col-start-2 col-end-4</div>
        <div class="bg-green-500 h-16 col-start-1 col-end-3">col-start-1 col-end-3</div>
        <div class="bg-purple-500 h-16 col-start-auto col-end-2">col-start-auto col-end-2</div>
    </div>

    <div class="grid grid-cols-2 gap-2 my-4">
        <div class="bg-red-500 row-span-3">
            <p class="h-8"></p>
        </div>
        <div class="bg-blue-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-green-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-yellow-500">
            <p class="h-8"></p>
        </div>
    </div>
    <div class="grid grid-cols-my gap-2 my-4">
        <div class="bg-red-500 row-start-1 row-end-3">
            <p class="h-8"></p>
        </div>
        <div class="bg-blue-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-green-500">
            <p class="h-8"></p>
        </div>
        <div class="bg-yellow-500">
            <p class="h-8"></p>
        </div>
    </div>

    <div class="bg-blue-500 hover:hue-rotate-30 h-[200px] aspect-square">hover:hue-rotate-30</div>
    <div class="bg-blue-500 relative w-full aspect-square my-2">
        <div class="absolute inset-1 bg-orange-500">inset-1</div>
        <div class="absolute inset-2 bg-red-500">inset-2</div>
        <div class="absolute inset-x-4 inset-y-8 bg-green-500">inset-x-4 inset-y-8</div>
    </div>

    <div class="invert-0">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert-0</div>
        </div>
    </div>
    <div class="invert">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert</div>
        </div>
    </div>
    <div class="invert-[50%]">
        <div :style="{
            backgroundImage: `url(https://duringbug.cloud:9090/img/computer_bg3.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundBlendMode: `multiply`,
        }" class="bg-cover w-[100wh] h-[100vh] flex flex-col justify-center items-center">
            <div class=" aspect-square w-1/4">invert</div>
        </div>
    </div>

    <p class="my-4">This is a sample text to demonstrate different letter spacing values.</p>

    <p class="my-2 leading-loose">tracking-tighter: <span class="text-red-500 tracking-tighter">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>
    <p class="my-2 leading-loose">tracking-tight: <span class="text-blue-500 tracking-tight">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-normal: <span class="text-green-500 tracking-normal">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>
    <p class="my-2 leading-loose">tracking-wide: <span class="text-yellow-500 tracking-wide">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-wider: <span class="text-purple-500 tracking-wider">tailwindcss:只需书写 HTML 代码，无需书写
            CSS，即可快速构建美观的网站。</span></p>
    <p class="my-2 leading-loose">tracking-widest: <span class="text-orange-500 tracking-widest">tailwindcss:只需书写 HTML
            代码，无需书写 CSS，即可快速构建美观的网站。</span>
    </p>


    <p class="my-2 leading-none">leading-none</p>
    <p class="my-2 leading-tight">leading-tight</p>
    <p class="my-2 leading-snug">leading-snug</p>
    <p class="my-2 leading-normal">leading-normal</p>
    <p class="my-2 leading-relaxed">leading-relaxed</p>
    <p class="my-2 leading-loose">leading-loose</p>
    <p class="my-2 leading-3">leading-3</p>
    <p class="my-2 leading-4">leading-4</p>
    <p class="my-2 leading-5">leading-5</p>
    <p class="my-2 leading-6">leading-6</p>
    <p class="my-2 leading-7">leading-7</p>
    <p class="my-2 leading-8">leading-8</p>
    <p class="my-2 leading-9">leading-9</p>
    <p class="my-2 leading-10">leading-10</p>

    <div class="my-4">
        <h2 class="text-xl font-bold">Unordered List</h2>
        <ul class="list-disc pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    <div class="my-4">
        <h2 class="text-xl font-bold">Ordered List</h2>
        <ol class="list-decimal pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
    <div class="my-4">
        <h2 class="text-xl font-bold">Square List</h2>
        <ol class="list-square pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>

    <div class="my-4">
        <h2 class="text-xl font-bold">Roman List</h2>
        <ol class="list-roman pl-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>

    <div class="h-screen p-40 flex justify-center">
        <ul class="list-image-[url(https://duringbug.cloud:9090/img/hot-deal.png)]">
            <li class="text-xl my-2 px-2">TailwindCSS</li>
            <li class="text-xl my-2 px-2">BulmaCSS</li>
            <li class="text-xl my-2 px-2">Bootstrap</li>
            <li class="text-xl my-2 px-2">Material UI</li>
            <li class="text-xl my-2 px-2">Chakra UI</li>
        </ul>
    </div>
    <div class="w-[50px]">
        <p class="line-clamp-[10]">在 Tailwind CSS 中，lineClamp 是一个自定义类的配置项，用于控制文本的行数。它允许你通过添加 .line-clamp-{n}
            类来限制一个元素内文本的行数，其中
            {n}
            是可选的数字，表示要显示的最大行数。超过时被省略号截断。</p>
    </div>

    <div class="flex justify-center items-center h-screen">
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
            <h1 class="text-2xl font-bold mb-4">Tailwind CSS 最大宽度演示</h1>
            <p class="text-gray-600">
                新的变更日志模板 + 有史以来最大的 Tailwind UI 更新<br />
                日期2023 年 4 月 24 日星期一<br />

                亚当·瓦坦<br />
                @亚当瓦森<br />
                自从我们 12 月份发布协议模板以来，我还没有分享过 Tailwind UI 更新，但这并不是因为我们不忙。<br />

                在过去的四个月里，我们在 Tailwind UI 上所做的工作可能比以往任何时候都多，并且最终完成了我们打算实现的目标，我很高兴能为您展示一切！<br />

                ​
                提交：为您的下一个想法提供漂亮的变更日志模板<br />
                就在几天前，我们发布了Commit，这是我们为 Tailwind UI 设计的全新变更日志模板 - 当然是使用 Tailwind CSS 和 Next.js 构建的。<br />


            </p>
            <p class="text-gray-600 mt-4">
                公共变更日志已经成为一种非常流行的方式，可以让人们了解您一直在做的事情，并保持责任感并增强您的运输能力。当然，无论如何，它们都不是一个新概念，但我认为直到Linear开始发布到他们的变更日志网站后，其他人才对使用它们几乎作为公司博客的替代品感到兴奋。

                Commit 是我们对现代产品变更日志的看法，设计为单页网站，既可以作为您的项目主页，也可以作为您一直在处理的所有内容的提要。
            </p>
        </div>
    </div>
    <div class="bg-green-300 
                mx-16
                space-y-4
                p-2
                justify-between
                grid grid-rows-3 
                grid-flow-col">
        <img title="object-left-top" class="object-none object-left-top bg-gree-200 w-24 h-24 border-4 my-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-left" class="object-none object-left bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-left-bottom"
            class="object-none object-left-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-top" class="object-none object-top bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-center"
            class="object-none object-center bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-bottom"
            class="object-none object-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-right-top" class="object-none object-right-top bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png"> <img title="object-right"
            class="object-none object-right bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
        <img title="object-right-bottom" class="object-none object-right-bottom bg-gree-200 w-24 h-24 border-4"
            src="https://duringbug.cloud:9090/img/GFG115.png">
    </div>
    <div class="flex">
        <div class="order-last">1</div>
        <div class="order-2">2</div>
        <div class="order-1">3</div>
        <div class="order-first">4</div>
    </div>
    <button
        class="shadow-2xl m-2 outline outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-blue-500</button>
    <button
        class="shadow-2xl m-2 outline outline-offset-1 outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-offset-1</button>
    <button
        class="shadow-2xl m-2 outline outline-offset-1 outline-4 outline-blue-500 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">outline-4</button>

    <input type="text" class="placeholder-red-500 placeholder-opacity-50"
        placeholder="placeholder-red-500 placeholder-opacity-50">
    <br />
    <button
        class="ring-4 ring-offset-2 ring-offset-red-500 ring-blue-500 ring-opacity-70 shadow-2xl m-2 border border-white bg-orange-400 rounded-lg w-[100px] aspect-video">
    </button>
    <div class="flex justify-center items-center h-screen">
        <div class="rotate-0">No rotation</div>
        <div class="rotate-45">Rotate 45 degrees</div>
        <div class="rotate-90">Rotate 90 degrees</div>
        <div class="rotate-180">Rotate 180 degrees</div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div class="saturate-0 bg-orange-500">0% saturation</div>
        <div class="saturate-50 bg-orange-500">50% saturation</div>
        <div class="saturate-100 bg-orange-500">100% saturation</div>
        <div class="saturate-150 bg-orange-500">150% saturation</div>
    </div>

    <div class="flex justify-center items-center h-screen">
        <div class="scale-0">0% scale</div>
        <div class="scale-50">50% scale</div>
        <div class="scale-100">100% scale</div>
        <div class="scale-150">150% scale</div>
    </div>
    <div class="bg-orange-500 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500">bg-orange-500 sm:bg-red-500
        md:bg-blue-500 lg:bg-green-500
        xl:bg-yellow-500
    </div>
    <div class="my-2 mx-auto snap-y h-[300px] w-[500px] overflow-y-scroll">
        <div class="scroll-mt-6 snap-start">
            <img class="" src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg2.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg1.jpg" />
        </div>
        <div class="scroll-mt-6 snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
    <div class="my-2 scroll-pt-6 mx-auto snap-y h-[300px] w-[500px] overflow-y-scroll">
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg3.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg2.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg1.jpg" />
        </div>
        <div class="snap-start">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
    <div class="my-2 mx-auto  w-[500px] sepia-[50%]">
        <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
    </div>

    <div class="my-2 mx-auto w-[500px] rounded-3xl overflow-hidden -skew-x-6">
        <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
    </div>

    <div class="my-2 mx-auto w-[500px] overflow-hidden hover:-skew-x-3 rounded-2xl">
        <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
    </div>

    <div class="flex space-x-4 justify-center">
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">01</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">02</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">03</div>
    </div>
    <div class="flex -space-x-4 justify-center">
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">01</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">02</div>
        <div class="rounded-lg w-[50px] aspect-square bg-orange-500">03</div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-none stroke-red-500">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-none stroke-red-500 stroke-2">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <div class="supports-grid:grid supports-grid:grid-cols-2">
        <div class="bg-blue-500 h-8 w-full"></div>
        <div class="bg-yellow-500 h-8 w-full"></div>
        <div class="bg-pink-500 h-8 w-full"></div>
    </div>
    <div class="supports-[display:grid]:grid supports-[display:grid]:grid-cols-2">
        <div class="bg-blue-500 h-8 w-full"></div>
        <div class="bg-yellow-500 h-8 w-full"></div>
        <div class="bg-pink-500 h-8 w-full"></div>
    </div>
    <button data-size="large" class="data-[size=large]:bg-blue-500 my-button w-[50px] h-[25px]">small</button>
    <button data-size="small" class="data-[size=large]:bg-blue-500 my-button w-[50px] h-[25px]">small</button>
    <button data-size="large" class="data-large:bg-blue-500 w-[50px] h-[25px]">large</button>

    <p class="text-sky-400/20">text-sky-400</p>
    <p class="text-sky-400/40">text-sky-400</p>
    <p class="text-sky-400/60">text-sky-400</p>
    <p class="text-sky-400/80">text-sky-400</p>
    <p class="text-sky-400">text-sky-400</p>



    <p class="underline decoration-sky-500/100">decoration-sky-500</p>

    <p class="underline decoration-sky-500/100 decoration-4">decoration-sky-500</p>
    <p class="indent-0">This text has no indent.</p>
    <p class="indent-4">This text has a 4px indent.</p>
    <p class="indent-8">This text has an 8px indent.</p>
    <div class="flex justify-center items-center h-screen">
        <p class="underline decoration-sky-500/100 underline-offset-1">underline-offset-1</p>
        <p class="underline decoration-sky-500/100 underline-offset-2">underline-offset-2</p>
        <p class="underline decoration-sky-500/100 underline-offset-4">underline-offset-4</p>
        <p class="underline decoration-sky-500/100 underline-offset-8">underline-offset-8</p>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl hover:origin-top-left hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>

    <div class="flex justify-center items-center h-screen">
        <div class="delay-700 w-[200px] aspect-square bg-blue-500 hover:bg-orange-500">delay-700</div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl delay-700 hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>

    <div class="flex justify-center items-center h-screen">
        <div class="my-2 mx-auto w-[500px] overflow-hidden rounded-2xl duration-150 hover:origin-[33%_75%] hover:rotate-12">
            <img src="https://duringbug.cloud:9090/img/computer_bg4.jpg" />
        </div>
    </div>

    <div class="flex justify-center items-center h-screen">
        <div class="hover:rotate-12 transition w-[200px] aspect-square duration-150 bg-blue-500 hover:bg-orange-500">
            delay-700</div>
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


<style scoped>
.my-button {
    background-color: theme('data.primaryColor');
    font-size: theme('data.fontSize.small');
}
</style>
