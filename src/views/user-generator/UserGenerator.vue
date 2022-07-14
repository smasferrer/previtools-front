<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="header-content">
    <h1>Título del contenido</h1>
  </div>

  <!-- Tabla -->
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="cards">
        <b-card no-body>
          <h3>Tabla</h3>
          <el-table :data="tableData" class="tabla">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </b-card>
      </div>
    </el-col>
  </el-row>
  <!-- fin tabla -->
  <!-- Buttons -->
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple" />
      <div class="cards">
        <div class="components">
          <b-card no-body>
            <h3>Botones</h3>
            <el-row :gutter="20">
              <el-col :span="12">
                <h5>Activos</h5>
                <el-row class="mb-4">
                  <button class="pt-primary">Primary</button>
                  <button class="pt-secondary">Secondary</button>
                  <button class="pt-other">other</button>
                </el-row>
              </el-col>
              <el-col :span="12">
                <h5>Deshabilitados</h5>
                <el-row class="mb-4">
                  <button class="pt-primary" disabled>Primary</button>
                  <button class="pt-secondary" disabled>Secondary</button>
                  <button class="pt-other" disabled>other</button>
                </el-row>
              </el-col>
            </el-row>
          </b-card>
        </div>
      </div>
    </el-col>
  </el-row>
  <!-- Fin buttons -->
  <!-- Inputs -->
  <el-row :gutter="20">
    <!-- Inputs -->
    <el-col :span="16">
      <div class="grid-content ep-bg-purple" />
      <div class="cards">
        <div class="components">
          <b-card no-body>
            <h3>Inputs</h3>
            <h5>Input Text</h5>
            <el-row class="mb-2">
              <el-input v-model="input1" class="w-100 m-2" size="large" placeholder="Escriba algo" />
              <el-input v-model="input1" class="w-100 m-2" size="large" placeholder="Please Input"
                :prefix-icon="Search" />
            </el-row>
            <h5>Select</h5>
            <el-row class="mb-2">
              <el-select v-model="value" class="w-100 m-2" placeholder="Select" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-row>
            <h5>Radios</h5>
            <el-row class="mb-2">
              <el-radio-group v-model="radio">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
              </el-radio-group>
            </el-row>
          </b-card>
        </div>
      </div>
    </el-col>
    <!-- Arbolito -->
    <el-col :span="8">
      <div class="grid-content ep-bg-purple" />
      <div class="cards">
        <div class="components">
          <b-card no-body>
            <h3>Tree</h3>
            <h5>Arbol básico</h5>
            <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]" :props="defaultProps" />
          </b-card>
        </div>
      </div>
    </el-col>
  </el-row>
  <!-- Fin Inputs -->

</template>

<script>
//Data para table
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  }
}

//Data para select

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

//Info para radio buttons

import { ref } from 'vue'

const radio = ref(3)

//data para tree (Arbol)
const defaultProps = {
  children: 'children',
  label: 'label',
}
const data = [
  {
    id: 1,
    label: 'Nivel 1',
    children: [
      {
        id: 4,
        label: 'Nivel 1 de 1',
        children: [
          {
            id: 9,
            label: 'Nivel 1 de 1 de 1 xd',
          },
          {
            id: 10,
            label: 'Nivel 1 de 1 de 1 xd gemelo',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Nivel 2',
    children: [
      {
        id: 5,
        label: 'Hijo del nivel 2',
      },
      {
        id: 6,
        label: 'Hermano del hijo del nivel 2',
      },
    ],
  },
  {
    id: 3,
    label: 'Nivel 3 tío',
    children: [
      {
        id: 7,
        label: 'Sobrino favorito del tío',
      },
      {
        id: 8,
        label: 'El vecino del tío que lo llama tío',
      },
    ],
  },
]
</script>

<style lang="scss">
.el-button {
  padding: 12px 24px;
}

.tabla {
  width: 100%;
  padding: 0;
}

.el-table th.el-table__cell>.cell {
  color: #000;
}

.mainFrame .tabla .el-table__cell {
  padding: 16px 0;
}
</style>