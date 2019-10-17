<template>
  <div class="container-fluid sh-top_alert">
    <base-alert 
      :type="type" 
      dismissible>
      <slot />
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </base-alert>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    content: {
      type: String,
      default:
        'Doloremque non sint, a quam facilis consectetur possimus asperiores. Dicta earum adipisci ipsam.'
    }
  }
}
</script>
<style lang="scss">
.sh-top_alert {
  .alert {
    z-index: 1;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: -71px;
    border-radius: unset;
  }
}
</style>
