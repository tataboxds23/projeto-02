
$(".visao").click(ficaAzul); // o que vai acontecer quando eu clicar no botão com a classe "visao" // VISION

    function ficaAzul(){

        $(".visao").attr('style', 'color: #43C4F3 !important');
            $(".visao").css("textDecoration", "none");
                $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                    $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                        $(".cliquei-3").attr('style', 'color: #7d7c7c !important');
                            $(".mostrar").css("display", "none"); // esconde o layout 1 //
                                $(".ocultar").show(); // mostra o layout 2  //
                                    $(".mudar").attr('style', 'color: #7d7c7c !important'); // muda a cor do link para cinza //
                                        $(".mostrar-2").css("display", "none"); // esconde o layout 3 //
                                            $(".trocar-2").css("display", "none"); // esconde o layout 3 //
                                                $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do link para cinza //

    }

$(".cliquei-1").click(ficaAzul1); // o que vai acontecer quando eu clicar no botão com a classe "cliquei" // ABOUT

    function ficaAzul1(){

        $(".cliquei-1").attr('style', 'color: #43C4F3 !important');
            $(".cliquei-1").css("textDecoration", "none");
                $(".visao").attr('style', 'color: #7d7c7c !important');
                    $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                        $(".cliquei-3").attr('style', 'color: #7d7c7c !important');
                            $(".mostrar").css("display", "none"); // esconde o layout 1 //
                                $(".ocultar").show(); // mostra o layout 2  //
                                    $(".mudar").attr('style', 'color: #7d7c7c !important');
                                        $(".mostrar-2").css("display", "none"); // esconde o layout 3 //
                                            $(".trocar-2").css("display", "none"); // esconde o layout 3 //
                                                $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do link para cinza //

    }

$(".cliquei-2").click(ficaAzul2); // o que vai acontecer quando eu clicar no botão com a classe "cliquei" // TEAM

    function ficaAzul2(){

        $(".cliquei-2").attr('style', 'color: #43C4F3 !important');
            $(".cliquei-2").css("textDecoration", "none");
                $(".visao").attr('style', 'color: #7d7c7c !important');
                    $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                        $(".cliquei-3").attr('style', 'color: #7d7c7c !important');
                            $(".mostrar").css("display", "none"); // esconde o layout 1 //
                                $(".ocultar").show(); // mostra o layout 2  //
                                    $(".mudar").attr('style', 'color: #7d7c7c !important');
                                        $(".mostrar-2").css("display", "none"); // esconde o layout 3 //
                                            $(".trocar-2").css("display", "none"); // esconde o layout 3 //
                                                $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do link para cinza //

    }

$(".cliquei-3").click(ficaAzul3); // o que vai acontecer quando eu clicar no botão com a classe "cliquei" // BOARD

    function ficaAzul3(){

        $(".cliquei-3").attr('style', 'color: #43C4F3 !important');
            $(".cliquei-3").css("textDecoration", "none");
                $(".visao").attr('style', 'color: #7d7c7c !important');
                    $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                        $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                            $(".mostrar").css("display", "none"); // esconde o layout 1 //
                                $(".ocultar").show(); // mostra o layout 2  //
                                    $(".mudar").attr('style', 'color: #7d7c7c !important');
                                        $(".mostrar-2").css("display", "none"); // esconde o layout 3 //
                                            $(".trocar-2").css("display", "none"); // esconde o layout 3 //
                                                $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do link para cinza //

    }

// INICIO OUR VALUE PROP //

$(".mudar").click(verificaTamanho); // o que vai acontecer quando eu clicar no botão OUR VALUE PROP com a classe "mudar" //

