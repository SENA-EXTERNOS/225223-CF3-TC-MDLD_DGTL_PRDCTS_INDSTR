export default {
  global: {
    componenteFormativo:
      'Identificar necesidades del cliente y ciclo de vida del producto',
    descripcionCurso:
      'La mejor forma de saber si el producto que se tiene en un boceto digital es potencialmente óptimo para el mercado, es realizar el proceso de diseño, ya que este contiene diferentes fases en las cuales se evidencia lo que sucede, desde la idea inicial hasta el producto terminado. Además, se debe considerar el ciclo de vida del producto, lo que permite generar posibles versiones mejoradas del mismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['animation-rotation-1', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['animation-rotation-2', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['animation-rotation-3', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Procesos de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fases',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de selección de propuesta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclo de vida del producto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ciclo de vida del producto',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Ciclo de vida del producto</em>. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qxP87PYmQjk',
    },
    {
      tema: 'Cliente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Cliente</em>. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4WIq433jNMA',
    },
    {
      tema: '<em>Focus group</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Recolección de información - parte 1.</em> [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rAqeHpglhc0',
    },
    {
      tema: 'Necesidad de los clientes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Diagnóstico de necesidades de los clientes</em>. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yc8fiXKYVLM',
    },
    {
      tema: 'Procesos de diseño',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Procesos de producción gráfica</em>. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dQFsXVX3Sk8',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo',
      significado:
        'presenta diferentes fases del producto, desde el momento que se pone en venta hasta su retiro del mercado.',
    },
    {
      termino: 'Creación de prototipo',
      significado:
        'fase cuarta del proceso de diseño, muestra de manera tentativa o de manera física, cómo quedará en realidad el producto.',
    },
    {
      termino: 'Diseño',
      significado:
        'fase séptima del proceso de diseño, donde se hace el diseño definitivo y se plasma en la realidad.',
    },
    {
      termino: '<em>Design thinking</em>',
      significado: 'método para desarrollar ideas.',
    },
    {
      termino: '<em>Design Sprint</em>',
      significado:
        'método que se basa en la retroalimentación de expertos y usuarios, para definir funciones, detalles y otros aspectos del producto.',
    },
    {
      termino: 'Entrevista',
      significado:
        'actividad que consiste en conversar o entrevistar a un cliente para conocer su necesidad.',
    },
    {
      termino: '<em>Focus group</em>',
      significado:
        'es una técnica de tipo colaborativo, en la que diferentes personas se encuentran con un objetivo, que es resolver una problemática específica.',
    },
    {
      termino: 'Idea',
      significado:
        'es la primera etapa que se realiza en el proceso de diseño y casi siempre surge después de momentos de observación del mercado comercial.',
    },
    {
      termino: 'Investigación',
      significado:
        'es la segunda etapa que se realiza en el proceso de diseño, donde permite sustentar el diseño para luego así considerar cómo deberá ser realizado o fabricado este.',
    },
    {
      termino: 'MVA',
      significado:
        'audiencia mínima viable representado en sus siglas como: MVA <em>(The Minimum Viable Audience)</em>, representa la audiencia más pequeña posible que puede sostener un producto, bien o servicio a medida que comienza un mercado pequeño.',
    },
    {
      termino: 'Planificación',
      significado:
        'en esta etapa (tercera del proceso de diseño) es donde tiene incidencia el boceto, este debe tener la apariencia de cómo luciría una vez que ya esté fabricado.',
    },
    {
      termino: 'Prueba de prototipos',
      significado:
        'se implementará la ejecución del funcionamiento en condiciones normales del producto, donde no se encontrará este producto en ninguno entorno controlado y lo más probable es que lo manipulen personas extrañas o ajenas al proceso de diseño.',
    },
    {
      termino: 'SCAMPER',
      significado:
        'método que hace más fácil encontrar una idea preliminar de manera rápida y eficaz.',
    },
    {
      termino: 'Suministros',
      significado:
        'tiene que ver con la realización o creación del producto, es decir los materiales y los componentes que lo contienen el producto y es la sexta etapa que se realiza en el proceso de diseño.',
    },
    {
      termino: 'SCRUM',
      significado:
        'método que hace que el trabajo en equipo, sea más amigable cuando de crear productos se refiere.',
    },
  ],
  referencias: [
    {
      referencia:
        'North, P. (2021, diciembre 1). <em>Focus group: qué es y cómo implementarlo en tu estrategia de comunicación</em>. Inboundcycle. [Web log post].',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/focus-group-que-es',
    },
    {
      referencia:
        'Raeburn, A. (2022, abril 18). <em>El proceso de desarrollo de productos en 6 etapas</em>. Asana. [Web log post].  ',
      link: 'https://asana.com/es/resources/product-development-process',
    },
    {
      referencia:
        'Universidad UNADE (2021, abril 8). <em>Ciclo de vida del producto: qué es</em>. UNADE.',
      link: 'https://unade.edu.mx/ciclo-de-vida-de-un-producto/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
