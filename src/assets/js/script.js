window.onload = function() {
    var content = document.querySelector('.content');
    var footer = document.getElementById('footer');
    
    function adjustFooter() {
        var contentHeight = content.offsetHeight;
        var windowHeight = window.innerHeight;
        
        if (contentHeight < windowHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = 0;
        } else {
            footer.style.position = 'relative';
            footer.style.bottom = 'initial';
        }
    }
    
    adjustFooter();
    
    window.addEventListener('resize', adjustFooter);
};