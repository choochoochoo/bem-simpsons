block('contact')(

    js()(true),

    content()(function () {

        this.ctx.detailsBlock = (this.ctx.details || []).map(function (detail) {
            var key = Object.keys(detail)[0];
            return {
                elem: 'detail',
                field: key,
                value: detail[key]
            };
        });

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
                    },
                    {
                        elem: 'more',
                        content: [
                            {
                                elem: 'details',
                                content: this.ctx.detailsBlock
                            }
                        ]
                    }
                ]
            }
        ];

    })
);
