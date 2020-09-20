// tab栏切换
$(function () {
    $('.detail_tab_list li').click(function () {
        // Click "li" in the upper part, add "current" class in current "li", and remove other brothers
        $(this).addClass('current').siblings().removeClass('current');
        // Click to get the index number of the current "li"
        var index = $(this).index();
        // Let the "item" with corresponding index numbers in the lower part show, and the rest "item" hide
        $('.detail_tab_con .item').eq(index).show().siblings().hide();
    })
})