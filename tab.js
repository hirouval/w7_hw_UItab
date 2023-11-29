(() => {
    const $doc = document;
    const $tab = $doc.getElementById('js-nav');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active'; //変わらない定数は大文字で書く
    const navLen = $nav.length;
  
    // console.log('$contents' , $contents);
  
    //イニシャライズ（一番最初に動いてほしい命令）初期化
    // 一番左のコンテンツの内容を表示させる（他は表示させない）
    const init = () => {
      $content[0].style.display = 'block';
    };
    init();
    //クリックしたら起こるイベント
    const handleClick = (e) => {
      e.preventDefault(); //リンクのイベントをなくす命令
  
      console.log('e!' , e);
      //クリックされたnavとそのdataを取得
      const $this = e.target;
      const targetVal = $this.dataset.nav;
  
      //不要なnav、content全て一旦リセットする
      let index = 0;
      while(index < navLen){
        $content[index].style.display = 'none';
        $nav[index].classList.remove(ACTIVE_CLASS);
        index++;
      }
  
      // console.log('$targetVal' , targetVal);
  
      //対象のコンテンツをアクティブ化する
      $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
      $nav[targetVal].classList.add(ACTIVE_CLASS);
    
    };
    //全nav要素に対して関数を適用
    let index = 0;
    while(index < navLen){
      $nav[index].addEventListener('click' , (e) => handleClick(e));
      index++;
    }
  })();
  