<script setup>
import projectLogo from '../../assets/images/general/logo.png'
import cardDashboard from './components/CardDashboard.vue';
</script>

<template>
  <div class="container">
    <div class="col-12 text-center mt-5">
      <img :src="projectLogo" />
    </div>
    <div class="col-12 text-center mt-4">
      <p><strong>Herramientas para la productividad en entornos de desarollo</strong></p>
    </div>
    <div class="row mt-6">
      <div class="col-4">
        <card-dashboard iconName="fa-newspaper" text="Lector de nóminas"></card-dashboard>
      </div>
      <div class="col-4">
        <card-dashboard iconName="fa-users" text="Generador de usuarios"></card-dashboard>
      </div>
      <div class="col-4">
        <card-dashboard iconName="fa-users" text="Generador cupones"></card-dashboard>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-4">
        <card-dashboard iconName="fa-users" text="Trivias"></card-dashboard>
      </div>
      <div class="col-4">
        <card-dashboard iconName="fa-users" text="Tareas automáticas"></card-dashboard>
      </div>
      <div class="col-4">
        A
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-text-center">
        A
      </div>
    </div>
  </div>
</template>