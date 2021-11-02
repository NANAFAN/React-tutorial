//api.jsでAPI取得、importで適用
import Header from "./Header";
import Footer from "./Footer";
import Main from "./main";
import { useEffect, useState } from "react";
import { fetchImages } from "./api";
  
  function App() {

    const [urls, setUrls] = useState(null);
    //74行目のreturnでHTMLの描画が終わるとuseeffectが発動
    useEffect(() => {
        fetchImages("shiba").then((urls) => {
         setUrls(urls);
        });
    }, []);
    return (
      <div>
        <Header />
        <Main urls = {urls} />
        <Footer />
      </div>
    );
  }
  
  
  //98行目のApp関数をindex.jsにexport
  export default App;
