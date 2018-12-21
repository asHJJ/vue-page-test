window.onload = function(){
    let guideItems = document.querySelectorAll('footer .guide-item');
    let sections = document.querySelectorAll('#content section');
    guideItems.forEach(function(item,index){
        item.onclick = function(){
            guideItems.forEach(function(item,index){
                item.className = 'guide-item';
                sections[index].className = '';

            })
            // 2. 给当前触发事件的元素添加active
              this.className = 'guide-item active'
               sections[index].className = 'on'

        }
    })
    // for(let i=0;i<guideItems.length;i++){
    //     guideItems[i].onclick = function(){
    //
    //         for(var j =0 ;j<guideItems.length;j++){
    //            guideItems[j].className = 'guide-item'
    //             sections[j].className = ''
    //         }
    //         // 2. 给当前触发事件的元素添加active
    //         this.className = 'guide-item active'
    //         sections[i].className = 'on'
    //
    //     }
    // }

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
        }
    })

}