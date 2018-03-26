
// flash.js
// Customizable jQuery library for web applications flash messages
// Author: Theodoros Georgopoulos
// Date: March 20, 2018
// Version: 1.0.0
// Copyright: MIT


// define the message container div
var $message_container = $("<div></div>");
$('body').append($message_container);

// define the default options
var $options = {
  'bgColor' : '#5cb85c',
  'duration' : 4000,
  'ftColor' : 'white',
  'vPosition' : 'bottom',
  'hPosition' : 'right',
  'fadeIn' : 400,
  'fadeOut' : 400,
  'clickable' : true,
  'autohide' : true
};


function flash(message, options = null){
  var type = typeof options;
  if (options !== null && type === 'object') {
    $.extend($options, options)
  }
//Message container div css
  msg_container_css = {
    "position": "fixed",
    "margin-left" : '7px',
    "z-index" : '50',
  };
  msg_container_css[$options.vPosition] = "3px";
  msg_container_css[$options.hPosition] = "5px";
  $message_container.css(msg_container_css);


// define the message div
var $message = $("<div></div>");

//Message div css
  msg_css = {
    'text-align' : 'right',
    'margin-top' : '10px',
    'padding' : '15px',
    'border' : '1px solid #dcdcdc',
    'border-radius': '5px',
    'float': 'right',
    'clear': 'right',
    'background-color': $options.bgColor,
    'color' : $options.ftColor,
    'font-family': "Arial, Helvetica, sans-serif",
  };
  $message.css(msg_css);
//Adding text to message
  $message.text(message);

//Appeding message div to message container div
  $message_container.append($message).children(':last').hide().fadeIn($options.fadeIn);
//Check if message is clickable to enable message click hide action
  if ($options.clickable) {
    $message.on('click', function(){
      $(this).fadeOut($options.fadeOut);
    });
  }

//Check if message is enabled to autohide
  if ($options.autohide) {
    setTimeout(function(){
      $message.fadeOut($options.fadeOut);
    },$options.duration);
  }


};
