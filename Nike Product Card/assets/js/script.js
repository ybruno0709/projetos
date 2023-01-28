$(() => {
    const container = $('.container');
    const colors = $('.color-single');

    colors.each(i => {
        $(colors[i]).click((e) => {
            if (i == 0) {
                container.removeClass('second-color');
            } else if (i == 1) {
                container.addClass('second-color');
            }

        });
    });
});