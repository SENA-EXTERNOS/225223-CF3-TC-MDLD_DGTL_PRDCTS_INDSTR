<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info.ch
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7
        p.mb-0 Apreciado aprendiz, bienvenido a este momento de educación orientado a la identificación de las necesidades del cliente y del ciclo de vida del producto que tiene cuatro fases: introducción, crecimiento, madurez y declive, correspondientes al momento en que se crean modelos digitales de objetos de tipo industrial. Por tal motivo, es importante tener identificada la necesidad del cliente, entenderla y comprenderla, lo que equivale al valor agregado del producto industrial final ya que, al conocer tal necesidad, se generan ventajas y una capacidad de acción en el momento de comercializar o poner el producto en el mercado. Antes de empezar, se sugiere observar y analizar el siguiente video, el cual tiene como propósito, dar a conocer el proceso de diseño en sus fases de idea, investigación, planificación, creación de prototipos, prueba de prototipos, cadena de suministro y diseño definitivo; así mismo, se da cuanta de los diferentes métodos que se tienen para la selección acertada de la propuesta del producto.
      .col-md-5
        figure
          img(src='@/assets/curso/intro/img1.png', alt="Joven sonriendo")

    figure.mb-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/-kfawFg5wXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
