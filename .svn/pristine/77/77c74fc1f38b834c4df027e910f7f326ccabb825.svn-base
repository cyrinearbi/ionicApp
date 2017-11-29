var httpHeaders = {
  headers : {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  }
};
angular.module('app.controllers', [])
  
.controller('meusDadosCtrl', function ($rootScope, $scope, $http, $httpParamSerializer, $localstorage, $ionicLoading) {
  $scope.campos = {};
  $scope.submitted = false;
  angular.copy($rootScope.user, $scope.campos);
  $scope.salvar = function(isValid){
    $scope.submitted = true;
    if(isValid){
      var dados = {};
      angular.copy($scope.campos, dados);
      dados.acao = $rootScope.acoes.meusDados;
      $ionicLoading.show({
        template: 'Salvando...'
      });
      $http.post(
        $rootScope.api,
        $httpParamSerializer(dados),
        httpHeaders
      ).success(function(r){
        if(r.success){
          $localstorage.setObject("user", $scope.campos);
        }
        $ionicLoading.show({
          template: r.msg,
          duration:r.msg.length * 60,
        });
      }).error(function(r){
        $ionicLoading.show({
          template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
          duration:5000
        });
      });
    } 
  };
})
   
.controller('meusAgendamentosCtrl', function ($rootScope, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.agendamentos = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.agendamentos, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.agendamentos = r.agendamentos;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
   
.controller('meusExamesCtrl', function ($rootScope, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.exames = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.solicitacoesExames, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.exames = r.exames;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('examesCtrl', function ($rootScope, $scope, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.exames = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $rootScope.mostraVoltar = true;
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.exames, usu_codigo:$rootScope.user.usu_codigo, id:$stateParams.id}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.exames = r.exames;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('detalhesExameCtrl', function ($rootScope, $scope, $state, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.exame = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $rootScope.mostraVoltar = true;
  var proc = $stateParams.proc;
  var age = $stateParams.age;
  if(proc && age){
    /*$http.get(
      $rootScope.acoes.detalhesExame+'proc_codigos/'+proc+'/age_codigo/'+age+'/json/1',*/
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.detalhesExame, usu_codigo:$rootScope.user.usu_codigo, proc:proc, age:age}),
      httpHeaders
    ).success(function(r){
      if(r.hasOwnProperty(proc)){
        $ionicLoading.hide();
        $scope.exame = r[proc];
      } else {
        $ionicLoading.show({
          template: 'Erro ao recuperar os detalhes do exame',
          duration: 2000,
        });
      }
    }).error(function(){
      $ionicLoading.show({
        template: 'Erro ao tentar recuperar os detalhes do exame',
        duration: 2000,
      });
    });
  } else {
    $ionicLoading.show({
      template: 'Escolha um exame para ver os detalhes',
      duration:2000,
    });
    $state.go('exames({id:'+age+'})');
  }
})
   
.controller('medicamentosCtrl', function ($rootScope, $scope, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.medicamentos = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.medicamentos, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.medicamentos = r.medicamentos;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });

})
   
.controller('prontuarioCtrl', function ($scope) {


})
.controller('alertasCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.alertas = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.alertas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.alertas = r.alertas;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('consultasCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.consultas = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.consultas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.consultas = r.consultas;
      $ionicLoading.hide();
    } else {
      if(r.hasOwnProperty('msg')){
        
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
      }
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('preConsultasCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.consultas = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.preConsultas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.consultas = r.consultas;
      $ionicLoading.hide();
    } else {
      if(r.hasOwnProperty('msg')){
        
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
      }
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('procedimentosCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.procedimentos = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.procedimentos, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.procedimentos = r.procedimentos;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('internacoesCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.internacoes = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.internacoes, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.internacoes = r.internacoes;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('atividadesColetivasCtrl', function ($rootScope, $state, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.atividadesColetivas = {};
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('prontuario');
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.atividadesColetivas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.atividades = r.atividades;
      $ionicLoading.hide();
    } else {
      if(r.hasOwnProperty('msg')){
        
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
      }
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})

.controller('minhasReceitasCtrl', function ($rootScope, $scope, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.receitas = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.receitas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.receitas = r.receitas;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });

})
   
.controller('meusAtestadosCtrl', function ($rootScope, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.atestados = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.atestados, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.atestados = r.atestados;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('detalhesAtestadoCtrl', function ($rootScope, $scope, $state, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.exame = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $rootScope.mostraVoltar = true;
  var id = $stateParams.id;
  if(id){
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.detalhesAtestados, id:id, usu_codigo:$rootScope.user.usu_codigo}),
      httpHeaders
    ).success(function(r){
      if(r.hasOwnProperty('atestado')){
        $ionicLoading.hide();
        $scope.atestado = r.atestado;
      } else {
        $ionicLoading.show({
          template: 'Erro ao recuperar os detalhes do atestado',
          duration: 2000,
        });
      }
    }).error(function(){
      $ionicLoading.show({
        template: 'Erro ao tentar recuperar os detalhes do atestado',
        duration: 2000,
      });
    });
  } else {
    $ionicLoading.show({
      template: 'Escolha um atestado para ver os detalhes',
      duration:2000,
    });
    $state.go('meusAtestados');
  }
})
   
