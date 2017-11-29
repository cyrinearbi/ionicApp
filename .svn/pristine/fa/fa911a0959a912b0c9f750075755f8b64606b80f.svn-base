angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('meusDados', {
    url: '/meus-dados',
    templateUrl: 'templates/meusDados.html',
    controller: 'meusDadosCtrl'
  })

  .state('cartaoSus', {
    url: '/cartao-sus',
    templateUrl: 'templates/cartaoSus.html',
    controller: 'cartaoSusCtrl'
  })

  .state('meusAgendamentos', {
    url: '/meus-agendamentos',
    templateUrl: 'templates/meusAgendamentos.html',
    controller: 'meusAgendamentosCtrl'
  })

  .state('meusExames', {
    url: '/meus-exames',
    templateUrl: 'templates/meusExames.html',
    controller: 'meusExamesCtrl'
  })
  .state('exames', {
    url: "/exames/:id",
    templateUrl: 'templates/exames.html',
    controller: 'examesCtrl'
  })
  .state('detalhesExame', {
    url: "/detalhes-exame/:proc/:age",
    templateUrl: 'templates/detalhesExame.html',
    controller: 'detalhesExameCtrl'
  })

  .state('medicamentos', {
    url: '/medicamentos',
    templateUrl: 'templates/medicamentos.html',
    controller: 'medicamentosCtrl'
  })

  .state('prontuario', {
    url: '/prontuario',
    templateUrl: 'templates/prontuario.html',
    controller: 'prontuarioCtrl'
  })
  .state('alertas', {
    url: '/alertas',
    templateUrl: 'templates/alertas.html',
    controller: 'alertasCtrl'
  })
  .state('consultas', {
    url: '/consultas',
    templateUrl: 'templates/consultas.html',
    controller: 'consultasCtrl'
  })
  .state('preConsultas', {
    url: '/pre-consultas',
    templateUrl: 'templates/preConsultas.html',
    controller: 'preConsultasCtrl'
  })
  .state('procedimentos', {
    url: '/procedimentos',
    templateUrl: 'templates/procedimentos.html',
    controller: 'procedimentosCtrl'
  })
  .state('internacoes', {
    url: '/internacoes',
    templateUrl: 'templates/internacoes.html',
    controller: 'internacoesCtrl'
  })
  .state('atividadesColetivas', {
    url: '/atividades-coletivas',
    templateUrl: 'templates/atividadesColetivas.html',
    controller: 'atividadesColetivasCtrl'
  })

  .state('minhasReceitas', {
    url: '/minhas-receitas',
    templateUrl: 'templates/minhasReceitas.html',
    controller: 'minhasReceitasCtrl'
  })

  .state('meusAtestados', {
    url: '/meus-atestados',
    templateUrl: 'templates/meusAtestados.html',
    controller: 'meusAtestadosCtrl'
  })
  .state('detalhesAtestado', {
    url: "/detalhes-atestado/:id",
    templateUrl: 'templates/detalhesAtestado.html',
    controller: 'detalhesAtestadoCtrl'
  })

  .state('minhasVacinas', {
    url: '/minhas-vacinas',
    templateUrl: 'templates/minhasVacinas.html',
    controller: 'minhasVacinasCtrl'
  })
  .state('detalhesVacina', {
    url: '/vacina/:id',
    templateUrl: 'templates/detalhesVacina.html',
    controller: 'detalhesVacinaCtrl'
  })

  .state('unidadesProximas', {
    url: '/unidades-proximas',
    templateUrl: 'templates/unidadesProximas.html',
    controller: 'unidadesProximasCtrl'
  })

  .state('economiasEmSaude', {
    url: '/economias-em-saude',
    templateUrl: 'templates/economiasEmSaude.html',
    controller: 'economiasEmSaudeCtrl'
  })

  .state('contatosDeEmergencia', {
    url: '/contatos-de-emergencia',
    templateUrl: 'templates/contatosDeEmergencia.html',
    controller: 'contatosDeEmergenciaCtrl'
  })

  .state('agendarConsulta', {
    url: '/agendar-consulta',
    templateUrl: 'templates/agendarConsulta.html',
    controller: 'agendarConsultaCtrl'
  })

  .state('diasAgendarConsulta', {
    url: '/dias-agendar-consulta/:id',
    templateUrl: 'templates/diasAgendarConsulta.html',
    controller: 'diasAgendarConsultaCtrl'
  })

  .state('horariosAgendarConsulta', {
    url: '/horarios-agendar-consulta',
    templateUrl: 'templates/horariosAgendarConsulta.html',
    controller: 'horariosAgendarConsultaCtrl'
  })

  .state('confirmarConsulta', {
    url: '/confirmar-consulta',
    params:{data:{}},
    templateUrl: 'templates/confirmarConsulta.html',
    controller: 'confirmarConsultaCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/cadastro/:voltar',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })
  .state('inicial', {
    url: '/inicial',
    templateUrl: 'templates/inicial.html',
    controller: 'inicialCtrl'
  })

  $urlRouterProvider.otherwise('/login')

  

});