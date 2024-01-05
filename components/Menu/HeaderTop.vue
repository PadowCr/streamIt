<template>
    <div class="header-top-container">
        <div class="logo-container">
            <img class="logo-image" src="/Logo.png"/>
            <p class="logo-title">StreamIt</p>
        </div>

        <div class="menu-container">
            <NuxtLink :to="menuItem.link" class="menu-link" v-for="(menuItem, n) in menuItems" :key="n">
                {{ menuItem.title }}
            </NuxtLink>
        </div>

        <div class="right-buttons-container">
            <NuxtLink to="/search"><i class="uil uil-search icon-button"></i></NuxtLink>

            <NuxtLink to="/notifications"><i class="uil uil-bell icon-button">
                <div class="notification-circle"></div>
            </i></NuxtLink>

            <div class="avatar-container">
                <NuxtLink to="/profile/"><img class="avatar-image" src="/img/avatars/avatar.png" /></NuxtLink>
                <i class="uil uil-angle-down avatar-arrow-button"></i>
            </div>
        </div>
    </div>
</template>


<script setup>
import menuItems from '~/assets/json/menuItems.json'
</script>


<style scoped>
.header-top-container {
    @apply w-full py-8 px-16 bg-transparent flex items-center justify-between;
    @apply fixed z-50 left-0 top-0;
}


/*------- LOGO CONTAINER -------*/
.logo-container {
    @apply flex items-center gap-2.5;
}

.logo-image {
    @apply w-9 aspect-square rounded-full;
}

.logo-title {
    @apply font-fredoka text-2xl tracking-wide font-semibold text-white;
}


/*------- LOGO CONTAINER -------*/
.menu-container {
    @apply flex items-center gap-8;
}

.menu-link {
    @apply text-base font-normal tracking-wide text-grey1 capitalize;
    @apply hover:text-white transition-all duration-300 hover:transition-all hover:duration-300;
}

.router-link-active {
    @apply text-white font-semibold;

}


/*------- RIGHT CONTAINER -------*/
.right-buttons-container {
    @apply flex justify-end items-center gap-6;
}

.icon-button {
    @apply text-xl text-grey1 relative;
    @apply hover:text-white transition-all duration-300 hover:transition-all hover:duration-300;
}

.notification-circle {
    @apply w-1.5 h-1.5 bg-gradient-to-tr from-red to-hover-red rounded-full;
    @apply absolute top-0.5 right-1;
}

.avatar-container {
    @apply flex items-center gap-1.5;
}

.avatar-image {
    @apply w-9 aspect-square rounded-full border-white border border-solid;
}

.avatar-arrow-button {
    @apply text-xl text-white;
}
</style>