<template>
    <div>
        <sidebar/>
        <div class="container responsive">
            <router-view/>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/views/main/components/Sidebar.vue'
import MainContainer from '@/views/main/components/MainContainer.vue'
export default {
    components: { Sidebar, MainContainer },
    
}
</script>