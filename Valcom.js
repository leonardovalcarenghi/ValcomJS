

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



    //Obter lista de elementos no DOM pelo objeto informado:



    _t.Class = new $ValcomClass(parameters);


    return _t;

}



class $ValcomClass {

    constructor(_elements = []) {
        this.Properties.Elements = _elements;
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

let CLASS = {

    Add: () => { },
    Remove: () => { },
    GetElements: () => { },
    Have: () => { },

}




// Valcom('object')



function getElementsByObjects() {
    let objects = Array.prototype.slice.call(arguments);
    console.log(objects);

    let elements = [];

    objects.forEach(obj => {
        obj = ''
        console.log('element', obj); let a = '';
        a.substring(0, 1)
        let identifierObject = obj.substring(0, 1)


        //obter da class se tiver:
        let byClass = document.getElementsByClassName(obj);
        elements.push(byClass);

        //ober do id se tiver:
        let E = document.getElementById(element);


    });

}

let a = function () {
    document.prototype.getElementsByObject = function () {

    }
}