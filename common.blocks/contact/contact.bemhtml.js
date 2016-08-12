block('contact')(

    js()(true),

    content()(function () {
        var ctx = this.ctx;

        ctx.detailsBlock = (ctx.details || []).map(function (detail) {
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
                content: ctx.photo || 'http://tenorok.github.io/shri-bem-practice/store/mrx.jpeg'
            },
            {
                elem: 'group',
                content: ctx.group
            },
            {
                elem: 'info',
                content: [
                    {
                        elem: 'name',
                        content: ctx.name || 'MrX'
                    },
                    {
                        elem: 'phone',
                        content: ctx.phone
                    },
                    {
                        elem: 'address',
                        content: ctx.address
                    },
                    {
                        elem: 'email',
                        content: ctx.email
                    },
                    {
                        elem: 'more',
                        content: [
                            {
                                elem: 'details',
                                content: ctx.detailsBlock
                            }
                        ]
                    }
                ]
            }
        ];

    })
);
