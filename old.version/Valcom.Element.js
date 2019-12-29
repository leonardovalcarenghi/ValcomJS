let ValcomItemConstructor = function () {

    //Inicializador:
    let _$t = this;

    // ############### Métodos do HTML ############### //
    _$t.HTML = {

        //Obter HTML:
        Get: () => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _html = _element.innerHTML;
                return _html;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                let _html = _elements[0].innerHTML;
                return _html;
            }
        },

        //Setar HTML:
        Set: (_html) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                _element.innerHTML = _html;
                return _html;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].innerHTML = _html; }
                return true;
            }
        },

        //Incrementar HTML:
        Increment: (_html) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                _element.innerHTML += _html;
                return _html;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].innerHTML += _html; }
                return true;
            }
        }
    }

    // ############### Métodos de Atributos ############### //
    _$t.Attr = {

        //Obter Atributo:
        Get: (_attrName) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _attr = _element.getAttribute(_attrName);
                return _attr;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                let _attr = _elements[0].getAttribute(_attrName);
                return _attr;
            }
        },

        //Setar Novo/Existente Atributo
        Set: (_attrName, _attrValue) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _attr = _element.setAttribute(_attrName, _attrValue);
                return true;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].setAttribute(_attrName, _attrValue); }
                return true;
            }
        },

        //Remover Atributo
        Remove: (_attrName) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _attr = _element.removeAttribute(_attrName);
                return true;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].removeAttribute(_attrName); }
                return true;
            }
        },

        //Verificar se existe um atributo no elemento
        Have: (_attrName) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _attr = _element.attributes.getNamedItem(_attrName);
                if (_attr == null) { return false } else { return true; }
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                let _attr = _elements[0].attributes.getNamedItem(_attrName);
                if (_attr == null) { return false } else { return true; }
            }
        },

    }

    // ############### Métodos de Classes ############### //
    _$t.Class = {
        //Adicionar Classe
        Add: (_className) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                _element.classList.add(_className);
                return true;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].classList.add(_className) }
                return true;
            }
        },

        //Remover Classe
        Remove: (_className) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                _element.classList.remove(_className);
                return true;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                for (let index = 0; index < _elements.length; index++) { _elements[index].classList.remove(_className) }
                return true;
            }
        },

        //Verificar se Existe Classe
        Have: (_className) => {
            /*obter id e classe*/
            let $thisElementID = _$t.ID, $thisElementCLASS = _$t.CLASS;

            /*id*/
            if ($thisElementID) {
                let _element = document.getElementById($thisElementID);
                let _contains = _element.classList.contains(_className);
                return _contains;
            }

            /*classe*/
            if ($thisElementCLASS) {
                let _elements = document.getElementsByClassName($thisElementCLASS);
                let _contains = _elements[0].classList.contains(_className);
                return _contains;
            }
        },
    }


    _$t.Click = (_callBack) => {

    }

    _$t.Click['Call'] = () => {

    }

    _$t.Click['RemoveEvent'] = () => {

    }



    // ############### Métodos de Style ############### //
    _$t.Style = {

        //Exibir Elemento
        Show: () => {

        },

        //Ocultar Elemento
        Hide: () => {

        },

        //Limpar Estilos do Elemento:
        Clear: () => {

        },


        //Sub-Métodos de Cores//
        Color: {

            //Setar:
            Set: () => {

            },

            //Obter:
            Get: (_color) => {

            }

        },

        //Sub-Métodos do BackgroundColor//
        BackgroundColor: {

            //Setar:
            Set: () => {

            },

            //Obter:
            Get: (_color) => {

            }

        },

        //Sub-Métodos da Fonte//
        Font: {

            //Setar:
            Set: () => {

            },

            //Obter:
            Get: (_fontName) => {

            }

        },




    }




















    // _t.GetThisName = () => {
    //     //Query:
    //     let _queryName = _t.Name;
    //     let _query = _Valcom.Selector.Get(_queryName);
    //     let _name = _queryName.replace(_query, '');
    //     if (!_Valcom.Selector.Check(_query)) { return 'Query não encontrada.'; };
    //     return _name;
    // }

    // _t.GetThisQuery = () => {
    //     //Query:
    //     let _queryName = _t.Name;
    //     let _query = _Valcom.Selector.Get(_queryName);
    //     return _query;
    // }

    // _t.Click = (callBack) => {

    //     let _elementTAG = _t.Name;


    //     function clicked() {
    //         if (typeof (callBack) === 'function') { callBack(event); }
    //     }

    //     let element = document.getElementById(_elementTAG);
    //     if (element != null) { element.addEventListener("click", clicked); }


    //     let elementsArray = document.getElementsByClassName(_elementTAG);
    //     for (let index = 0; index < elementsArray.length; index++) {
    //         const e = elementsArray[index];
    //         e.addEventListener("click", clicked);
    //     }
    // }

    // Setar/Obter HTML do Elemento
    // _t.HTML = (valueHTML = null) => {



    //     //Nome e Query do Elemento:
    //     let _name = _t.GetThisName();
    //     let _query = _t.GetThisQuery();

    //     //ID
    //     if (_query == $Valcom.Selector.ID) {
    //         let element = document.getElementById(_name);
    //         if (valueHTML == null) { return element.innerHTML; }
    //         if (valueHTML != null) { return element.innerHTML = valueHTML; }
    //     }

    //     //CLASS
    //     if (_query == $Valcom.Selector.CLASS) {
    //         let element = document.getElementsByClassName(_name)[0];
    //         if (valueHTML == null) { return element.innerHTML; }
    //         if (valueHTML != null) { return element.innerHTML = valueHTML; }
    //     }
    // }

    // Setar/Obter Texto de Caixas de Texto
    // _t.Text = (value = null) => {
    //     return 'retorno da função'
    // }


    // Trabalhando com Atributos dos Elementos
    // _t.Attr = {
    //     Remove: (name) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == $Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             element.removeAttribute(name);
    //             return true;
    //         }

    //         //CLASS
    //         if (_query == $Valcom.Selector.CLASS) {
    //             let elementsArray = document.getElementsByClassName(_name);
    //             for (let index = 0; index < elementsArray.length; index++) {
    //                 const elementClass = elementsArray[index];
    //                 elementClass.removeAttribute(name);
    //             }
    //             return true;
    //         }
    //     },

    //     Get: (name) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == $Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             return element.getAttribute(name);
    //         }

    //         //CLASS
    //         if (_query == $Valcom.Selector.CLASS) {
    //             let elementsArray = document.getElementsByClassName(_name);
    //             const elementClass = elementsArray[0];
    //             return elementClass.getAttribute(name);

    //         }
    //     },

    //     Set: (name, value) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == _Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             element.setAttribute(name, value);
    //             return true;
    //         }

    //         //CLASS
    //         if (_query == _Valcom.Selector.CLASS) {
    //             let elementsArray = document.getElementsByClassName(_name);
    //             for (let index = 0; index < elementsArray.length; index++) {
    //                 const elementClass = elementsArray[index];
    //                 elementClass.setAttribute(name, value);
    //             }
    //             return true;
    //         }
    //     },

    //     Have: (name) => {

    //     },
    // }

    // Trabalhando com Classes dos Elementos
    // _t.Class = {

    //     Add: (className) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == $Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             element.classList.add(className);
    //             return true;
    //         }

    //         //CLASS
    //         if (_query == $Valcom.Selector.CLASS) {
    //             let elementsArray = document.getElementsByClassName(_name);
    //             for (let index = 0; index < elementsArray.length; index++) {
    //                 const elementClass = elementsArray[index];
    //                 elementClass.classList.add(className)
    //             }
    //             return true;
    //         }

    //     },

    //     Remove: (className) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == $Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             element.classList.remove(className);
    //             return true;
    //         }

    //         //CLASS
    //         if (_query == $Valcom.Selector.CLASS) {
    //             let elementsArray = document.getElementsByClassName(_name);
    //             for (let index = 0; index < elementsArray.length; index++) {
    //                 const elementClass = elementsArray[index];
    //                 elementClass.classList.remove(className)
    //             }
    //             return true;
    //         }
    //     },

    //     Have: (className) => {
    //         //Nome e Query do Elemento:
    //         let _name = _t.GetThisName();
    //         let _query = _t.GetThisQuery();

    //         //ID
    //         if (_query == $Valcom.Selector.ID) {
    //             let element = document.getElementById(_name);
    //             return element.classList.contains(className)
    //         }

    //         //CLASS
    //         if (_query == $Valcom.Selector.CLASS) {
    //             return 'Não é possível verificar se existe uma classe dentro de uma classe.';
    //         }
    //     }

    // }

    //Exibir Elemento:
    // _t.Show = () => {
    //     //Nome e Query do Elemento:
    //     let _name = _t.GetThisName();
    //     let _query = _t.GetThisQuery();

    //     //ID
    //     if (_query == $Valcom.Selector.ID) {
    //         let element = document.getElementById(_name);
    //         $[_query + _name].Attr.Remove('hidden');
    //         element.style.display = 'block';
    //     }

    //     //CLASS
    //     if (_query == $Valcom.Selector.CLASS) {
    //         let elementsArray = document.getElementsByClassName(_name);
    //         for (let index = 0; index < elementsArray.length; index++) {
    //             const elementClass = elementsArray[index];
    //             elementClass.removeAttribute('hidden');
    //             elementClass.style.display = 'block';
    //         }

    //     }
    // }

    // //Ocultar Elemento:
    // _t.Hide = () => {
    //     //Nome e Query do Elemento:
    //     let _name = _t.GetThisName();
    //     let _query = _t.GetThisQuery();

    //     //ID
    //     if (_query == $Valcom.Selector.ID) {
    //         let element = document.getElementById(_name);

    //         $[_query + _name].Attr.Set('hidden', 'hidden');
    //         element.style.display = 'none';
    //     }

    //     //CLASS
    //     if (_query == $Valcom.Selector.CLASS) {
    //         let elementsArray = document.getElementsByClassName(_name);
    //         for (let index = 0; index < elementsArray.length; index++) {
    //             const elementClass = elementsArray[index];
    //             elementClass.setAttribute('hidden', 'hidden');
    //             elementClass.style.display = 'none';
    //         }

    //     }
    // }



    /* = = = = = EVENTOS DO COMPONENTE = = = = = */


    // _t.Events = {
    //     Click: {
    //         Remove: () => { }
    //     },

    //     KeyPress: {}

    // }

    //Evento de Clique do Elemento
    // _t.Click = (callBack) => {

    // }



    //Key Up Evento
    // _t.KeyUp = (callBack) => {

    // }


    // //Key Down Evento
    // _t.KeyDown = (callBack) => {

    // }

    // //Key Press Evento
    // _t.KeyPress = (callBack) => {

    // }

}

