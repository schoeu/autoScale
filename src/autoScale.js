/**
 * Created by IAOC on 2014/12/10.
 */
/*
*   $("div img").auto({
*       width:140,
*       height:140,
*   });
* */
(function($){
    jQuery.fn.extend({
        autoScale:function(options){
            if(typeof options == "object"){
                var w = options.width,
                    h = options.height;
                $(this).each(function(){
                    $(this).bind("load",function(){
                        var imgW = $(this).width(),
                            imgH = $(this).height();
                        if(imgW >= imgH){
                            $(this).height(h).css("marginLeft",-(h*imgW/imgH-w)/2+"px");;
                        }else{
                            $(this).width(w).css("marginTop",-(w*imgH/imgW-h)/2+"px");
                        }
                        $(this).wrap("<div></div>").parent().css({width:w,height:h,overflow:"hidden"});
                    });
                });
            }else{
                throw new Error("please set arguments in object type.");
            }
        }
    })
})(jQuery);