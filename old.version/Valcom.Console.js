



let $ConstructorConsoleValcom = function (_consoleType) {
    //Inicializador:
    let _$t = this;

    //Logs do Freamwork:
    _$t.LOG = (_message) => {
        if (_Valcom.Logs) { console.log(' > VALCOM |', _message); }
        return _message;
    }

    //Console Log do DEV:
    _$t.Console = (_message, _optionParameters = []) => {
       return console.log(_message, _optionParameters  );
    }
    
    if (_consoleType === 'LOG') { return _$t.LOG; }
    if (_consoleType === 'CONSOLE') { return _$t.Console; }
}

class ValcomConsole extends $ConstructorConsoleValcom {
    constructor(e) {
        super(e);
    }
}

