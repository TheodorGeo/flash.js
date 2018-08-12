#### Lightweight and full Customizable JQuery library

This is a Customizable jQuery library for web applications flash messages & notifications to create instantly flash messages by only including one file !

Requirements:
- JQuery version > 2.2.0
- Include the flash.js or flash.min.js after the JQuery script

To create your first message call the function flash()
```javascript
flash( 'Hello flash.js Users !' ) ;
```
> Results
[![My first Flash Message ](https://raw.githubusercontent.com/TheodorGeo/flash.js/master/default_settings.png "My first Flash Message ")](https://github.com/TheodorGeo/flash.js "My first Flash Message ")

Default options :
```javascript
$options = {
  'bgColor' : '#5cb85c',        //Background Color (any CSS color)
  'duration' : 4000,              //Duration of the message (ms)
  'ftColor' : 'white',             //Font color (any CSS color)
  'vPosition' : 'bottom',      //Vertical position of the message (bottom or top)
  'hPosition' : 'right',         //Horizontal position of the message (right or left)
  'fadeIn' : 400,                 //Fade in time (ms)
  'fadeOut' : 400,             //Fade out time (ms)
  'clickable' : true,           //Hide message when it is clicked
  'autohide' : true          //Autohide message after the duration time
};
```

###### Create a Custom Message
To create a custom message pass an object as a  sescond parameter in the flash() function :
```javascript
flash('Custom Message', {
	'bgColor' : 'tomato',
	'duration' : 10000,
	'vPosition' : 'top',
});
```
License
----

MIT
