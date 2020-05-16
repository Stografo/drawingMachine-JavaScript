var zonaDeDibujo = document.getElementById("ZonaDeDibujo").getContext("2d");

//variable que guarda variables
var teclas={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39,
    PRUEBA: 32
};



var x=350;
var y=300;

//la linea 15 escucha cuando precionas una tecla y llama a la funcion (dibujar)
document.addEventListener("keydown",dibujar);


function dibujarLinea (color,Ix,Iy,Fx,Fy,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth=3;
    lienzo.moveTo(Ix,Iy);
    lienzo.lineTo(Fx,Fy);
    lienzo.stroke();
    lienzo.closePath();
}
function moverte(Ix,Iy,Fx,Fy,lienzo) {
    lienzo.beginPath();
    lienzo.lineWidth=3;
    lienzo.moveTo(Ix,Iy);
    lienzo.lineTo(Fx,Fy);
    lienzo.closePath();
    
}









var colorLinea="white";

function dibujar(teclaPrecionada){
    
    var pxMovimientoDePunto=5;
    console.log(teclaPrecionada);

            switch (teclaPrecionada.keyCode) {


                        case teclas.UP:
                            switch (teclaPrecionada.ctrlKey) {
                                case true:
                                    //MOVERTE SIN DIBUJAR EN EL ESPACIO
                                    moverte(x,y,x,y-pxMovimientoDePunto,zonaDeDibujo);
                                     y=y-pxMovimientoDePunto;
                                    break;                           
                                default:
                                    //DIBUJAR LINEA
                                    dibujarLinea(colorLinea,x,y,x,y-pxMovimientoDePunto,zonaDeDibujo);
                                    y=y-pxMovimientoDePunto;                                    
                                    break;
                            }
                                break;


                        case teclas.DOWN:
                            switch (teclaPrecionada.ctrlKey) {
                                case true:
                                    //MOVERTE EN EL ESPACIO SIN DIBUJAR
                                    moverte(x,y,x,y+pxMovimientoDePunto,zonaDeDibujo);
                                    y=y+pxMovimientoDePunto;
                                    break;
                                default:
                                    //DIBUJAR LINEA
                                    dibujarLinea(colorLinea,x,y,x,y+pxMovimientoDePunto,zonaDeDibujo);
                                    y=y+pxMovimientoDePunto;
                                    break;
                            }
                                break;




                        case teclas.RIGHT:
                            switch (teclaPrecionada.ctrlKey) {
                                case true:
                                    //MOVERTE EN EL ESPACIO SIN DIBUJAR
                                    moverte(x,y,x+pxMovimientoDePunto,y,zonaDeDibujo);
                                    x=x+pxMovimientoDePunto;
                                    break;
                                default:
                                    //DIBUJAR LINEA
                                    dibujarLinea(colorLinea,x,y,x+pxMovimientoDePunto,y,zonaDeDibujo);
                                    x=x+pxMovimientoDePunto;
                                    break;
                            }
                                break;


                          
                        

                        case teclas.LEFT:
                            switch (teclaPrecionada.ctrlKey) {
                                case true:
                                    //MOVERTE EN EL ESPACIO SIN DIBUJAR
                                    moverte(x,y,x-pxMovimientoDePunto,y,zonaDeDibujo);
                                    x=x-pxMovimientoDePunto;
                                    break;
                                default:
                                    //DIBUJAR LINEA
                                    dibujarLinea(colorLinea,x,y,x-pxMovimientoDePunto,y,zonaDeDibujo);
                                    x=x-pxMovimientoDePunto;
                                    break;
                            }
                                break;

            }
            


}

