modules.define('add-contact', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {}, {
    live: function () {
        this
            .liveBindTo('button', 'click', function () {

                var that = this;

                $.ajax('/store/all.json').done(function (data) {

                    var contact = data[Math.floor(Math.random() * data.length)];

                    contact.block = 'contact';

                    var html = BEMHTML.apply(contact);

                    that.emit('add', {
                        html: html
                    });
                });
            });

        return false;
    }
}));

});
