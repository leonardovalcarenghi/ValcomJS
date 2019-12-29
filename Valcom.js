

/*

CLASS {
    adicionar
    remover
    existe
    

}


*/


let Initialize = function () {

    let $
    let Valcom

}





let Valcom = function () {
    let parameters = arguments;

    console.log('para', parameters);


    let _t = this;


    //Obter objects recebidos por arguments:
    let objects = Array.prototype.slice.call(arguments);

    //Obter lista de elementos no DOM pelo objeto informado:
    let elements = _getElementsByObjects(objects);


    _t.Class = new $ValcomClass(elements);


    return _t;

}



class $ValcomClass {

    constructor(_elements = []) {
        this.Properties.Elements = _elements;

        console.log('elements q chegou na class', _elements);
    }

    Properties = {

        // lista de elementos
        Elements: null,
    }


    // Atribuir classe
    Add(_newClassName = '') {

    }

    // Atribuir várias classes
    AddRange() {

    }

    // Remover class
    Remove(_className = '') {

    }

    // Remover uma classe e adicionar outra no lugar
    Replace(_oldClassName = '', _newClassName = '') {

    }

    // Existe class
    Exist(_className = '') {

    }

    // Obter elementos pela classe informada
    get GetElements() {

    }



}




// Valcom('object')



function _getElementsByObjects(_arguments) {
    let objects = _arguments;
    // console.log(objects);

    let elements = [];

    objects.forEach(obj => {

        //Obter identificador do objeto:
        let identifierObject = obj.substring(0, 1)

        //ID:
        if (identifierObject == '#') {
            obj = obj.replace('#', '');
            let E = document.getElementById(obj);
            if (E != null) { elements.push(E); }
        }

        //Classe:
        if (identifierObject == '.') {
            obj = obj.replace('.', '');
            let byClass = document.getElementsByClassName(obj);
            console.log('byClass', byClass)
            for (let index = 0; index < byClass.length; index++) {
                const E = byClass[index];
                if (E != null) { elements.push(E); }
            }
        }
    });

    return elements;

}

let a = function () {
    document.prototype.getElementsByObject = function () {

    }
}