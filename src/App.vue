<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-16 23:11:38
 * @LastEditors: ${author}
import { RouterView } from 'vue-router';
import { RouterView } from 'vue-router';
 * @LastEditTime: 2023-08-15 13:22:37
-->
<template>
    <Suspense>
        <RouterView></RouterView>
    </Suspense>
</template>
<script lang="ts">
import Info from '@/components/Info.vue';
import { Suspense } from 'vue';
import { RouterView } from 'vue-router';
export default {
    data() {
        return {
        }
    },
    components: {
        Info,
        RouterView,
    },
    methods: {
        toText() {
            this.$router.push('/text')
        }
    }
}

</script>


<style scoped></style>
