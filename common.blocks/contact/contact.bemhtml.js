block('contact')(

    content()(function() {

        this.ctx.contact = {
            group: 'группа',
            name: 'имя',
            phone: '123 - 123',
            address: 'мой адрес',
            email: 'mymail@mail.ru'
        };

        return [
            {
                elem: 'photo',
                content: this.ctx.contact.photo || 'http://tenorok.github.io/shri-bem-practice/store/mrx.jpeg'
            },
            {
                elem: 'group',
                content: this.ctx.contact.group || ''
            },
            {
                elem: 'info',
                content: [
                    {
                        elem: 'name',
                        content: this.ctx.contact.name || 'MrX'
                    },
                    {
                        elem: 'phone',
                        content: this.ctx.contact.phone || ''
                    },
                    {
                        elem: 'address',
                        content: this.ctx.contact.address || ''
                    },
                    {
                        elem: 'email',
                        content: this.ctx.contact.email || ''
                    }
                ]
            }
        ];

    })
);
