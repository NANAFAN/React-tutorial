import Image from "./Image";
import Loading from "./Loading";

function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }
    return (
      <div className="columns is-vcentered is-multiline">
      {/* map配列による動作 */}
       {urls.map((url) => {
        // 画像を描画するreturn
        return (
          <div key={url} className="column is-3">
            {/* JSX(Image関数)の呼び出し、urlをsrcに格納してからImage関数のpropsにデータ引き渡し */}
            <Image src={url} />
          </div>
        );
      })}
      </div>
    );
  }

  export default Gallery;