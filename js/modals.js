var modalModule = (function () {
    function init() {
        //Validate
        if (typeof document === 'undefined' &&
            typeof window === 'undefined') {
            return;
        }

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btns = document.getElementsByClassName("myModal");

        if (btns.length != 0) {
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 

            Array.prototype.forEach.call(btns, function (ele) {
                ele.onclick = function () {
                    modal.style.display = "block";
                }
            });

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }
    return {
        init: init,
    }
})();

modalModule.init();
