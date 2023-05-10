<template>
  <div>
    <!-- button for toggle sidebar -->
    <span
      class="cursor-pointer p-0 text-secondary menu-icon"
      backdrop
      @click="toggleSidebar"
      ><feather-icon icon="menu"
    /></span>
    <!-- sidebar container -->
    <transition name="slide">
      <div v-if="isOpen" class="sidebar-container">
        <b-sidebar backdrop backdrop-variant="transparent ps-2 pe-1" v-model="isOpen">
          <template #header>
            <span class="cursor-pointer hide-sidebar" @click="toggleSidebar">
              <feather-icon v-b-tooltip.hover.top="'asd'" icon="arrow-left" />
            </span>
          </template>
          <div class="pt-2 pb-2 w-100" :class="isActive">
            <router-link exact-active-class="text-white btn btn-primary w-100" :to="{ name: 'home' }">
              <feather-icon size="20" icon="home" />
              <span> Home </span>
            </router-link>
          </div>
          <div class="pt-2 pb-2 w-100">
            <router-link exact active active-class="btn btn-primary" exact-active-class="text-white  w-100" :to="{ name: 'as' }">
              <feather-icon size="20" icon="home" />
              <span> Home </span>
            </router-link>
          </div>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>
        </b-sidebar>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    computed: {
        isActive() {
         val => {
            return val
         }   
        }
    },
  data() {
    return {
      isOpen: false,
      changeIcon: "F",
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {

  },
  
};
</script>

<style>
.feather-arrow-left {
  transition: transform 0.3s ease;
}
.feather-arrow-left:hover {
  transform: rotate(360deg);
}

.feather-menu {
  transition: transform 0.3s ease;
}
.feather-menu:hover {
  transform: rotate(360deg);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transition: transform 0.8s ease;
  transform: translateX(-80%);
}

.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
