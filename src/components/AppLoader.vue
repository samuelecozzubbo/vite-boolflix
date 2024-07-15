<template>
    <div class="loader-container">
      <div class="loader">Fai la tua prima ricerca</div>
    </div>
</template>
  
<script>
  export default {
    name: "AppLoader",
  };
</script>
  
<style lang="scss" scoped>
.loader{
  color: white;
  font-size: 1.5em;
}
   /*  .loader-container {
        padding-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    .loader {
        border: 8px solid rgba(255, 255, 255, 0.3); 
        border-top: 8px solid #ffffff;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    } */
</style>