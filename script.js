

$(document).ready(function(){
    
    $('body').click(function(){
        $('.pikachu').fadeIn('slow', function(){
 
        });
 
    });
    
    

    $('#respuesta').empty();
    let formulario = $("#info");
    
    console.log(nombre);
    


    formulario.on('submit',function(event){
        event.preventDefault();
        let patronNombre = /^[a-z ,.'-]+$/gim;
        let nombre =$('#pokenombre').val();
        
        
        console.log(nombre);
    });

    $(function consulta (nombre) {
        if(nombre && patronNombre.test (nombre)=== true){
            $.ajax({
                type: "get",
                url: "uhttps://pokeapi.co/api/v2/pokemon/"+ nombre,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    $('#resultado').html(`
                    <div class="text">
                        <h3>Nombre: ${response.name}</h3>
                        img src="${response.sprites.front_default}" alt="${response.name}">
                    </div>
                    `);
                    

                              
                                                                
                    

                    let datosXY = [];
                    response.stats.forEach(element => {
                        console.log(element.base_stat);//y
                        console.log(element.stat.name);//label
                        datosXY.push(
                            {
                                label: element.stat.name, 
                                y:element.base_stat
                            });
                    });

                    var options = {
                        title: {
                            text: "Caracteristicas de tu Pokemón Favorito"              
                        },
                        data: [              
                            {
                                type: "column",
                                dataPoints: []
                            }
                        ]
                    };

                    $("#chartContainer").CanvasJSChart(options);
                    $("#chartContainer").show();
                    $('#resultado').append(resultado);



                                      
                    
                },
                error: function (error) {
                    console.error(error);
                }

            });
        } else{
            alert("Ingrese un nombre válido")
        }

        
    });



    
 

   

   

    
});






