block('contact').elem('detail')(

    tag()('tr'),

    content()(function () {
        return [
            {
                tag: 'td',
                elem: 'detail-field',
                content: this.ctx.field
            },
            {
                tag: 'td',
                content: this.ctx.value
            }
        ];
    })

);
