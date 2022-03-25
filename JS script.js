$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrolly > 20) {
            $('.nab').addclass("sticky");
        } else {
            $('.nab').removeclass("sticky");
        }
    })
});