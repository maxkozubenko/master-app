import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  constructor() { }

  slideshowDuration = 4000;
  slideshow=document.querySelector('.main-content .slideshow');

  ngAfterViewInit(): void {
    // document.querySelector(document).ready(function() {
    //   document.querySelector('.slide').classList.add('is-loaded');
     
    //   document.querySelector('.slideshow .arrows .arrow').addEventListener('click',function(){
    //    slideshowNext(document.querySelector(this).closest('.slideshow'),document.querySelector(this).classList.contains('prev'));
    //  });
     
    //   document.querySelector('.slideshow .pagination .item').addEventListener('click',function(){
    //    slideshowSwitch(document.querySelector(this).closest('.slideshow'),document.querySelector(this).index());
    //  });
     
    //   document.querySelector('.slideshow .pagination').addEventListener('check',function(){
    //    var slideshow=document.querySelector(this).closest('.slideshow');
    //    var pages=document.querySelector(this).querySelector('.item');
    //    var index=slideshow.querySelector('.slides .is-active').index();
    //    pages.classList.remove('is-active');
    //    pages.eq(index).classList.add('is-active');
    //  });
     
     /* Lazyloading
     document.querySelector('.slideshow').each(function(){
       var slideshow=document.querySelector(this);
       var images=slideshow.querySelector('.image').not('.is-loaded');
       images.addEventListener('loaded',function(){
         var image=document.querySelector(this);
         var slide=image.closest('.slide');
         slide.classList.add('is-loaded');
       });
     */
     
  //    var timeout=setTimeout(function(){
  //      slideshowNext(slideshow,false,true);
  //    },slideshowDuration);
     
  //    slideshow.data('timeout',timeout);
  //    });
  // }


  
  // slideshowSwitch(slideshow: { data: (arg0: string, arg1: boolean | undefined) => void; querySelector: (arg0: string) => { (): any; new(): any; trigger: { (arg0: string): void; new(): any; }; }; attr: (arg0: string) => any; width: () => number; },index: any,auto: undefined){
  //   if(slideshow.data('wait')) return;
  
  //   var slides = slideshow.querySelector('.slide');
  //   var pages = slideshow.querySelector('.pagination');
  //   var activeSlide = slides.filter('.is-active');
  //   var activeSlideImage = activeSlide.querySelector('.image-container');
  //   var newSlide = slides.eq(index);
  //   var newSlideImage = newSlide.querySelector('.image-container');
  //   var newSlideContent = newSlide.querySelector('.slide-content');
  //   var newSlideElements=newSlide.querySelector('.caption > *');
  //   if(newSlide.is(activeSlide))return;
  
  //   newSlide.classList.add('is-new');
  //   var timeout=slideshow.data('timeout');
  //   clearTimeout(timeout);
  //   slideshow.data('wait',true);
  //   var transition=slideshow.attr('data-transition');
  //   if(transition=='fade'){
  //     newSlide.css({
  //       display:'block',
  //       zIndex:2
  //     });
  //     newSlideImage.css({
  //       opacity:0
  //     });
  
  //     TweenMax.to(newSlideImage,1,{
  //       alpha:1,
  //       onComplete:function(){
  //         newSlide.classList.add('is-active').classList.remove('is-new');
  //         activeSlide.classList.remove('is-active');
  //         newSlide.css({display:'',zIndex:''});
  //         newSlideImage.css({opacity:''});
  //         slideshow.querySelector('.pagination').trigger('check');
  //         slideshow.data('wait',false);
  //         if(auto){
  //           timeout=setTimeout(function(){
  //             slideshowNext(slideshow,false,true);
  //           },slideshowDuration);
  //           slideshow.data('timeout',timeout);}}});
  //   } else {
  //     if(newSlide.index()>activeSlide.index()){
  //       var newSlideRight=0;
  //       var newSlideLeft='auto';
  //       var newSlideImageRight=-slideshow.width()/8;
  //       var newSlideImageLeft='auto';
  //       var newSlideImageToRight=0;
  //       var newSlideImageToLeft='auto';
  //       var newSlideContentLeft='auto';
  //       var newSlideContentRight=0;
  //       var activeSlideImageLeft=-slideshow.width()/4;
  //     } else {
  //       var newSlideRight='';
  //       var newSlideLeft=0;
  //       var newSlideImageRight='auto';
  //       var newSlideImageLeft=-slideshow.width()/8;
  //       var newSlideImageToRight='';
  //       var newSlideImageToLeft=0;
  //       var newSlideContentLeft=0;
  //       var newSlideContentRight='auto';
  //       var activeSlideImageLeft=slideshow.width()/4;
  //     }
  
  //     newSlide.css({
  //       display:'block',
  //       width:0,
  //       right:newSlideRight,
  //       left:newSlideLeft
  //       ,zIndex:2
  //     });
  
  //     newSlideImage.css({
  //       width:slideshow.width(),
  //       right:newSlideImageRight,
  //       left:newSlideImageLeft
  //     });
  
  //     newSlideContent.css({
  //       width:slideshow.width(),
  //       left:newSlideContentLeft,
  //       right:newSlideContentRight
  //     });
  
  //     activeSlideImage.css({
  //       left:0
  //     });
  
  //     TweenMax.set(newSlideElements,{y:20,force3D:true});
  //     TweenMax.to(activeSlideImage,1,{
  //       left:activeSlideImageLeft,
  //       ease:Power3.easeInOut
  //     });
  
  //     TweenMax.to(newSlide,1,{
  //       width:slideshow.width(),
  //       ease:Power3.easeInOut
  //     });
  
  //     TweenMax.to(newSlideImage,1,{
  //       right:newSlideImageToRight,
  //       left:newSlideImageToLeft,
  //       ease:Power3.easeInOut
  //     });
  
  //     TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
  //       newSlide.classList.add('is-active').classList.remove('is-new');
  //       activeSlide.classList.remove('is-active');
  //       newSlide.css({
  //         display:'',
  //         width:'',
  //         left:'',
  //         zIndex:''
  //       });
  
  //       newSlideImage.css({
  //         width:'',
  //         right:'',
  //         left:''
  //       });
  
  //       newSlideContent.css({
  //         width:'',
  //         left:''
  //       });
  
  //       newSlideElements.css({
  //         opacity:'',
  //         transform:''
  //       });
  
  //       activeSlideImage.css({
  //         left:''
  //       });
  
  //       slideshow.querySelector('.pagination').trigger('check');
  //       slideshow.data('wait',false);
  //       if(auto){
  //         timeout=setTimeout(function(){
  //           slideshowNext(slideshow,false,true);
  //         },slideshowDuration);
  //         slideshow.data('timeout',timeout);
  //       }
  //     });
  //   }
  // }
  
  // slideshowNext(slideshow: { querySelector: (arg0: string) => any; },previous: boolean,auto: boolean | undefined){
  //   var slides=slideshow.querySelector('.slide');
  //   var activeSlide=slides.filter('.is-active');
  //   var newSlide=null;
  //   if(previous){
  //     newSlide=activeSlide.prev('.slide');
  //     if(newSlide.length === 0) {
  //       newSlide=slides.last();
  //     }
  //   } else {
  //     newSlide=activeSlide.next('.slide');
  //     if(newSlide.length==0)
  //       newSlide=slides.filter('.slide').first();
  //   }
  
  //   slideshowSwitch(slideshow,newSlide.index(),auto);
  // }
  
  // homeSlideshowParallax(){
  //   var scrollTop=document.querySelector(window).scrollTop;
  //   if(scrollTop>windowHeight) return;
  //   var inner=slideshow.querySelector('.slideshow-inner');
  //   var newHeight=windowHeight-(scrollTop/2);
  //   var newTop=scrollTop*0.8;
  
  //   inner.css({
  //     transform:'translateY('+newTop+'px)',height:newHeight
  //   });
  // }
  
  // if(document.querySelector('.main-content .slideshow').length > 1) {
  //   document.querySelector(window).addEventListener('scroll',homeSlideshowParallax);
  }

}
