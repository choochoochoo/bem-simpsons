block('contacts').content()(function () {
    
    return applyCtx(
        this.data.data.map(function (contact) {
            contact.block = 'contact';
            return contact;
        })
    );

});
