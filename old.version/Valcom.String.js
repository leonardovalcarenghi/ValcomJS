let ValcomStringConstructor = function () {
    //Inicializador:
    let _$t = this;

    //Juntar Itens da Array em um único objeto:
    _$t.Separate = (divider) => {
        let string = _$t.String;
        let arraySplit = string.split(divider);
        return arraySplit;
    }

    _$t.Concat = (text) => {
        let string = _$t.String;
        string = string + text;
        return string;
    }
}

class ValcomString extends ValcomStringConstructor {
    constructor() {
        super();
    }
}