<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-md-11
        .titulo-sexto.color-acento-botones.mb-5
            h4 Modelado digital de productos industriales
            p.mb-0 Síntesis: identificar las necesidades del cliente y ciclo de vida del producto.
      .col-md-1
        figure.logo-size
          img(src="@/assets/curso/temas/logo.svg", alt="alt")

    p.mb-5 Se recomienda revisar cuidadosamente el siguiente mapa conceptual, que permite analizar el contenido visto acerca de las necesidades del cliente y el ciclo de vida del producto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
