<template>
  <div id="app-menu" class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
    <ul>
      <li>
        <NuxtLink to="/list">
        <fa icon="list-ul"></fa>&nbsp;List</NuxtLink>
      </li>
      <li><NuxtLink to="/new"><fa icon="plus-square"></fa>&nbsp;New</NuxtLink></li>
      <li><NuxtLink to="/search"><fa icon="search"></fa>&nbsp;Search</NuxtLink></li>
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
   height: 2.5rem;
   line-height: 2.5rem;
  }

  li a {
    color: #000;
  }
</style>
