<template>
  <div id="app">
    <ranek-header />
    <main>
      <router-view class="view" />
    </main>
    <ranek-footer />
  </div>
</template>

<script>
import RanekHeader from "@/components/RanekHeader.vue";
import RanekFooter from "@/components/RanekFooter.vue";

export default {
  components: {
    RanekHeader,
    RanekFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

ul {
  list-style: none;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}

input, textarea {
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  border-radius: 4px;
  width: 100%;
  border: 1px solid white;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  padding: 15px;
  transition: all 0.3s;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87F;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 0.3s;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
} 
</style>
