<template>
  <div>
   <a-layout-header>

     <div class="user-detail">
        Welcome, User Name
    </div>

    <div class="hospital-detail">
      <!-- Header notifications -->
      <div class="notifications">
        <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-icon type="bell" theme="filled" />
        </a>
        <a-menu slot="overlay" class="notifications-dropdown">
          <a-menu-item key="0">
            Notifications here 
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      </div>
      <!-- Header Logo -->
      <div class="login-logo">
        <img
        src="https://demoapi.qmaid.co/Logos/2020_10_22.14_48_51.jpg" 
        logo 
        hendling 
        for 
        temp
        class="logo"
        />
        <span class="title">Hospital Name</span>
      </div>
      <!-- Header Lang Select -->
      <div>
        <a-select :default-value="langData[0]" style="width: 120px">
          <a-select-option v-for="lang in langData" :key="lang">
            {{ lang }}
          </a-select-option>
        </a-select>
      </div>


    </div>

  </a-layout-header>

</div>
</template>


<script>
export default {
  name : 'Header',
  data(){
    return{
      langData: ['English', 'German', 'Chinese', 'Arabic']
    }
  }
};
</script>

