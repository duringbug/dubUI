<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-22 22:54:01
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-22 22:57:41
-->
# vue3+vite+ts:threejs

## textures:纹理
为了能在.vue里面引入纹理图片而不会使编译器报错，创建src/vite-env.d.ts，在里面写上
```typescript
/// <reference types="vite/client" />
```