.controller('minhasVacinasCtrl', function ($rootScope, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.vacinas = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.vacinas, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.vacinas = r.vacinas;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
.controller('detalhesVacinaCtrl', function ($rootScope, $scope, $state, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.vacina = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $rootScope.mostraVoltar = 'url';
  $rootScope.voltar = $state.href('minhasVacinas');
  var id = $stateParams.id;
  if(id){
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.detalhesVacina, id:id, usu_codigo:$rootScope.user.usu_codigo}),
      httpHeaders
    ).success(function(r){
      if(r.success){
        $scope.vacina = r.vacina;
        $ionicLoading.hide();
      } else {
        $ionicLoading.show({
          template: r.msg,
          duration:r.msg.length * 60,
        });
      }
    }).error(function(r){
      $ionicLoading.show({
        template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
        duration:5000
      });
    });
  } else {
    $ionicLoading.show({
      template: 'Escolha uma vacina para ver os detalhes',
      duration:2000,
    });
    $state.go('minhasVacinas');
  }
})
   
.controller('unidadesProximasCtrl', function ($rootScope, $scope, $stateParams, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.unidades = [];
  $scope.mapCenter = {lat:-14.2200833,lng:-54.0212282};
  $scope.map = new google.maps.Map(
    document.getElementById("mapa"), {
    center: new google.maps.LatLng($scope.mapCenter.lat, $scope.mapCenter.lng),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true
  });
  $scope.infoWindow = $scope.infoWindow = new google.maps.InfoWindow({
    content: ''
  });
  $scope.abreInfoBox = function(n) {
    infoWindow.close();
    $scope.map.panTo(n.getPosition());
    infoWindow.setContent(n.html);
    infoWindow.open($scope.map, n);
  };
  $ionicLoading.show({
    template: 'Carregando...'
  });
  navigator.geolocation.getCurrentPosition(function (position) {
    $scope.mapCenter.lat  = position.coords.latitude;
    $scope.mapCenter.lng = position.coords.longitude;
    $scope.map.setCenter(new google.maps.LatLng($scope.mapCenter.lat, $scope.mapCenter.lng));
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.unidades, usu_codigo:$rootScope.user.usu_codigo, id:$stateParams.id}),
      httpHeaders
    ).success(function(r){
      if(r.success){
        var unidades = r.unidades;
        if(unidades.length){
          var bound = new google.maps.LatLngBounds();
          for(var i in unidades){
            var posicao = angular.fromJson(unidades[i].uni_coordenadas);
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(posicao.lat, posicao.lng),
              map: $scope.map,
              title:unidades[i].uni_desc,
            });
            marker.html = '<strong>'+unidades[i].uni_desc+'</strong><br>'+unidades[i].uni_endereco;
            google.maps.event.addListener(marker, 'click', function(){
              abreInfoBox(this);
            });
            bound.extend( new google.maps.LatLng(posicao.lat, posicao.lng));
          }
          $scope.map.setCenter(bound.getCenter());
          $ionicLoading.hide();
        } else {
          $ionicLoading.show({
            template:'Não foram encontradas unidades próximas a você.',
            duration:5000,
          });
        }
      } else {
        $ionicLoading.show({
          template: r.msg,
          duration:r.msg.length * 60,
        });
      }
    }).error(function(r){
      $ionicLoading.show({
        template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
        duration:5000
      });
    });
  }, function(e){
    $ionicLoading.show({
      template: 'Não foi possível obter sua localização.',
      duration:5000
    });
    console.log(e);
  });
})
   
.controller('economiasEmSaudeCtrl', function ($rootScope, $scope, $http, $ionicLoading, $localstorage, $httpParamSerializer) {
  $scope.relatorio = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.economiasSaude, usu_codigo:$rootScope.user.usu_codigo}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.relatorio = r.relatorio;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
   
.controller('contatosDeEmergenciaCtrl', function ($rootScope, $scope, $http, $ionicLoading, $httpParamSerializer) {
  $scope.contatos = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.contatosEmergencia}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.contatos = r.contatos;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})
   
