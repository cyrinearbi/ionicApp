angular.module('app.directives', [])

.directive('sus', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.sus = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        var soma = new Number;
        var resto = new Number;
        var dv = new Number;
        var pis = new String;
        var resultado = new String;
        var tamCNS = viewValue.length;
        if ((tamCNS) != 15) {
          return false;
        }
        pis = viewValue.substring(0,11);
        soma = (
          ((Number(pis.substring(0,1))) * 15) +   
          ((Number(pis.substring(1,2))) * 14) +
          ((Number(pis.substring(2,3))) * 13) +
          ((Number(pis.substring(3,4))) * 12) +
          ((Number(pis.substring(4,5))) * 11) +
          ((Number(pis.substring(5,6))) * 10) +
          ((Number(pis.substring(6,7))) * 9) +
          ((Number(pis.substring(7,8))) * 8) +
          ((Number(pis.substring(8,9))) * 7) +
          ((Number(pis.substring(9,10))) * 6) +
          ((Number(pis.substring(10,11))) * 5)
        );
        resto = soma % 11;
        dv = 11 - resto;
        if (dv == 11) {
          dv = 0;
        }
        if (dv == 10) {
          soma = (
            ((Number(pis.substring(0,1))) * 15) +   
            ((Number(pis.substring(1,2))) * 14) +
            ((Number(pis.substring(2,3))) * 13) +
            ((Number(pis.substring(3,4))) * 12) +
            ((Number(pis.substring(4,5))) * 11) +
            ((Number(pis.substring(5,6))) * 10) +
            ((Number(pis.substring(6,7))) * 9) +
            ((Number(pis.substring(7,8))) * 8) +
            ((Number(pis.substring(8,9))) * 7) +
            ((Number(pis.substring(9,10))) * 6) +
            ((Number(pis.substring(10,11))) * 5) + 2
          );
          resto = soma % 11;
          dv = 11 - resto;
          resultado = pis + "001" + String(dv);
        } else { 
          resultado = pis + "000" + String(dv);
        }
        if (viewValue != resultado) {
          return false;
        } else {
          return true;
        }

        return false;
      };
    }
  };
})
.directive('senha2', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.sus = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        var retorno = viewValue == scope.campos.senha;
        console.log(retorno);
        ctrl.$setValidity('desigual', retorno);
        return retorno;

      };
    }
  };
})
.directive('email', function() {
    var EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

    return {
        require: 'ngModel',
        restrict: '',
        link: function(scope, elm, attrs, ctrl) {
            // only apply the validator if ngModel is present and Angular has added the email validator
            if (ctrl && ctrl.$validators.email) {

                // this will overwrite the default Angular email validator
                ctrl.$validators.email = function(modelValue) {
                    return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                };
             }
         }
     };
 });