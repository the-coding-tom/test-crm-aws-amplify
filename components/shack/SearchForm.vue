<template>
  <base-input 
    input-group-classes="input-group-merge sh-search" 
    group 
    class="mb-0">
    <template slot="prepend"><i class="fa fa-search"/></template>
    <input 
      type="text" 
      class="form-control" 
      placeholder="Looking for ..." 
      aria-label="Recipient's username" 
      aria-describedby="button-addon2">
    <div class="input-group-append">
      <button 
        id="button-addon2" 
        class="btn btn-default" 
        type="button">Search</button>
    </div>
  </base-input>
</template>
