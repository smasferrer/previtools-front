<script setup>
</script>

<template>
  <div class="header-content">
    <h3>Título de mi tabla</h3>
  </div>
  <div class="cards">
    <b-card no-body class="text-center">
      <div class="components">
        <el-table :data="tableData" class="tabla">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </b-card>
  </div>
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
.header-content{
  text-align: left;
  h3{
    font-size: 22px;
  }
}

.components{
  padding: 24px;
}
.cards{
  box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
}
.tabla {
  width: 100%;
  padding: 0;

}
.el-table th.el-table__cell>.cell{
  color: #000;
}
.mainFrame .tabla .el-table__cell{
  padding: 16px 0;
}
</style>