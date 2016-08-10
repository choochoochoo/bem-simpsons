block('add-contact')(

    content()(function () {
        return {
            elem: 'button',
            mix: [{
                block: 'button',
                mods: { size: 'l', type: 'add' }
            }],
            content: this.ctx.content
        };
    })

);
