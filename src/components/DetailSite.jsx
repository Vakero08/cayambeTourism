const DetailSite = ({ currentItem }) => {
  let src = currentItem?.link?.split("=")[1];
  return (
    <div className="bg-[#ffffff] border rounded-lg border-solid border-slate-500 shadow-md  mx-auto my-5 min-w-[600px] max-w-[900px] p-4">
      <h3 className="text-black antialiased uppercase text-center">Detalle Sitio</h3>
      <div className="my-2">
        <h4 className="text-zinc-800 font-bold inline">Lugar:</h4>
        <span className="text-zinc-500 px-1">{currentItem.name}</span>
      </div>
      <div className="my-2">
        <h4 className="text-zinc-800 font-bold inline">Descripción:</h4>
        <span className="text-zinc-500 px-1">{currentItem.description}</span>
      </div>
      <div className="my-2">
        <h4 className="text-zinc-800 font-bold inline">Precio:</h4>
        <span className="text-zinc-500 px-1 italic">N/A</span>
      </div>
      {currentItem.link ? (
        <div className="my-2">
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
              src={`https://www.youtube.com/embed/${src}`}
              title="Youtube Player"
              frameborder="0"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailSite;
