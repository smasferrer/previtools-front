<script setup>
</script>

<template>
  <div class="header-content">
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
    <el-col :span="12">
      <div class="grid-content ep-bg-purple" />
      <div class="cards">
        <div class="components">
          <b-card no-body>
            <h3>Botones</h3>
            <el-row class="mb-4">
              <button class="pt-primary">Primary</button>
              <button class="pt-secondary">Secondary</button>
              <button class="pt-other">other</button>
            </el-row>
          </b-card>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple" />Es el mismo
    </el-col>
  </el-row>
  <!-- card -->

</template>

<script>
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