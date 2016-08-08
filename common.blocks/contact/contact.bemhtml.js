block('contact')(

    content()(function() {

        return [
            {
                elem: 'photo',
                content: this.ctx.photo || 'http://tenorok.github.io/shri-bem-practice/store/mrx.jpeg'
            },
            {
                elem: 'group',
                content: this.ctx.group || ''
            },
            {
                elem: 'info',
                content: [
                    {
                        elem: 'name',
                        content: this.ctx.name || 'MrX'
                    },
                    {
                        elem: 'phone',
                        content: this.ctx.phone || ''
                    },
                    {
                        elem: 'address',
                        content: this.ctx.address || ''
                    },
                    {
                        elem: 'email',
                        content: this.ctx.email || ''
                    }
                ]
            }
        ];

    })
);
