let TOTAL = [0,0];

function agregar_compra (NFT, VALOR){


  const item = {
    MEN: {
      precio:1
    },
    CALAVERA: {
      precio:2
    },
    GIRASOL: {
      precio:3
    },
    NICKITUS: {
      precio:7
    }
  }

    switch (NFT) {
        case 'MEN':
            VALOR = VALOR + item.MEN.precio;
            NO = 0;
            alert('COMPRASTE MEN');
            
          break;
        case 'CALAVERA':
            VALOR = VALOR + item.CALAVERA.precio;
            NO = 0;
            alert('COMPRASTE CALAVERA');
          break;
        case 'GIRASOL':
            VALOR = VALOR + item.GIRASOL.precio;
            NO = 0;
            alert('COMPRASTE GIRASOL');
          break;
        case 'NICKITUS':
            VALOR = VALOR + item.NICKITUS.precio;
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




