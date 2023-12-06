<template>
  <main>
    <header>
      <span>Main Course</span>
      <button @click="visibilityHandle">Keranjang</button>
    </header>
    <div class="container">
      <div class="cards" v-for="(menu, index) in menus" :key="index">
        <img :src="menus[index].gambar" alt="">
        <span>{{ menus[index].nama }}</span>
        <p>Rp. {{ menus[index].harga }}</p>
        <button>+ Tambahkan Ke Keranjang</button>
      </div>
    </div>
  </main>
  <div v-bind:class="visibility === 0 ? 'cart ' : 'cart'">
    <div class="header">
      <span>Main Course</span>
      <button @click="visibilityHandle">&times;</button>
    </div>
    <div class="foods" v-for="(menu, index) in menus" :key="index">
      <img :src="menus[index].gambar" alt="" class="cart-image">
      <div class="detail">
        <span>FOod Name</span>
        <p>Price</p>
        <div class="note-and-qty">
          <p>note asdnaskndkanskdnaskdnas</p>
          <div class="qty">
            <button @click="decrement">-</button>
            <span>{{ count }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div v-bind:class="visibility === 0 ? 'overlay ' : 'overlay'"></div>
</template>

<script setup lang="ts">
import { fetchMenu } from '@/services/Endpoint';
import { ref } from 'vue'
import Cart from '../components/CartComponent.vue'

const menus = ref()

fetchMenu().then((data) => {
  menus.value = data.datas
  console.log(menus.value[1].nama)
})

const visibility = ref(0)
function visibilityHandle() {
  visibility.value === 0 ? visibility.value + 1 : visibility.value - 1
}

const count = ref(1)
function increment() {
  count.value++
}

function decrement() {
  if (count.value === 1) {
    count.value === 1
  } else { count.value-- }
}

</script>

<style scoped>
main {
  font-family: Poppins;
  margin-left: 30px;
  margin-right: 30px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 50px;
}

header button {
  width: 120px;
  height: 35px;
  border: 1px solid rgb(0, 145, 173);
  border-radius: 5px;
  background-color: white;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
}

.cards {
  /* background-color: aqua; */
  padding: 20px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 35px 5px lightgray;
}

.cards img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}


.cards span {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}

.cards p {
  color: rgb(0, 145, 173);
  font-weight: 600;
}

.cards button {
  border-radius: 20px;
  width: 200px;
  height: 75px;
  color: white;
  background-color: rgb(0, 145, 173);
  border: none;
  padding-right: 20px;
  padding-left: 20px;
  line-height: 1.5;
}

button {
  cursor: pointer;
}

.cart {
  font-family: Poppins;
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  background-color: white;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
}

.hidden {
  display: none;
}

.cart .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
}

.cart .header button {
  background: none;
  border: none;
  font-size: 20pt;
}

.cart .cart-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
</style>