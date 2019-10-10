
let $F = {
    IsNullOrEmpty: (value) => {
        if (value == undefined || value == null || value == '') {
            return true;
        } else {
            return false;
        }
    },

    ExistsElement: (elementID) => {
        let element = document.getElementById(elementID);
        if (element == undefined || element == null) { return false; }
        return true;
    }


}