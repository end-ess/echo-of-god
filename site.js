/* 神之回响官网公用脚本（2026-10-21）
   联系邮箱用脚本拼出来，避免被爬虫直接收进垃圾邮件名单；没有脚本时页面里显示 “end1essenly [at] gmail.com”。 */
(function(){
 var addr=['end1essenly','gmail.com'].join('@');
 var els=document.querySelectorAll('[data-mail]');
 for(var i=0;i<els.length;i++){var a=document.createElement('a');a.href='mailto:'+addr;a.textContent=addr;if(els[i].getAttribute('data-mail')==='big')a.style.fontSize='17px';els[i].textContent='';els[i].appendChild(a);}
})();
