function Header() {

    //JSXの文法（HTMLを描画する処理）
    //""内はチュートリアルで使用しているbulmaというCSSモジュールのひとつ
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Dog Images</h1>
          </div>
        </div>
      </header>
    );
  }

  export default Header;