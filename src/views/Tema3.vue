<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.ch 3
      h1 Ciclo de vida del producto
    
    .bloque-texto-g.cct.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando los productos ya están realizados presentan diferentes procesos o ciclos, desde el momento en que se ponen a la venta hasta su retiro del mercado, esto indica que desde el día uno o desde su lanzamiento al mercado, ya tienen tiempo de vencimiento. En este caso no se está haciendo referencia a un alimento, que ya no puede consumirse, sino más bien, a lo que se denomina como el ciclo de vida de un producto, que es un tema transversal dentro del plan de una empresa.

    p El ciclo de vida del producto se asemeja al realizado por los seres vivos, en especial al de los humanos, contempla:

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-3
        figure
          img(src='@/assets/curso/temas/tema3/img3-2.svg', alt='Bebé')
      .col-xl-3
        figure
          img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Midiendo estatura a persona')
      .col-xl-3
        figure
          img(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Mujer embarazada')
      .col-xl-3
        figure
          img(src='@/assets/curso/temas/tema3/img3-5.svg', alt='Lápida con flores')

    p Si a este ciclo de la vida se le aplica la forma de comercializar el producto, se puede analizar cada fase así:

    .row.mb-5
      .col-xl-3
        .tarjeta.tarjeta-flip.cfct(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-6.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h1 Introducción
                    p El producto va a ser lanzado al mercado y presentado a los posibles clientes.

      .col-xl-3
        .tarjeta.tarjeta-flip.cfct(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-7.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h1 Crecimiento
                    p El producto ya está posicionado, los clientes empiezan a aceptarlo.

      .col-xl-3
        .tarjeta.tarjeta-flip.cfct(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-8.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h1 Madurez
                    p El producto ya ha cautivado a su público objetivo y está en un momento de estabilidad.

      .col-xl-3
        .tarjeta.tarjeta-flip.cfct(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3-9.svg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h1 Declive
                    p Algunos productos que llegan a esta fase pueden quedar obsoletos por un nuevo modelo y en correspondencia diseñar acciones pertinentes para cada una de estas.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7
        p Se debe tener presente que un producto recién lanzado al mercado requiere bastante publicidad para dar a conocer sus prestaciones, más aún, si se trata de algo de tipo industrial, debido a que sus funciones van a un cierto mercado que es más específico.
        p Lo anterior deja ver que cada momento se debe adecuar, según el proceso o ciclo del producto en el que se encuentre, ya que no es lo mismo tener un producto posicionado en el mercado, a uno que se está lanzando hasta ahora.
        p El recorrido que hace un producto en el mercado no es igual siempre, los factores determinan como es su evolución. Por ello, esta herramienta de gestión como lo es el ciclo del producto, sirve para el análisis del comportamiento en cada una de las etapas.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema3/img3-10.png', alt="Ciclo de vida del producto")

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.cct.p-4.mb-4
          p.mb-0 Theodore Levitt ideó lo que se denomina el ciclo de vida de un producto, este modelo se dividía en cuatro etapas, cómo se enunció anteriormente, y con ello las empresas diseñaron estrategias de comercio, teniendo en cuenta las características más apreciables en el mercado. Es por ello, que las compañías están preparadas para actuar de un modo eficiente y, por el contrario, las organizaciones que no utilizan esta herramienta pueden cometer errores desproporcionados. Por dar un ejemplo, pueden utilizar la misma estrategia para la venta de un producto nuevo y de un producto (maduro) que ya está en el mercado hace tiempo.

    p Para que quede aún más claro este tema, es importante observar y analizar este video, cuyo propósito es dar claridad sobre el ciclo del producto en sus fases:

    figure.mb-5
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cfct.p-4
          p.mb-0 Es importante recordar explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello, hay que dirigirse al menú principal donde se encontrará la síntesis, una actividad didáctica y material complementario, entre otros, para que así el estudio de este componente este integrando de una manera efectiva en su etapa de formación.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
