<template>
    <div v-if="teste">
      <div class="card" style="width:250px;">
        <img class="card-img-top" src="https://iconproducts.com/wp-content/uploads/2018/08/logo-icon-1.jpg" alt="Card image">
         <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-info fade show" role="alert">
          <h4 class="alert-heading">No profiles saved</h4>
          <p></p>
      </div>
    </div>
</template>

<script>
export default {
    el:"#app",
    name: 'contactos',
    props:['id','name','contact','email','profilepic'],
    data: function(){
        return{
            teste: undefined
        }
    }
}
</script>