function verificaTamanho(){

    if (x.matches) { 
        jQuery(document).ready(function($) {
            $(".ocultar").css("display", "none"); // esconde o layout 1 //
                $(".mostrar").css("display", "none"); // esconde o layout 2 //
                    $(".trocar-2").show(); // mostra o layout 4  //
                        $(".container-texto-a.trocar-2").css("marginTop", "47.5vh"); // ajusta o container //
                            /*$(".subpartes").css("width", "45%");*/
                                $(".mudar").css("color", "#43C4F3"); // muda a cor do link para azul //
                                    $(".mudar").css("textDecoration", "none");
                                        $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do outro link para cinza //
                                            $(".mostrar-2").css("display", "none"); // esconde o layout BASE LABS //
                                                $(".visao").attr('style', 'color: #7d7c7c !important');
                                                    $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                                                        $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                                                            $(".cliquei-3").attr('style', 'color: #7d7c7c !important');
        });
   				    } else {
        jQuery(document).ready(function($) {
            $(".ocultar").css("display", "none"); // esconde o layout 1 //
                $(".mostrar").show(); // mostra o layout 4  //
                    $(".container-texto-a.mostrar").css("marginTop", "41vh"); // ajusta o container //
                        /*$(".subpartes").css("width", "45%");*/
                            $(".mudar").css("color", "#43C4F3"); // muda a cor do link para azul //
                                $(".mudar").css("textDecoration", "none");
                                    $(".mudar-2").attr('style', 'color: #7d7c7c !important'); // muda a cor do outro link para cinza //
                                        $(".mostrar-2").css("display", "none"); // esconde o layout BASE LABS //
                                            $(".visao").attr('style', 'color: #7d7c7c !important');
                                                $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                                                    $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                                                        $(".cliquei-3").attr('style', 'color: #7d7c7c !important');

        });

                            }
                        }


// FINAL OUR VALUE PROP //

// INICIO BASE LABS //

$(".mudar-2").click(verificaTamanho2); // o que vai acontecer quando eu clicar no botão BASE LABS com a classe "mudar-2" //


function verificaTamanho2(){

    if (x.matches) { 
        jQuery(document).ready(function($) {
            $(".ocultar").css("display", "none"); // esconde o layout 1 //
                $(".trocar-2").css("display", "none"); // esconde o layout 2 //
                    $(".mostrar-2").show(); // mostra o layout 3 //
                        $(".container-texto-a.mostrar-2").css("marginTop", "29vh"); // ajusta o container //
                            $(".container-4").css("top", "40vmin"); // ajusta o container //
                            $(".mudar-2").css("color", "#43C4F3"); // muda a cor do link para azul //
                                $(".mudar-2").css("textDecoration", "none");
                                    $(".mostrar").hide(); // esconde o layout do OUR VALUE PROP //
                                        /*$(".subpartes").css("width", "45%"); // ajusta o container //*/
                                            $(".mudar").attr('style', 'color: #7d7c7c !important'); // muda a cor do outro link para cinza //
                                                $(".visao").attr('style', 'color: #7d7c7c !important');
                                                    $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                                                        $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                                                            $(".cliquei-3").attr('style', 'color: #7d7c7c !important');
        });
   				    } else {
        jQuery(document).ready(function($) {
            $(".ocultar").css("display", "none"); // esconde o layout 1 //
                $(".mostrar-2").show(); // mostra o layout 2 //
                    $(".mudar-2").css("color", "#43C4F3"); // muda a cor do link para azul //
                        $(".mudar-2").css("textDecoration", "none");
                            $(".mostrar").hide(); // esconde o layout do OUR VALUE PROP //
                                /*$(".subpartes").css("width", "45%"); // ajusta o container //*/
                                    $(".mudar").attr('style', 'color: #7d7c7c !important'); // muda a cor do outro link para cinza //
                                        $(".visao").attr('style', 'color: #7d7c7c !important');
                                            $(".cliquei-1").attr('style', 'color: #7d7c7c !important');
                                                $(".cliquei-2").attr('style', 'color: #7d7c7c !important');
                                                    $(".cliquei-3").attr('style', 'color: #7d7c7c !important');


        });

                            }
                        }
                        

// FINAL BASE LABS //


