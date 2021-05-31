<template>
  <div id="app-menu" class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 p-0 m-0">
    <ul class="p-0 m-0">
      <li class="pl-4">
        <NuxtLink to="/blogs/list">
        <fa class="mr-3" icon="list-ul"></fa>List</NuxtLink>
      </li>
      <li class="pl-4"><NuxtLink to="/blogs/new"><fa class="mr-3" icon="plus-square"></fa>New</NuxtLink></li>
      <li class="pl-4"><NuxtLink to="/blogs/search"><fa class="mr-3" icon="search"></fa>Search</NuxtLink></li>
    </ul>
  </div>
</template>

<style>
  #app-menu {
    margin-left: 0;
    position: fixed;
    left:0;
    top: 3rem;
    height:100%;
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0 0 0 0.6rem;
  }

  li {
   font-weight: 400;
   height: 2.5rem;
   line-height: 2.5rem;
  }

  li:hover, li:active{
    background-color: #ccc;
  }

  li a {
    color: #000;
  }
  li a:hover {
    text-decoration: none;
  }
</style>
