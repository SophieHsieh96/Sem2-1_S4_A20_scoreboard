let players = [
    { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
    { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
    { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
    { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
    { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
  ]
  const dataPanel = document.querySelector('#data-panel')
  let html = ""
  function displayPlayerList(players){
    players.forEach(player =>{
      html += `
      <tr>
        <td>${player.name}</td>
        <td>
          <span>${player.pts}</span>
          <i class ='fa fa-plus-circle up'></i>
          <i class ='fa fa-minus-circle down'></i>
         </td>
        <td>
          <span>${player.reb}</span>
          <i class ='fa fa-plus-circle up'></i>
          <i class ='fa fa-minus-circle down'></i>
         </td>
        <td>
          <span>${player.ast}</span>
          <i class ='fa fa-plus-circle up'></i>
          <i class ='fa fa-minus-circle down'></i>
        </td>
        <td>
          <span>${player.stl}</span>
          <i class ='fa fa-plus-circle up'></i>
          <i class ='fa fa-minus-circle down'></i>
       </td>
       <td>
         <span>${player.blk}</span>
         <i class ='fa fa-plus-circle up'></i>
         <i class ='fa fa-minus-circle down'></i>
       </td>
     </tr>
    `
    })
    return html
  }
  
  dataPanel.innerHTML = displayPlayerList(players)
  
  //直接在父元素掛監聽器
  dataPanel.addEventListener('click', function(event){
    //按到加減按鈕才觸發事件
    if(event.target.matches('i.fa.fa-plus-circle.up')  || event.target.matches('i.fa.fa-minus-circle.down')){
      //取出按鈕觸發對應的得分數，並轉成數字
      let scorespan = event.target.parentElement.children[0]
      let score = parseInt(scorespan.textContent,10)
      //加按鈕則分數+1 減按鈕則-1
      if(event.target.matches('i.fa.fa-plus-circle.up')){
        score += 1
      }else{
        score -= 1
      }
      if(score <= 0){
        score = 0
      }
      //寫回span中
      scorespan.innerText = score
    }
  })