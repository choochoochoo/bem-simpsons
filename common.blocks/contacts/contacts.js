modules.define('contacts', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.listenShowContact();
                this.listenAddContact();
            }
        }
    },
    /**
     * Подписаться на событие разворачивания детальной информации по контакту
     */
    listenShowContact : function() {

        this._contacts = this.findBlocksInside('contact');

        var that = this;
        this._contacts.forEach(function(contact) {
            contact.on('show', that.hideAllDetails.bind(that));
        });
    },

    /**
     * Подписаться на событие добавления контакта
     */
    listenAddContact : function() {
        this.findBlockInside('add-contact').on('add', this.addContact.bind(this));
    },

    /**
     * Добавить контакт
     * @param {Object} e Объект события
     * @param {Object} data Объект данных по событию
     */
    addContact : function(e, data) {
        this.findElem('list').append(data.html);
    },

    /**
     * Скрыть все детальные данные по всем контактам
     */
    hideAllDetails : function() {
        this._contacts.forEach(function(contact) {
            contact.hide();
        });
    }
}));

});
