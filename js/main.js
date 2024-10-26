$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true, //parâmetros de configuração, separados por vírgula. 
        //arrows:false

    }) //.slick é um método da biblioteca que estamos usando. 
    
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

        /*
            let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000'

            $('#tel').mask(mascara)

            mostrando uma possibilidade
        */
    
    $('#tel').mask('(00) 00000-0000')

        /*
            $('#tel').mask('SSS-0000', {
                placeholder: 'ABC-1234'}) - placa de carro (letra é representada por 'S')
        */

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            vehicleOfInterest: {
                required: false
            },
            message: {
                required: true
            }

            //rules trabalha com name="" e não com id.
        },
        messages: {
            name: "Por favor, insira seu nome",
            email: "Por favor, insira seu e-mail",
            tel: "Por favor, insira o seu telefone",
            message: "Por favor, escreva a mensagem"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if(incorrectFields) {
                alert(`Existem ${incorrectFields} campos incorretos`)
            }
        }
    })

    $('.vehicles-list button').click(function() {
        const destination = $('#contact');

        const vehicleName = $(this).parent().find('h3').text()
        
        $('#vehicle-interest').val(vehicleName)

        $('html').animate({
            scrollTop: destination.offset().top
        }, 1000)
    })
})