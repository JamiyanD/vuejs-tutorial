<template>
  <div>
    <div>
      <p><slot name="title"></slot></p>
      <hr />
    </div>
    <div>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid pink;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

small {
  color: red;
}
</style>