

//関数Imagesは何かを引数としてもってきている（何かというのは変数srcのデータ）
function Image(props) {
    //""内はチュートリアルで使用しているbulmaというCSSモジュールのひとつ
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
  }
  export default Image;