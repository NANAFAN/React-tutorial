//npm installでReactを適応したからこのプロジェクト内でfrom reactを認識できる
import { fetchImages } from "./api";
import Gallery from "./Gallery";
 

 //アプリケーションの中心
  //上記プログラミングで作成した部品をmain関数内で使用する
  //var,let,const（変数宣言）
  //usestateを使用する際は配列の中に第一引数、第二引数で第一引数の状態を変える
  function Main(photo) {
    const { urls } = photo;

    return (
      <main>
        <section className="section">
          <div className="container">
          <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }

export default Main;
