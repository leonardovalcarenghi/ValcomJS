/*!
 * Valcom JavaScript Library v1-beta
 * https://leonardovalcarenghi.github.io/ValcomJS/
 *
 * Copyright Leonardo J. Valcarenghi
 * Creation Date: 08/10/2019
*/

//Valcom Selector;
let Valcom;

// Configurações, Métodos e Informações do Valcom:
let _Valcom = {

    /*Informações*/
    Version: '1.0.0.0',
    Developer: 'Leonardo J. Valcarenghi',

    /*O arquivo referenciado foi na página Master*/
    MasterPage: false,

    /*Exibir Logs do Freamwork*/
    Logs: true,

    /*O arquivo já foi inicializado?*/
    Initialized: false,

    /*Inicializar o Freamwork*/
    Initialize: () => {

        if (_Valcom.Initialized) { if (_Valcom.Logs) { return console.log('O Valcom já foi inicializado'); } else { return } }


        //Setar Cifrão:
        window.$ = _$_valcomMethods;
        //POST e GET
        window.$['Get'] = new ValcomRequest('GET');
        window.$['Post'] = new ValcomRequest('POST');

        //Console:
        window.$['Console'] = new ValcomConsole('CONSOLE'); /*usado para o desenvolvedor*/
        window.$['LOG'] = new ValcomConsole('LOG');         /*logs do freamwork*/

        $.LOG('Valcom inicializado');

        window.$['DEL'] = function () {
            var elementsArray = document.getElementsByTagName("*");
            for (var i = 0, max = elementsArray.length; i < max; i++) {
                let element = elementsArray[i];
                element.remove();
            }
        }

        //Setar Váriavel:
        Valcom = _$_valcomMethods;

        //Inicializado:
        _Valcom.Initialized = true;
    },

    /*Querys Seletores*/
    Selector: {
        ID: '#',
        CLASS: '.',
        SEPARATOR: ',',

        ATTR_START: '[',
        ATTR_END: ']',

        /*Checar se Selector informado é válido*/
        Check: (elementTAG) => {
            elementTAG = _Valcom.Selector.Get(elementTAG);
            if (elementTAG == undefined || elementTAG == null || elementTAG == '') { return false; }
            if (elementTAG == _Valcom.Selector.ID) { return true; }
            if (elementTAG == _Valcom.Selector.CLASS) { return true; }
            return false;
        },

        /*Obter Selector Definidor*/
        Get: (elementTAG) => {
            let _query = elementTAG.substring(0, 1);
            return _query;
        }
    },

    GetElements: (elementsString) => {
        let elementsArray = elementsString.replace(/ /g, '').split(_Valcom.Selector.SEPARATOR);
        return elementsArray;
    }


}


let _$_valcomMethods = (_object) => {
    //Verificar o tipo de objeto recebido:
    if (typeof (_object) === 'function') { return _$_valcomMethods_$Function(_object); }
    if (typeof (_object) === 'string') { return _$_valcomMethods_$String(_object); }
    if (Array.isArray(_object) === true) { return _$_valcomMethods_$Array(_object); }
    if (typeof (_object) === 'object') { return _$_valcomMethods_$Object(_object); }
    return null;
}

//Function
let _$_valcomMethods_$Function = (_function) => {
    // if (_Valcom.Logs) { console.log('Object is a Function'); }
}

//Object
let _$_valcomMethods_$Object = (_object) => {
    // if (_Valcom.Logs) { console.log('Object is Object'); }
}

//List
let _$_valcomMethods_$Array = (_array) => {
    // if (_Valcom.Logs) { console.log('Object is a Array'); }

    //Nova Instância do ConstrutorList:
    let _valcomArray = new ValcomList();
    _valcomArray.Array = _array;
    return _valcomArray;
}

//QueryString
let _$_valcomMethods_$String = (_queryString) => {

    // if (_Valcom.Logs) { console.log('Object is a String'); }

    let queryString = _queryString;

    //Verificar se recebeu o selector:
    if (queryString == undefined || queryString == null || queryString == '') {
        return 'Seletor não foi informado.';
    }

    //Verificar se selector no elemento é válido:
    if (!_Valcom.Selector.Check(queryString)) {

        let _valcomString = new ValcomString();
        _valcomString.String = _queryString;
        return _valcomString;

        // $.LOG('Seletor é inválido'); return;    

    }


    //Obter Arrar dos Elementos [PRÓXIMA VERSÃO]:
    let elementsArray = _Valcom.GetElements(queryString);
    // console.log('elementsArray', elementsArray);

    // elementsArray.forEach(item => {
    //     // let
    // });

    //Tipo de Seletor:
    let _selector = _Valcom.Selector.Get(queryString);
    let _elementIdentifier = queryString.replace(_selector, '');

    if (_selector == _Valcom.Selector.ID) {
        var element = document.getElementById(_elementIdentifier)
        if (element == null) { $.LOG('Elemento não encontrado'); return; }
    }
    if (_selector == _Valcom.Selector.CLASS) {
        var element = document.getElementsByClassName(_elementIdentifier)[0]
        if (element == null) { $.LOG('Elemento não encontrado'); return; }
    }

    //Nova Instância do ConstrutorSelector:
    let _valcom = new ValcomSelector(queryString);
    _valcom.Name = _elementIdentifier;
    _valcom.Type = element.tagName;
    _valcom.Selector = _selector;
    _valcom.SelectorFull = queryString;
    _valcom.SelectorFor = (_selector == _Valcom.Selector.ID ? 'ID' : 'CLASS');
    return _valcom;
}


// Selector Function
let _valcomSelectorFunction = (queryString) => {

}

//Inicializar o Valcom:
_Valcom.Initialize();

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


$('#Botao').Click(() => {
    alert('clicou na caixa de texto');
});

function test() {
    $.Get('viacep.com.br/ws/01001000/json/', response => {
        console.log('cep response', response);
    });
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */