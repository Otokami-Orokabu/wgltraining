const main = () =>{
    console.log("hello world");

    // #canvas 要素の取得
    const canvas = document.querySelector("#webgl-canvas");

    if(!(canvas instanceof HTMLCanvasElement)){
        throw new Error(`<canvas>要素がありません。`);
    }

    // WebGL レンダリングコンテキストの取得
    const gl = canvas.getContext(`webgl`);
    if(!gl) {
        throw new Error(`WebGL の初期化に失敗しました。`);
    }

}
window.onload = main;