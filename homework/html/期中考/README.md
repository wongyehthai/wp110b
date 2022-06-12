## 本程式參考來源：https://developer.mozilla.org/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
## 部分采用：https://www.w3schools.com/ 上的程式碼
## 圖片應用來源 ：

1.磚塊(https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg)<br>
2.木板(https://muku-store.com/user_data/img/contents/basic_knowledge/about_wood02.jpg)<br>
3.背景天空(https://th.bing.com/th/id/OIP.JIwIoRJO03tbuzWgfvcvCgHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7)<br>
4.球(https://wallpapercave.com/wp/wp2554608.jpg)
## 游戲説明<br>
這是一款很普通的彈球游戲，采用了canvas來進行繪製並達成游戲效果。<br>
勝利條件為打掉所有可見的磚塊。<br>
游戲上方顯示的分別為Score分數，Time計時，Mode模式，Lives生命值。
你每打掉一塊磚塊Score將會增加一分，Time只會在你的球在移動的時候才進行計時動作，Mode預設值為easy簡單模式，Lives你的球沒接到的時候將會減少一點生命值，生命值歸零時游戲失敗。
球開始將跟隨你木板進行移動，到你想要的位置時，按空格鍵Space后，球才會離開目標開始游戲，生命值減一時，球也會回到木板上，需再次按空格鍵Space后，球才會再次離開木板。
期間可隨意調模式類型：
## 簡單模式easy和普通模式normal的磚塊生命值皆爲1，差別只在速度上。
## 困難模式hard的速度比normal模式要快且此時磚塊生命值為2，意思就是說需要玩家擊中兩次才可以擊毀磚塊，且每次玩家生命值減一時，磚塊若沒有被摧毀，其生命值也會回復成2。
下邊的按鈕依序為困難模式，普通模式，簡單模式，游戲重置。<br>
游戲重置后，游戲將回歸到最初，玩家需再度選擇模式才可以游玩自己想玩的難度（預設模式為簡單模式）。<br>
## 游戲失敗后網頁將會跳出Game Over的字眼。
## 游戲勝利后網頁將會跳出勝利祝語，並顯示你的通關時間。
以上為這款小游戲的所有功能，希望大家的困難模式能玩得開心。
## 畫面有所卡頓或閃爍的話請大家包容體諒：D
## 游戲製作過程及心得
上網偶然發現的簡單游戲製作過程，且寫得非常之詳細，於是乎開始一步一步地跟著參考質料的步驟做後，漸漸地瞭解了canvas這個東西。途中有嘗試在ball的fillStyle中導入圖片，
結果發現圖片不會跟著球移動最後就選擇了一些背景圖來當作球。
過程中嘗試將自己的想法加入了其中，雖然最終成果並沒有如自己預期的完美，希望大家還是會喜歡。