class ValcomSelector extends ValcomItemConstructor {
    constructor() {
        super();
    }
}





// export {Valcom}


// $['.minhaClasse'].HTML();


// let $ITEM = {



//     Text: (elementID, value = null) => {
//         let element = document.getElementById(elementID);
//         if (element == null) { return 'Elemento não encontrado'; }
//         if (value == null) { return element.value; } else { return element.value = value; }
//     },

//     Html: (elementID, value = null) => {
//         let element = document.getElementById(elementID);
//         if (element == null) { return 'Elemento não encontrado'; }
//         if (value == null) {
//             return element.innerHTML;
//         } else {
//             return element.innerHTML = value;
//         }
//     },

//     Attr: (elementID, attr, attrValue = null) => {
//         let element = document.getElementById(elementID);
//         if (element == null) { return 'Elemento não encontrado'; }
//         if (attr == null || attr == '') { return 'Nome do atributo não fornecido'; }

//         if (attrValue == null) {
//             let inputAttr = element.getAttribute(attr);
//             if (inputAttr == null) { return 'Atributo não encontrado' }
//             return element.getAttribute(attr);
//         } else {
//             if (attrValue == $Valcom.Selector.Delete) { return element.removeAttribute(attr); }
//             return element.setAttribute(attr, attrValue);
//         }
//     },