.controller('agendarConsultaCtrl', function ($rootScope, $scope, $state, $http, $ionicLoading, $httpParamSerializer, $localstorage) {
  if($localstorage.get('especialidades', false) != false){
    $scope.especialidades = $localstorage.getObject('especialidades');
  } else {
    $ionicLoading.show({
      template: 'Carregando...'
    });
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.especialidades}),
      httpHeaders
    ).success(function(r){
      if(r.success){
        $localstorage.setObject('especialidades', r.especialidades);
        $scope.especialidades = r.especialidades;
        $ionicLoading.hide();
      } else {
        if(r.hasOwnProperty('msg')){
          $ionicLoading.show({
            template: r.msg,
            duration:r.msg.length * 60,
          });
        }
      }
    }).error(function(r){
      $ionicLoading.show({
        template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
        duration:5000
      });
    });
  }
})
   
.controller('diasAgendarConsultaCtrl', function ($rootScope, $scope, $state, $stateParams, $http, $ionicLoading, $httpParamSerializer, $localstorage) {
  $scope.dias = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  var id = $stateParams.id;
  if(id && $localstorage.get('especialidades', false) != false){
    var especialidades = $localstorage.getObject('especialidades');
    $scope.especialidade = especialidades[$stateParams.id].nome;
    $http.post(
      $rootScope.api,
      $httpParamSerializer({acao:$rootScope.acoes.diasDisponiveis, id:id}),
      httpHeaders
    ).success(function(r){
      if(r.success){
        $scope.dias = r.dias;
        $ionicLoading.hide();
      } else {
        $ionicLoading.show({
          template: r.msg,
          duration:r.msg.length * 60,
        });
      }
    }).error(function(r){
      $ionicLoading.show({
        template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
        duration:5000
      });
    });
  } else {
    $ionicLoading.show({
      template: 'Escolha uma especialidade para agendar',
      duration:2000,
    });
    $state.go('agendarConsulta');
  }
})

.controller('horariosAgendarConsultaCtrl', function ($rootScope, $scope, $state, $http, $ionicLoading, $httpParamSerializer) {
  $scope.horarios = {};
  $ionicLoading.show({
    template: 'Carregando...'
  });
  $http.post(
    $rootScope.api,
    $httpParamSerializer({acao:$rootScope.acoes.horariosDisponiveis}),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.horarios = r.horarios;
      $ionicLoading.hide();
    } else {
      $ionicLoading.show({
        template: r.msg,
        duration:r.msg.length * 60,
      });
    }
  }).error(function(r){
    $ionicLoading.show({
      template: 'Não foi possivel carregar as informações.<br>Verifique sua conexão com a Internet.',
      duration:5000
    });
  });
})

.controller('confirmarConsultaCtrl', function ($rootScope, $scope, $state, $stateParams, $ionicPopup) {
  
  var hoje = new Date();
  var icone = 'doctor';
  var especialidade = 'Clínico Geral';
  
  if($stateParams.data.hasOwnProperty('data') && $stateParams.data.hasOwnProperty('especialidade')){
    for(var i in $rootScope.especialidades){
      if($stateParams.data.especialidade == $rootScope.especialidades[i].id){
        especialidade = $rootScope.especialidades[i].nome;
        icone = $rootScope.especialidades[i].icon;
      }
    }
    hoje = new Date($stateParams.data.data_de);
  }

  var dia = hoje.getDate();
  if(dia < 10){
    dia = '0'+dia;
  }
  var mes = (hoje.getMonth()+1);
  if(mes < 10){
    mes = '0'+mes;
  }
  var data = dia+'/'+mes+'/'+hoje.getFullYear();
  $scope.data = data;
  $scope.especialidade = especialidade;
  $scope.icone = icone;

  $scope.aceitar = function(){
    $state.go('meusAgendamentos');
  };
  $scope.recusar = function(){
    $state.go('agendarConsulta');
  };
})

.controller('homeCtrl', function ($scope) {


})
.controller('loginCtrl', function($scope, $rootScope, $http, $state, $ionicLoading, $ionicPopup, $localstorage, $httpParamSerializer, ngFB) {
  if($rootScope.user != null && $rootScope.user.hasOwnProperty('usu_cartao_sus') && $rootScope.user.usu_cartao_sus != null){
    $state.go('home');
  }
  $scope.campos = {};
  $scope.submitted = false;
  $scope.login = function(isValid){
    $scope.submitted = true;
    if(isValid){
      $ionicLoading.show({
        template: 'Entrando...'
      });
      $rootScope.login($scope.campos);
    }
  };
  $scope.fbLogin = function(){
    ngFB.login({scope: 'email'}).then(function(response){
      $ionicLoading.show({
        template: 'Entrando...'
      });
      if (response.status === 'connected') {
        ngFB.api({
          path: '/me',
          params: {fields: 'id,name,email,picture{type=normal}'}
        }).then(function (user) {
          var u = user;
          var dados = u;
          dados.acao = $rootScope.acoes.facebookLogin;
          $http.post(
            $rootScope.api,
            $httpParamSerializer(dados),
            httpHeaders
          ).success(function(data) {
            if(data.success){
              //loga o usuario
              var user = data.user;
              $localstorage.setObject("user", user);
              if(user.hasOwnProperty('usu_cartao_sus')){
                $state.go('home');
              } else {
                $state.go('cartaoSus');
              }
              $ionicLoading.hide();
            } else {
              $ionicLoading.hide();
              $ionicPopup.alert({
                title: 'Erro ao logar',
                template: data.msg
              });
            }
          }, function (error) {
            console.log('Facebook error: ' + error.error_description);
            $ionicLoading.hide();
          });
        });
      } else {
        console.log('Facebook login failed');
        $ionicLoading.hide();
      }
    });
  };
  $scope.logout = function() {
    ngFB.logout().then(
      function() {
        alert('Logout successful');
      },
    errorHandler);
  };
})
.controller('cadastroCtrl', function($scope, $rootScope, $http, $state, $httpParamSerializer, $localstorage, $ionicLoading, $ionicPopup, $stateParams, md5) {
  $scope.campos = {};
  $scope.dados = {acao:$rootScope.acoes.cadastrar};
  $scope.submitted = false;
  var mostrarBtnVoltar = $stateParams.voltar ? true : false;
  $rootScope.mostraVoltar = mostrarBtnVoltar;
  $scope.cadastrar = function(isValid){
    $scope.submitted = true;
    if(isValid){
      $ionicLoading.show({
        template: 'Cadastrando...'
      });
      $scope.dados['sus'] = $scope.campos.sus;
      $scope.dados['senha'] = md5.createHash($scope.campos.senha);
      $scope.dados['senha2'] = md5.createHash($scope.campos.senha2);
      $http.post(
        $rootScope.api,
        $httpParamSerializer($scope.dados),
        httpHeaders
      ).success(function(r){
        if(r.success){
          $rootScope.login($scope.campos);
        } else {
          if(r.hasOwnProperty('alert')){
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: r.alert,
              template: r.msg
            });
          } else {
            $ionicLoading.show({
              template: r.msg,
              duration:r.msg.length * 60,
            });
          }
        }
      });
    }
  };
})
.controller('cartaoSusCtrl', function($scope, $rootScope, $http, $state, $httpParamSerializer, $localstorage, $ionicLoading, $ionicPopup) {
  $scope.campos = {};
  $scope.dados = {acao:$rootScope.acoes.cartaoSus};
  $scope.submitted = false;
  $scope.cartaoSus = function(isValid){
    $scope.submitted = true;
    if(isValid){
      $ionicLoading.show({
        template: 'Cadastrando...'
      });
      $scope.dados['sus'] = $scope.campos.sus;
      $scope.dados['fbid'] = $rootScope.user.uapp_fbid;

      $http.post(
        $rootScope.api,
        $httpParamSerializer($scope.dados),
        httpHeaders
      ).success(function(r){
        if(r.success){
          $localstorage.setObject("user", r.user);
          $state.go('home');
          $ionicLoading.hide();
        } else {
          if(r.hasOwnProperty('alert')){
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: r.alert,
              template: r.msg
            });
          } else {
            $ionicLoading.show({
              template: r.msg,
              duration:r.msg.length * 60,
            });
          }
        }
      });
    }
  };
})
.controller('inicialCtrl', function($scope, $rootScope, $http, $state, $httpParamSerializer, $localstorage, $ionicLoading) {
  $scope.cidades = {};
  $scope.campos = {cidade: 0};
  var dados = {acao:$rootScope.acoes.cidades};
  $http.post(
    $rootScope.api,
    $httpParamSerializer(dados),
    httpHeaders
  ).success(function(r){
    if(r.success){
      $scope.cidades = r.cidades;
    } else {
      $ionicLoading.show({
        template: 'Erro ao listar as cidades'
      });
    }
  });
  $scope.escolheCidade = function(){
    // console.log($scope.cidade);
    $localstorage.set("cidade", $scope.campos.cidade);
    // $rootScope.cidade = $scope.cidade;
    // console.log($localstorage.get('cidade'));
    $state.go('login');
  };
})