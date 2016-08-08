block('contacts').content()(function () {

    var json = {
        '/': './store/all.json',
        '/otto': './store/otto.json',
        '/homer': './store/homer.json'
    };
    
    var route = this.data.route;

    function doSomethingAsync() {
        var promise = vow.promise();

        Fs.readFile(json[route], function (error, data) {
            if (error){
                return promise.reject(new Error('API request error: ', err));
            }

            return promise.fulfill(JSON.parse(data));
        });

        return promise;
    }

    return doSomethingAsync().then(function (contacts) {
        return applyCtx(
            contacts.map(function (contact) {
                contact.block = 'contact';
                return contact;
            })
        );
    });

});
