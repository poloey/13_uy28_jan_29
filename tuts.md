# jquery essential 

jQuery is a javascript DOM library. The slogan of jQuery is “write less do more”.  Jquery founded by John Resig. Its very popular javascript dom library which is used by google, microsoft, yahoo.         

### How to select in jquery

we can select html element using `jQuery` function. It takes css selector as selector.  short form of `jQuery` is `$`. 

~~~js
//selecting h1 tag
$('h1') 

//selecting hello class
$('.hello')

//selecting hello id
$('#hello')
 ~~~ 

### changing html content and getting content in jquery    

We can getting html and changing html content using `html` method.    

~~~js
//getting html content h1 tag
$('h1').html();

//changing html content h1 tag
$('h1').html('change content');
~~~

### Event in jquery 
Using on method we can add event to a element in jquery     

~~~js
h1.on('click', function () {
  alert('hello world');
});
~~~

### hide, show & toggle method    
hide, show method for hiding and showing html content. toggle method for toggling html content. I mean If content already hidden it will show content. If content already shown it will hide content.      

~~~php
$('p.first_paragraph').hide(300);
$('p.first_paragraph').show(300);
$('p.first_paragraph').toggle(300);
~~~

here parameter 300 means, it will hide, show with in 300 milliseconds. we can use slow, medium, fast parameter as well. same goes to stated below method as well

### slideUp, slideDown & slideToggle method    
slideUp method hiding content with slide up animation. slideDown method showing content with slideDown animation. slideToggle method toggling with sliding animation.    

~~~php
$('p.first_paragraph').slideUp(300);
$('p.first_paragraph').slideDown(300);
$('p.first_paragraph').slideToggle(300);
~~~

### fadeOut, fadeIn & fadeToggle method    
fadeOut method hiding content with fading animation. fadeIn method showing content with fading animation. fadeToggle method toggling with fading animation.    

~~~php
$('p.first_paragraph').fadeOut(300);
$('p.first_paragraph').fadeIn(300);
$('p.first_paragraph').fadeToggle(300);
~~~

### getting attribute in jquery 

Using `attr` method we will get html attribute. It will work as getter and setter.      

~~~php
// getting attribute value using attr method
$('#hello').attr('src');  

// changing  attribute value using attr method
$('#hello').attr('src', 'some path');  
~~~

# Sorting using isotope jquery plugin      
There are plenty of plugins out there for sorting and filtering. Therefore isotope is one of the most popular plugin.     

after downloading jquery and isotope (https://isotope.metafizzy.co/) we will add in our html file      
~~~html     
<script src="jquery-3.3.1.min.js"></script>
<script src="isotope.pkgd.min.js"></script>
~~~      

       
Markup for sorting content       

~~~html
<div class="grid">
  <div class="item flower"> rose </div>
  <div class="item bird">peacock</div>
  <div class="item fruit">mango</div>
  <div class="item flower">marigold</div>
  <div class="item flower">jasmin</div>
  <div class="item bird">parrot</div>
  <div class="item fruit">banana</div>
  <div class="item flower">tulip</div>
  <div class="item flower">sunflower</div>
</div>
~~~
        
Initialize isotope using jquery     
~~~js
// initializing 
$grid = $('.grid').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});


// sorting 
$('button').on('click', function() {
  // var a = $(this).attr('data-name')
  var a = this.dataset.name;
  $grid.isotope({
    filter: a
  });
});
~~~

# Owl carousel      

Owl carousel is one of the best carousel out there. Best thing about owl carousel is its touch friendly. I mean its functioning great in mobile device also          


First download owl carousel. Add owl carousel css file and js file in your html      

~~~html
// html file
<link rel="stylesheet" href="owl/assets/owl.carousel.css">
<link rel="stylesheet" href="owl/assets/owl.theme.default.css">     
// js file
<script src="isotope.pkgd.min.js"></script>
~~~

// Markup for slider 
~~~html
<div class="grid">
  <div class="item flower"> rose </div>
  <div class="item bird">peacock</div>
  <div class="item fruit">mango</div>
  <div class="item flower">marigold</div>
  <div class="item flower">jasmin</div>
  <div class="item bird">parrot</div>
  <div class="item fruit">banana</div>
  <div class="item flower">tulip</div>
  <div class="item flower">sunflower</div>
</div>
~~~

Initialize for slider     
~~~js
// initialize owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
    margin:10,
    nav:true,
    items: 1
});
~~~













































