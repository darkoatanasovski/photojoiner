/*
* Horizontal Photo Joiner
*
* version     : 1.0
* author      : Darko Atanasovski
* author_url  : https://goo.gl/i0ypRp
*/
var photojoiner = (function(){
    var drawData = [];
    var image;
    var canvas_width = 0;
    var offset_x = 0;
    var module = {};  
    
        module.join = function( config ){
            config = config || {};
            images = config.images || [];
            canvasHeight = config.canvasHeight || 350;
            canvas = config.canvas || document.getElementById('joined');
            canvas.height = canvasHeight;
            context = canvas.getContext('2d');
            if( images.length > 0 )  
            {
                image = new Image();
                image.src = images[0];
                //Wait for image load
                image.onload = function(){
                        images.shift();
                        ratio = image.naturalHeight/canvasHeight;
                        image_width = this.width/ratio;
                        image_height = this.height/ratio;    
                        drawData.push({
                            'image': this,
                            'ratio': ratio,
                            'scaledWidth' : image_width,
                            'scaledHeight' : image_height
                        });
                        canvas_width += image_width; 
                        module.join( config );
                    };
            }else{
                canvas.width = canvas_width;  
                for( var i=0; i<drawData.length; i++ )
                {
                    current = drawData[i];
                    context.drawImage(current.image, 0, 0, current.image.width, current.image.height, offset_x, 0, current.scaledWidth, current.scaledHeight); 
                    offset_x += current.scaledWidth;
                }
            }  
        };
    return module;
})();