//     Class: {
//         Add: (itemName, className) => {
//             let _query = $Valcom.Selector.GetQuery(itemName);
//             if (!_query) { return 'Query não informada.' }


//             if (_query == $Valcom.Selector.ID) {
//                 if (!$F.ExistsElement(itemName)) { return 'Elemento não encontrado'; }
//                 let element = document.getElementById(itemName);
//                 element.classList.add(className);
//                 return true;
//             }

//             if (_query == $Valcom.Selector.CLASS) {
//                 let elementsArray = document.getElementsByClassName(itemName);
//                 if (elementsArray.length == 0) { return 'Nenhuma classe informada foi encontrada'; }

//                 //Adicionar Classe em Todas as Classes encontradas:
//                 for (let index = 0; index < elementsArray.length; index++) {
//                     const elementClass = elements[index];
//                     elementClass.classList.add(className)
//                 }
//                 return true;
//             }

//         },

//         Remove: () => {

//         },

//         Check: () => {

//         }
//     }


// }


// let $ITEM = {


//     HTML: (value = null) => {

//         let a = event;
//         console.log('a', a);
//     }

// }






//$('').HTML();

//let $ = {};

function initializeValcom() {
    var elementsArray = document.getElementsByTagName("*");
    // debugger;

    for (var i = 0, max = elementsArray.length; i < max; i++) {

        let element = elementsArray[i];

        //Pegar IDS:
        let ID = element.id;
        if (ID != undefined && ID != null && ID != '') {
            let queryID = $Valcom.Selector.ID + ID;

            let L = new ValcomItemConstructor;
            $[queryID] = L;
            $[queryID].Name = queryID;
            $[queryID].Type = '';
            // $[queryID].name
        }

        //Pegar Classes:
        let Class = element.className;
        if (Class != undefined && Class != null && Class != '') {
            let queryClass = $Valcom.Selector.CLASS + Class;

            let L = new ValcomItemConstructor;
            $[queryClass] = L;
            $[queryClass].Name = queryClass;
            $[queryClass].Type = '';
        }
    }
}

window.onload = function () {
    //Inicializar o Valcom:
    //initializeValcom();

    // = = = = = ATRIBUTOS = = = = = //

    // [FUNCTION] Setar Valor de Atributo:
    // $['#ELEMENTO'].Attr.Set('NomeDoAtributo', 'Valor');

    // [STRING] Obter Atributo do Elemento:
    // $['#ELEMENTO'].Attr.Get('NomeDoAtributo');

    // [FUNCTION] Remover Atributo do Elemento:
    // $['#ELEMENTO'].Attr.Remove('NomeDoAtributo');

    // [BOOLEAN] Verificar se Existe o Atributo no Elemento: 
    // $['#ELEMENTO'].Attr.Have('NomeDoAtributo');

    /*
        OBSERVAÇÕES
        > Para Setar e Remover o atributo de uma classe, ele vai fazer o processo
        para todos os elementos que conterem a classe solicitada.

        > Para Obter e Verificar o atributo de uma classe, ele vai sempre pegar o primeiro elemento de 
        classe encontrado na página.
    */


    // = = = = = HTML = = = = = //

}