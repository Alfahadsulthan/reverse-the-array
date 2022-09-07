let problem1=[],problem2=[],a=0,b=10,c=1,d

function onclick(){
    while(a<b){
        problem1[a]=c
        a++
        c++
    }
    document.write("problem1 :"+problem1)
    document.write("<br>")
    a=0
    c=problem1.length-1
    while(a<b){
        problem2[c]=problem1[a]
        a++
        c--
    }
    document.write("problem2 :"+problem2)
}
var button=document.getElementById('b1')
button.addEventListener('click',onclick)