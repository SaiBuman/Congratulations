var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
var block_img_obj = ""

function new_image() {
    fabric.Image.fromURL("1.jpg", function (Img) {
        block_img_obj = Img;
        block_img_obj.scaleToWidth(500);
        block_img_obj.scaleToHeight(510);
        block_img_obj.set({
            top: 0,
            left: 0
        });


        canvas.add(block_img_obj);

    });
}

function playSound() {
    x.play();
}