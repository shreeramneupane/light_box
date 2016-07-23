function LightBox() {
    this.images = document.querySelectorAll('.images-container img');
    var that = this;

    this.init = function () {
        for (var i = 0; i < that.images.length; i++) {
            (function (position) {
                that.images[position].addEventListener("click", function () {
                    var imageLocation = this.src;
                    that.createPopUp(imageLocation, position);
                });
            })(i);
        }
    };

    this.createPopUp = function (imageLocation, position) {
        var body = document.getElementsByTagName("body")[0];

        var lightBoxContainer = document.createElement("div");
        lightBoxContainer.setAttribute("id", "light-box-container");
        body.appendChild(lightBoxContainer);

        var backgroundDiv = document.createElement("div");
        backgroundDiv.className = "light-box-background";
        lightBoxContainer.appendChild(backgroundDiv);

        var lightBoxImageDiv = document.createElement("div");
        lightBoxImageDiv.className = "light-box";
        lightBoxContainer.appendChild(lightBoxImageDiv);

        var productImage = document.createElement("img");
        productImage.setAttribute("src", imageLocation);
        lightBoxImageDiv.appendChild(productImage);

        var crossButton = document.createElement("div");
        crossButton.className = "light-box-cross-button";
        crossButton.innerHTML = "X";
        lightBoxImageDiv.appendChild(crossButton);

        var rightArrow = document.createElement("div");
        rightArrow.className = "arrow right-arrow";
        rightArrow.innerHTML = ">";
        lightBoxImageDiv.appendChild(rightArrow);

        var leftArrow = document.createElement("div");
        leftArrow.className = "arrow left-arrow";
        leftArrow.innerHTML = "<";
        lightBoxImageDiv.appendChild(leftArrow);

        rightArrow.onclick = function () {
            if (position < that.images.length - 1) {
                var nextImageLocation = (that.images[position + 1]).src;
                closePopUp();
                that.createPopUp(nextImageLocation, position + 1)
            }
        };

        leftArrow.onclick = function () {
            if (position > 0) {
                var nextImageLocation = (that.images[position - 1]).src;
                closePopUp();
                that.createPopUp(nextImageLocation, position - 1)
            }
        };

        crossButton.onclick = function () {
            closePopUp();
        };

        backgroundDiv.onclick = function () {
            closePopUp();
        };

        function closePopUp() {
            body.removeChild(lightBoxContainer);
        }
    };
}

var lb = new LightBox();
lb.init();
