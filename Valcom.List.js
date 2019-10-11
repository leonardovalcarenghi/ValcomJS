let ValcomListConstructor = function () {
    //Inicializador:
    let _$t = this;

    //Adicionar na Lista:
    _$t.Add = (value = '', index = null) => {
        let list = _$t.Array;
        if (index == null) { return list.push(value); }
        if (index != null) { return list.splice(index, 0, value); }
    }

    //Obter Valor pelo Index:
    _$t.Get = (index = 0) => {
        let list = _$t.Array;
        return list[index];
    }

    //Remover por String
    _$t.Remove = (value = '') => {
        let list = _$t.Array;
        let index = list.indexOf(value)
        return list.splice(index, 1);
    }

    //Remover pelo Index:
    _$t.RemoveByIndex = (index = 0) => {
        let list = _$t.Array;
        return list.splice(index, 1);
    }

    //Concatenar Itens das Arrays na Array atual
    _$t.Merge = (arrays = []) => {
        let list = _$t.Array;
        arrays.forEach(_ARRAY => {
            _ARRAY.forEach(item => {
                list.push(item);
            });
        });
        return;
    }

    //Loop na Lista de Itens:
    _$t.Loop = (callback) => {
        let list = _$t.Array;
        list.forEach(element => {
            if (typeof (callback) === 'function') { callback(element) }
        });
        return;
    }

    //Remover Primeiro Item da Lista:
    _$t.RemoveFirst = () => {
        let list = _$t.Array;
        return list.shift();
    }

    //Remover Último Item da Lista:
    _$t.RemoveLast = () => {
        let list = _$t.Array;
        return list.pop();
    }

    //Número de Itens na Array:
    _$t.Count = () => {
        let list = _$t.Array;
        return list.length;
    }

    //Converter Array em String:
    _$t.ToString = () => {
        let list = _$t.Array;
        return 'método não implementado.'
    }

    //Juntar Itens da Array em um único objeto:
    _$t.Join = (separator = ',') => {
        let list = _$t.Array;
        let newItem = list.join(separator);
        return newItem;
    }
}

class ValcomList extends ValcomListConstructor {
    constructor() {
        super();
    }
}