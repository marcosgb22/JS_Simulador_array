let TOTAL = [0,0];

function agregar_compra (NFT, VALOR){
    const MEN = 1;
    const CALAVERA= 2;
    const GIRASOL = 3;
    const NICKITUS = 7;

    switch (NFT) {
        case 'MEN':
            VALOR = VALOR + MEN;
            NO = 0;
            alert('COMPRASTE MEN');
            
          break;
        case 'CALAVERA':
            VALOR = VALOR + CALAVERA;
            NO = 0;
            alert('COMPRASTE CALAVERA');
          break;
        case 'GIRASOL':
            VALOR = VALOR + GIRASOL;
            NO = 0;
            alert('COMPRASTE GIRASOL');
          break;
        case 'NICKITUS':
            VALOR = VALOR + NICKITUS;
            NO = 0;
            alert('COMPRASTE NICKITUS');
          break;
        case 'NO':
            NO = 1;
            VALOR = VALOR + 0;
            alert('SE TERMINA COMPRA');

          break;
        default:
        
      }
    return [VALOR, NO];    
}

var NFT=prompt('QUE NFT QUIERES COMPRAR? --ESCRIBE EL *NOMBRE PARA COMPRAR -- ESCRIBE *NO para SALIR ');
TOTAL = agregar_compra(NFT, TOTAL[0]);


if (TOTAL[0] != 0){ 
    while (TOTAL[1]<1){
    var NFT=prompt('LA SUMA DE LA COMPRA ES ' + TOTAL[0] + ' CRIPTOS DESEA AGREGAR OTRO? --ESCRIBE EL *NOMBRE PARA COMPRAR --*NO para SALIR');
    TOTAL = agregar_compra(NFT, TOTAL[0]);

    }
}



alert('COMPRA FINAL ES = ' + TOTAL[0] + ' CRIPTOS ');




