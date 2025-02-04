

function Goods({cookies, eggs, frogs}) {

    const cookiesHtml = cookies.map((cookie, index) => <div className="goods-item" key={index}>{cookie}</div>);

    const eggsHtml = eggs.map((egg, index) => <div className="goods-item" key={index}>{egg}</div>);

    const frogsHtml = frogs.map((frog, index) => <div className="goods-item" key={index}>{frog}</div>);

  return (
    <>
        <section className="goods-container">
            {cookiesHtml}
        </section>
        <section className="goods-container">
            {eggsHtml}
        </section>
        <section className="goods-container">
            {frogsHtml}
        </section>
    </>
  )
}

export default Goods