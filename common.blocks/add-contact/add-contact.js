modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function (provide, $, BEMHTML, DOM) {

    /**
    * @namespace
    * @name Add-contact
    */
    DOM.decl('add-contact', /** @lends Add-contact.prototype */ {}, /** @lends Add-contact */ {

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

    });

    provide(DOM);

});
