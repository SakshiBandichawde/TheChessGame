//Inserting the Images

function insertImg(){

    document.querySelectorAll('.box').forEach(image => {

        if(image.innerText.length!==0){
            if(image.innerText=='Wpawn'|| image.innerText=='Bpawn'){
                image.innerHTML=`${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor='pointer'
            }
            else{
                image.innerHTML=`${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor='pointer'
            }
        }
        
    })
}
insertImg()


//colour

function colour(){
    const color=document.querySelectorAll('.box')

    color.forEach(color => {

        getId=color.id
        arr=Array.from(getId)
        arr.shift()
        aside=eval(arr.pop())
        aup=eval(arr.shift())
        a=aside+aup


        if(a%2==0){
            color.style.backgroundColor='rgb(250,200,150)'
        }
        if(a%2!==0){
            color.style.backgroundColor='rgb(80,80,50)'
        }


    })
}
colour()

//To read the same team element
function red(){
    document.querySelectorAll('.box').forEach(i1 => {
        if(i1.style.backgroundColor=='pink'){
            document.querySelectorAll('.box').forEach(i2 => {

                if(i2.style.backgroundColor=='green' && i2.innerText.length!==0){

                    greenText=i2.innerText
                    pinkText=i1.innerText
                    pinkColor=((Array.from(pinkText)).shift()).toString()
                    greenColor=((Array.from(greenText)).shift()).toString()

                    if(pinkColor==greenColor){
                        i2.style.backgroundColor='rgb(253,60,60)'
                    }

                }
            })
        }
    })
}



tog=1
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click',function () {

        if(item.style.backgroundColor=='green' && item.innerText.length==0){
            tog=tog+1
        }

        else if(item.style.backgroundColor=='green' && item.innerText.length!==0){
            
            document.querySelectorAll('.box').forEach(i =>{
                if(i.style.backgroundColor=='pink'){
                    pinkId=i.id
                    pinkText=i.innerText

                    document.getElementById(pinkId).innerText=''
                    item.innerText=pinkText
                    colour()
                    insertImg()
                    tog=tog+1
                }
            })
        }
    


      getId=item.id
      arr=Array.from(getId)
      arr.shift()
      aside=eval(arr.pop())
      arr.push('0')
      aup=eval(arr.join(''))
      a=aside+aup

      //Function to display the available paths for all pieces

     function whosTurn(toggle){
     //pwan
     if(item.innerText==`${toggle}pawn`){
        item.style.backgroundColor='pink'

        if(tog%2!==0 && aup<800){
            
            if(document.getElementById(`b${a+100}`).innerText.length==0){
                document.getElementById(`b${a+100}`).style.backgroundColor='green'
            }
            if(aside<8 && document.getElementById(`b${a+100+1}`).innerText.length!==0){
                document.getElementById(`b${a+100+1}`).style.backgroundColor='green'
            }
            if(aside>1 && document.getElementById(`b${a+100-1}`).innerText.length!==0){
                document.getElementById(`b${a+100+1}`).style.backgroundColor='green'
            }
        }
        if(tog%2==0 && aup>100){
            
            if(document.getElementById(`b${a-100}`).innerText.length==0){
                document.getElementById(`b${a-100}`).style.backgroundColor='green'
            }
            if(aside<8 && document.getElementById(`b${a-100+1}`).innerText.length!==0){
                document.getElementById(`b${a-100+1}`).style.backgroundColor='green'
            }
            if(aside>1 && document.getElementById(`b${a-100-1}`).innerText.length!==0){
                document.getElementById(`b${a-100-1}`).style.backgroundColor='green'
            }
        }
    }
    

    //king
    if(item.innerText==`${toggle}king`){

        if(aside<8){
            document.getElementById(`b${a+1}`).style.backgroundColor='green'
        }
        if(aside>1){
            document.getElementById(`b${a-1}`).style.backgroundColor='green'
        }
        if(aup<800){
            document.getElementById(`b${a+100}`).style.backgroundColor='green'
        }
        if(aup>100){
            document.getElementById(`b${a-100}`).style.backgroundColor='green'
        }
        if(aup>100&&aside<8){
            document.getElementById(`b${a-100+1}`).style.backgroundColor='green'
        }
        if(aup>100&&aside>1){
            document.getElementById(`b${a-100-1}`).style.backgroundColor='green'
        }
        if(aup<800&&aside<8){
            document.getElementById(`b${a+100+1}`).style.backgroundColor='green'
        }
        if(aup<800&&aside>1){
            document.getElementById(`b${a+100-1}`).style.backgroundColor='green'
        }

        item.style.backgroundColor='pink'
    }

    //rook
     
    if(item.innerText==`${toggle}rook`){

        for(let i=1;i<9;i++){
            if((a+i*100)<900 && document.getElementById(`b${a+i*100}`).innerText==0){
                document.getElementById(`b${a+i*100}`).style.backgroundColor='green'
            }
            else if((a+i*100)<900 && document.getElementById(`b${a+i*100}`).innerText!==0){
                document.getElementById(`b${a+i*100}`).style.backgroundColor='green'
                break
            }
        }
       
        for(let i=1;i<9;i++){
            if((a-i*100)>100 && document.getElementById(`b${a-i*100}`).innerText==0){
                document.getElementById(`b${a-i*100}`).style.backgroundColor='green'
            }
            else if((a-i*100)>100 && document.getElementById(`b${a-i*100}`).innerText!==0){
                document.getElementById(`b${a-i*100}`).style.backgroundColor='green'
                break
            }
        }

        for(let i=1;i<9;i++){
            if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText!==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
                break
            }
        }
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText!==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
                break
            }
        }

        item.style.backgroundColor='pink'
    }

    //Bishop


    if(item.innerText==`${toggle}bishop`){

        for(let i=1;i<9;i++){
            if(i<(900-aup)/100&&i<9-aside && document.getElementById(`b${a+i*100+i}`).innerText==0){
                document.getElementById(`b${a+i*100+i}`).style.backgroundColor='green'
            }
            else if(i<(900-aup)/100&&i<9-aside && document.getElementById(`b${a+i*100+i}`).innerText!==0){
                document.getElementById(`b${a+i*100+i}`).style.backgroundColor='green'
                break
            }
        }
       
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText!==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
                break
            }
        }

        for(let i=1;i<9;i++){
            if(i<(900-aup)/100&&i<aside && document.getElementById(`b${a+i*100-i}`).innerText==0){
                document.getElementById(`b${a+i*100-i}`).style.backgroundColor='green'
            }
            else if(i<(900-aup)/100&&i<aside && document.getElementById(`b${a+i*100-i}`).innerText!==0){
                document.getElementById(`b${a+i*100-i}`).style.backgroundColor='green'
                break
            }
        }
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText!==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
                break
            }
        }

        item.style.backgroundColor='pink'
    }


    //queen

    if(item.innerText==`${toggle}queen`){

    

        for(let i=1;i<9;i++){
            if((a+i*100)<900 && document.getElementById(`b${a+i*100}`).innerText==0){
                document.getElementById(`b${a+i*100}`).style.backgroundColor='green'
            }
            else if((a+i*100)<900 && document.getElementById(`b${a+i*100}`).innerText!==0){
                document.getElementById(`b${a+i*100}`).style.backgroundColor='green'
                break
            }
        }
       
        for(let i=1;i<9;i++){
            if((a-i*100)>100 && document.getElementById(`b${a-i*100}`).innerText==0){
                document.getElementById(`b${a-i*100}`).style.backgroundColor='green'
            }
            else if((a-i*100)>100 && document.getElementById(`b${a-i*100}`).innerText!==0){
                document.getElementById(`b${a-i*100}`).style.backgroundColor='green'
                break
            }
        }

        for(let i=1;i<9;i++){
            if((a-i)>(aup) && document.getElementById(`b${a-i}`).innerText==0){
                document.getElementById(`b${a-i}`).style.backgroundColor='green'
            }
            else if((a-i)>(aup) && document.getElementById(`b${a-i}`).innerText!==0){
                document.getElementById(`b${a-i}`).style.backgroundColor='green'
                break
            }
        }
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText!==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
                break
            }
        }

        for(let i=1;i<9;i++){
            if(i<(900-aup)/100&&i<9-aside && document.getElementById(`b${a+i*100+i}`).innerText==0){
                document.getElementById(`b${a+i*100+i}`).style.backgroundColor='green'
            }
            else if(i<(900-aup)/100&&i<9-aside && document.getElementById(`b${a+i*100+i}`).innerText!==0){
                document.getElementById(`b${a+i*100+i}`).style.backgroundColor='green'
                break
            }
        }
       
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<9-aside && document.getElementById(`b${a-i*100+i}`).innerText!==0){
                document.getElementById(`b${a-i*100+i}`).style.backgroundColor='green'
                break
            }
        }

        for(let i=1;i<9;i++){
            if(i<(900-aup)/100&&i<aside && document.getElementById(`b${a+i*100-i}`).innerText==0){
                document.getElementById(`b${a+i*100-i}`).style.backgroundColor='green'
            }
            else if(i<(900-aup)/100&&i<aside && document.getElementById(`b${a+i*100-i}`).innerText!==0){
                document.getElementById(`b${a+i*100-i}`).style.backgroundColor='green'
                break
            }
        }
        for(let i=1;i<9;i++){
            if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
            }
            else if(i<aup/100&&i<aside && document.getElementById(`b${a-i*100-i}`).innerText!==0){
                document.getElementById(`b${a-i*100-i}`).style.backgroundColor='green'
                break
            }
        }

       item.style.backgroundColor='pink'
    }

    //knight

    if(item.innerText==`${toggle}knight`){

        if(aside<7&&aup<800){
            document.getElementById(`b${a+100+2}`).style.backgroundColor='green'
        }
        if(aside<7&&aup>200){
            document.getElementById(`b${a-100+2}`).style.backgroundColor='green'
        }
        if(aside<8&&aup<700){
            document.getElementById(`b${a+200+1}`).style.backgroundColor='green'
        }
        if(aside>1&&aup<700){
            document.getElementById(`b${a+200-1}`).style.backgroundColor='green'
        }
        if(aside>2&&aup<800){
            document.getElementById(`b${a-2+100}`).style.backgroundColor='green'
        }
        if(aside>2&&aup>100){
            document.getElementById(`b${a-2-100}`).style.backgroundColor='green'
        }
        if(aside<8&&aup>200){
            document.getElementById(`b${a-200+1}`).style.backgroundColor='green'
        }
        if(aside>1&&aup>200){
            document.getElementById(`b${a-200-1}`).style.backgroundColor='green'
        }

        item.style.backgroundColor='pink'

    } 
 }

    //toggling the turn

    if(tog%2!==0){
        document.getElementById('tog').innerText="Now It's White's turn"
        whosTurn('W')
    }
    if(tog%2==0){
        document.getElementById('tog').innerText="Now It's Black's Turn"
        whosTurn('B')
    }
    red()


    //Winning

    numOfKings=0

    document.querySelectorAll('.box').forEach(win => {
        if(win.innerText=='Wking'|| win.innerText=='Bking'){
            numOfKings+=1
        }
    })

    if(numOfKings==1){
        setTimeout(() => {
            if(tog%2==0){
                alert('White Wins!')
                location.reload()
            }
            else if(tog%2!==0){
                alert('Black Wins!')
                location.reload()
            }
        },100)
    }


})

})

//Moving the Element
document.querySelectorAll('.box').forEach(hathiTest => {
    hathiTest.addEventListener('click',function (){

        if(hathiTest.style.backgroundColor=='pink'){

            pinkId=hathiTest.id
            pinkText=hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click',function () {
                   if(hathiTest2.style.backgroundColor=='green' && hathiTest2.innerText==0){
                    document.getElementById(pinkId).innerText=''
                    hathiTest2.innerText=pinkText
                    colour()
                    insertImg()
                   }
                })
                
            })
        }
    })
})





//Prevents from selecting multiple elements

z=0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click',function (){
        z=z+1
        if(z%2==0 && ee.style.backgroundColor!=='green'){
            colour()
        }
    })
})







