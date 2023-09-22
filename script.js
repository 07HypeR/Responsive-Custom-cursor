var main = document.querySelector(".main")
var curs = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
curs.style.left = dets.x+"px"
curs.style.top = dets.y+"px"
})
main.addEventListener("touchmove", function(dets){
    curs.style.left = dets.x+"px"
    curs.style.top = dets.y+"px"
    })