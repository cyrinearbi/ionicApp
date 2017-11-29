// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
function appendTransform(defaults, transform) {

  // We can't guarantee that the default transformation is an array
  defaults = angular.isArray(defaults) ? defaults : [defaults];

  // Append the new transformation to the defaults
  return defaults.concat(transform);
}

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngMask', 'ngOpenFB', 'angular-md5'])

.run(function($ionicPlatform, $state, $rootScope, $http, $localstorage, $ionicLoading, $ionicHistory, $ionicSideMenuDelegate, ngFB, md5) {
  ngFB.init({appId: '1771946179742401'});
  $rootScope.server = window.location.href.search('file') == -1 ? 'http://localhost/' : 'http://177.55.33.18:8089/';
  // $rootScope.server = 'http://177.55.33.18:8089/';
  $rootScope.api = $rootScope.server+'WebSocialSaude/app-saude-cidadao.php';
  $rootScope.cidade = 0;
  var chave = 'app_saude_cidadao';
  $rootScope.acoes = {
    cidades:md5.createHash(chave+'cidades'),
    login:md5.createHash(chave+'login'),
    facebookLogin:md5.createHash(chave+'facebookLogin'),
    cadastrar:md5.createHash(chave+'cadastrar'),
    cartaoSus:md5.createHash(chave+'cartaoSus'),
    meusDados:md5.createHash(chave+'meusDados'),
    agendamentos:md5.createHash(chave+'agendamentos'),
    solicitacoesExames:md5.createHash(chave+'solicitacoesExames'),
    exames:md5.createHash(chave+'exames'),
    // detalhesExame:$rootScope.server+'WebSocialSaude/zf/laboratorio/laudos/imprimir/',
    detalhesExame:md5.createHash(chave+'detalhesExame'),
    alertas:md5.createHash(chave+'alertas'),
    consultas:md5.createHash(chave+'consultas'),
    preConsultas:md5.createHash(chave+'preConsultas'),
    procedimentos:md5.createHash(chave+'procedimentos'),
    internacoes:md5.createHash(chave+'internacoes'),
    atividadesColetivas:md5.createHash(chave+'atividadesColetivas'),
    medicamentos:md5.createHash(chave+'medicamentos'),
    receitas:md5.createHash(chave+'receitas'),
    atestados:md5.createHash(chave+'atestados'),
    vacinas:md5.createHash(chave+'vacinas'),
    detalhesVacina:md5.createHash(chave+'detalhesVacina'),
    detalhesAtestados:md5.createHash(chave+'detalhesAtestados'),
    unidades:md5.createHash(chave+'unidades'),
    contatosEmergencia:md5.createHash(chave+'contatosEmergencia'),
    economiasSaude:md5.createHash(chave+'economiasSaude'),
    especialidades:md5.createHash(chave+'especialidades'),
    diasDisponiveis:md5.createHash(chave+'diasDisponiveis'),
    horariosDisponiveis:md5.createHash(chave+'horariosDisponiveis'),
  };
  $rootScope.especialidades = [];

  $rootScope.login = function(campos){
    $http.post(
      $rootScope.api,
      'acao='+$rootScope.acoes.login+'&sus='+campos.sus+'&senha='+md5.createHash(campos.senha),
      {
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    ).success(function(r){
      if(r.success){
        var user = r.user;
        $localstorage.setObject("user", user);
        $state.go('home');
        $ionicLoading.hide();
      } else {
        $ionicLoading.show({
          template: r.msg,
          duration:r.msg.length * 60,
        });
      }
    }).error(function(r){
      $ionicLoading.show({
        template: 'Não foi possivel fazer o login.<br>Verifique sua conexão com a Internet.',
        duration:5000
      });
    });
  };

  $rootScope.sair = function(){
    $localstorage.delete('user');
    $rootScope.user = {};
    $state.go('login');
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    $rootScope.user = $localstorage.getObject('user');
    $rootScope.cidade = $localstorage.get('cidade') || 0;
    $rootScope.voltar = function() {
      $ionicHistory.goBack();
    };
    if(toState.name != 'inicial' && $rootScope.cidade == 0){
      event.preventDefault();
      $state.go('inicial');
    }
    $rootScope.mostraVoltar = false;
  });
  $http.defaults.transformRequest = function(value) {
    var retorno = value;
    if(value !== undefined){
      retorno = 'cidade='+$rootScope.cidade+'&'+value;
    }
    return retorno;
  };

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
});