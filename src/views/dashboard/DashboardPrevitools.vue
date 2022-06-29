<script setup>
// import projectLogo from '../../assets/images/general/logonew.svg'
import imageDashboard from '../../assets/images/image_dashboard.svg'
</script>

<template>
  <div class="container dashboard">
    <el-row :gutter="20">
      <el-col :span="16">
        <p>Herramientas para la productividad en entornos de desarollo</p>
        <h5>Seleccione una herramienta:</h5>
        <el-row :gutter="20">
          <el-col :span="12" class="text-left">
            <!-- <img src="../../assets/images/icons/lectornominas.png" alt=""> -->
            <a href="" class="lectorNominas">Lector de nóminas
              <cite>
                <br>Revise las nóminas creadas anteriormente
              </cite>
            </a>
          </el-col>
          <el-col :span="12" class="text-left">
            <a href="" class="cupon">Generador cupones
              <cite>
                <br>Genere n cantidad de cupones
              </cite>
            </a>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" class="text-left">
            <a href="" class="usuarios">Generador de usuarios
              <cite>
                <br>Cree usuarios de prueba
              </cite>
            </a>
          </el-col>
          <el-col :span="12" class="text-left">
            <a href="" class="trivias">Trivias
              <cite>
                <br>Cree trivias de una manera sencilla
              </cite>
            </a>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" class="text-left">
            <a href="" class="nominaselEctronicas">Nóminas electronicas
              <cite>
                <br>Revise las nóminas electrónicas generadas
              </cite>
            </a>
          </el-col>
          <el-col :span="12" class="text-left">
            <a href="" class="tareasAutomaticas">Tareas automáticas
              <cite>
                <br>Automatice algunas tareas
              </cite>
            </a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <img :src="imageDashboard">
      </el-col>
    </el-row>
    <!-- <div class="col-12 text-center mt-5">
    </div>
    <div class="col-12 text-center mt-4">
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
    </div> -->
  </div>
</template>

<style lang="scss">
.dashboard {
  padding: 5% 0;

  img {
    width: 350px;
  }

  .lectorNominas {
    background-image: url(../../assets/images/icons/lectornominas.png);
  }

  .cupon {
    background-image: url(../../assets/images/icons/cupon.png);
  }
  
  .usuarios {
    background-image: url(../../assets/images/icons/usuarios.png);
  }

  .trivias {
    background-image: url(../../assets/images/icons/trivias.png);
  }

  .nominaselEctronicas {
    background-image: url(../../assets/images/icons/nominas.png);
  }
  
  .tareasAutomaticas {
    background-image: url(../../assets/images/icons/tareas.png);
  }

  h5 {
    text-align: left;
    color: #eca900;
  }

  a {
    text-decoration: none;
    font-size: medium;
    font-weight: 600;
    color: $negro;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
    padding: 1rem 1rem 1rem 3rem;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: 10px center;

    &:hover {
      transition: all 0.3s ease;
      color: #9e7408;
      box-shadow: 0 20px 27px rgba(0, 0, 0, 0.081);

      cite {
        color: #000
      }
    }

    cite {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }

  p {
    font-size: 2.5em;
    text-align: left;
    font-weight: 700;
    line-height: 1.2em;
  }
}

.text-left {
  padding: 1.5rem 0;
  text-align: left;
}
</style>