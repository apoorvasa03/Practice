<hr> tag


<meta> tag, description attr and utf-8 



<head>



<i> and <em>



<b> and <strong>



<input type='color'> bring up the colour picker



css, proirities of style => inline, internal and external styles <div style=""> , same page <style></style>, golbal css file




css padding and border increases the size of the container (div/ any tag)



css margin doesnt increases the size but pushes the container with the given px values



css => div, h1, p are block elements ie they cover entier row, where as span, anchore not not block element, they have a width of the contenting text.



css - difference between inline, inline-block
when we span is written we can block to allow them in different line, for div we can inline for them to be in same line but they lose the width property, so we can use inline-block to align in same row and have width property in css





css - difference between display:none and visibility: hidden

css -  position: relative abd position: absolute and position:fixed
relative: change the postion from the original postion. it leaves the empty space when moved using left/top/right/bottom

abloute: change the position according to the parent div/tag. it will not leave any space, it is as if the tag element is used from one place to another

fixed: is used in case of nav bar, where the postioned of it is fixed to top of the website



text-center - bring the content inside to center when it is blocked container. if container/div has width then we can used margin: 0 auto 0 auto to align it to center





font-size: px to percentage
100% is 16px. so to have 90px in percentage 90/16*100 is 592.5%. so 90px = 592.5%
this is done bcz in website we have small medium and large font size. if we give in px then it will not be dynamic. so we give in percentage. 

font-size: px to em
16px is 1em. so 90px is 5.92em

problem with both % and em is it is inherited, consider body has 2em and h1 is 5em. when h1 will be showen in 7em bcz it count parent(body) and its(h1) font size

this problem is overcome in css3 by using rem. where each tag take its own frontsize spicified.

so rem is best when compared to px/em/%