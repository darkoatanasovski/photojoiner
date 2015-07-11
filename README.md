# photojoiner
Photojoiner is a javascript lightweight library (880 B) for joining photos. You can use this library without jQuery.
more info you can find at http://atanasovski.tumblr.com/post/123800073241/join-multiple-photos-with-pure-javascript-library

#Basic usage

Load photojoiner.js or photojoiner.min.js in the end of the document ( to stop render blocking )
```javascript
<script type="text/javascript" src="photojoiner.js"></script>

<script>

// Array of images, static or dynamically added with .push() method

images = ['http://b-i.forbesimg.com/larrymagid/files/2013/04/galaxy1.jpg',
         'https://www.trylumiaphone.com/images/home/phone2.png'];

// Send images array as a parameter, required
photojoiner.join({
   'images' : images
});

</script>
```javascript
#Advanced usage

Except required parameter images, you can pass more parameters to adjust photojoiner

images

Array of urls. This parameter is required
```javascript
photojoiner.join({
  'images' : ['image1.jpg','image2.jpg',’image3.jpg']
}); 
```
canvasHeight

Integer value for height of the container. Default value is 350 that means, the output image will be with height of 350px and pictures will bi scaled to the height
```javascript
photojoiner.join({
 'images' : ['image1.jpg','image2.jpg',’image3.jpg'],

'canvasHeight': 500
}); 
```
canvas

HTML dom node. Default is canvas element with id joined. You can send your own canvas element
```javascript
photojoiner.join({
 'images' : ['image1.jpg','image2.jpg',’image3.jpg'],

'canvas':document.getElementById('my_canvas_element')
}); 
```
#How many pictures can i join?

You can join unlimited pictures. Send urls of the pictures as a parameter, and photojoiner will join all pictures.
Example output with more than two pictures
```javascript
images = ['http://cdn2.gsmarena.com/vv/bigpic/xolo-black-2015.jpg','http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi4i.jpg','http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-grand-prime-sm-g530h.jpg','http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-5c-new1.jpg','http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6-3.jpg'];
photojoiner.join({
   'images' : images,
   'canvasHeight':200
});
```
