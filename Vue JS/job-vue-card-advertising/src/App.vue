<template>
  <div id="app" class="card">
    <div class="container bg-light p-3 mx-auto">
      <div class="header align-middle">
        <div class="header-box align-middle">
          <figure>
            <img class="img" src="https://play.spotzu.com/articles/spotzu-solo-logo.png" alt="">
          </figure>
          <span class="title-marca">Spotzu 
            <p class="advertising">Publicidad</p>
          </span>
        </div>
        <div class="bar-dots">
          <i class="dots bx bx-dots-vertical-rounded"></i>
        </div>
      </div>
      <div class="content bg-dark">
        <img class="image-post" src="https://play.spotzu.com/articles/mlk_ad.jpg" alt="">
      </div>
      <div class="info">
        <a class="text-info" href="https://www.spotzu.com/">Más Información..</a>
        <i class='arrow bx bxs-chevron-right ml-auto'></i>
      </div>
      <div class="actions align-middle">
        <div class="box-actions mt-3 align-middle">
          <i class="heart bx bxs-heart mr-3"></i>
          <i class="comment bx bx-comment-detail mr-3"></i>
          <i class="send bx bx-send mr-3"></i>
        </div>
        <div class="action-save">
          <i class="bx bx-bookmark-alt"></i>
        </div>
      </div>
      <div class="likes">155 Me Gusta</div>
      <div class="description">
        <span class="title-desc">Spotzu:</span>
        <span class="text-desc">Es la plataforma para deportistas que te permite competir y ganar premios retando a tus compañeros de siempre o descubriendo nuevos rivales en los rankings de la App.</span>
      </div>
    </div>    
  </div>
</template>

<script>

</script>

<style>

.card {
  padding: 1.25rem;
  margin: auto;
}

.container {
  width: 100%;
  border-radius: 0.5rem;
}

.header {
  display:flex;
  justify-content: space-between;
  align-items:center;
  height: 30px;
}

.header-box {
  display: flex;
  align-items: center;
}
.title-marca {
  font-size: 0.875em;
  line-height: 1.25em;
  font-weight: 600;
  margin-left: 0.35rem;
  height: 30px;
  margin-bottom: 5px;
}
.advertising{
  font-size: 10px;
}
.img{
  margin-top: 15px;
  display:flex;
  width: 25px;
  height: 25px;
  border-radius: 100%;
}
.bar.dots{
  display: flex;
  align-items: center;
}
.dots{
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: gray;
  cursor: pointer;
}
.content{
  height: 20rem;
  width: 100%;
  margin-top: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
}
.image-post{
  height:100%;
  width: 100%;
  object-fit:contain;
}
.info {
  width: 100%;
  height: 35px;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background: brown;
  display: flex;
  align-items: center;
  padding: 10px;
}
.text-info{
  font-size: 13px;
  font-weight: 500;
  color: white!important;;
}
.arrow{
  color: white;

}
.actions{
  height: 30px;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box-actions{
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comment{
  cursor:pointer;
  font-size: 20px;
}
.send{
  cursor:pointer;
  font-size: 20px;
}
.heart {
  cursor: pointer;
  color: red;
  font-size: 20px;
}
.action-save {
  cursor:pointer;
  align-items: center;
  font-size: 23px;
  margin-top: 3px;
}
.title-desc{
  font-size: 0.875em;
  line-height: 1.25em;
  font-weight: 600;
}
.text-desc {
  font-size: 0.875em;
  line-height: 1.25em;
  margin-left: 0.4em;
}
.likes{
  font-size: 0.875em;
  font-weight: 500;
}
</style>
