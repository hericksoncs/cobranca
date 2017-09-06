$('#confirmacaoExclusaoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); 
 
  var codigoTitulo = button.data('codigo');
  var descricaoTitulo = button.data('descricao');
  
  var modal = $(this);
  var form = modal.find('form');
  var action = form.data('url-base');
  if(!action.endsWith('/')) {
	  action += '/';
  }
  form.attr('action', action + codigoTitulo);
  
  modal.find('.modal-body span').html('Tem certeza que deseja excluir o titulo <strong>' + descricaoTitulo +'</strong>?');
  
});

$("#phone").on("blur", function(event) {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 5 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );

        var lastfour = last.substr(1,4);
        
        var first = $(this).val().substr( 0, 9 );
        
        $(this).val( first + move + '-' + lastfour );
    }
});

$(function(){
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({decimal: ',', thousands: '.', allowZero: true});
	$('.phone').mask('(99) 9999-9999');
	
	$('.js-atualizar-status').on('click', function(event){
		event.preventDefault();
		
		var botaoReceber = $(event.currentTarget);
		var urlReceber = botaoReceber.attr('href');
		
		console.log('urlReceber', urlReceber);
	});
});



