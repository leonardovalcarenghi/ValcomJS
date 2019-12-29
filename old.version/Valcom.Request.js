



let $ConstructorRequestValcom = function (_requestType) {
    //Inicializador:
    let _$t = this;

    //Método POST para API
    _$t.Post = (apiURL, parameters, callBack) => {
        _$t.Request('POST', apiURL, parameters, callBack);
    }

    //Método Get para API
    _$t.Get = (apiURL, callBack) => {
        _$t.Request('GET', apiURL, null, callBack);
    }

    //Solicitação Genérica:
    _$t.Request = (method = 'POST', url, parameters, callBack) => {
        let reqXHR = new XMLHttpRequest();
        reqXHR.onreadystatechange = (e) => {
            if (reqXHR.readyState == XMLHttpRequest.DONE) {

                let _response = reqXHR.responseText;
                let _status = reqXHR.status;

                switch (reqXHR.status) {
                    case 200: // OK                 
                        if (typeof (callBack) === 'function') { callBack(_response, _status); }
                        break;

                    default:
                        if (typeof (callBack) === 'function') { callBack(_response, _status); }
                        break;
                }
            }
        }

        //Enviar requisição:
        reqXHR.open(method, url, true);
        reqXHR.setRequestHeader('content-type', 'application/json');
        reqXHR.send(JSON.stringify(parameters));
    }


    if (_requestType === 'GET') { return _$t.Get; }
    if (_requestType === 'POST') { return _$t.Post; }
}

class ValcomRequest extends $ConstructorRequestValcom {

    constructor(e) {
        super(e);
    }
}


// let $REQ = {

//     BaseAPI: '',
//     JSON: true,

//     Post: (apiURL, parameters, callBackOK, callBackError) => {
//         let reqXHR = new XMLHttpRequest();
//         reqXHR.onreadystatechange = (e) => {
//             if (reqXHR.readyState == XMLHttpRequest.DONE) {

//                 switch (reqXHR.status) {
//                     case 200: // OK                 
//                         let response = ($REQ.JSON ? JSON.parse(reqXHR.responseText) : reqXHR.responseText);
//                         if (typeof (callBackOK) === 'function') { callBackOK(response, reqXHR.status); }
//                         break;

//                     default:
//                         let errorResponse = reqXHR.responseText;

//                         if (typeof (callBackError) === 'function') {
//                             if ($F.IsNullOrEmpty(errorResponse)) {
//                                 callBackError(errorResponse, reqXHR.status);
//                             } else {
//                                 callBackError(errorResponse, reqXHR.status);
//                             }
//                         }

//                         break;
//                 }
//             }
//         }

//         //Enviar requisição:
//         reqXHR.open('POST', $REQ.BaseAPI + apiURL, true);
//         if ($REQ.JSON) { reqXHR.setRequestHeader('content-type', 'application/json'); }
//         reqXHR.send(JSON.stringify(parameters));
//     },


//     Get: (apiURL, callBackOK, callBackError) => {

//         let reqXHR = new XMLHttpRequest();

//         reqXHR.onabort = (e) => {

//         }

//         reqXHR.onerror = (e) => {

//         }

//         reqXHR.onload = (e) => {

//         }

//         reqXHR.onreadystatechange = (e) => {
//             if (reqXHR.readyState == XMLHttpRequest.DONE) {

//             }
//         }

//     },





// }


