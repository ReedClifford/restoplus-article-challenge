const ArticleCard = ({ children, img }) => {
  return (
    <div
      className=" w-full  border rounded-md relative bg-gradient-to-tr
     from-neutral-700 to-neutral-800 p-10 text-neutral-300 "
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 object-cover object-center h-full w-full mix-blend-overlay z-0 rounded-md"
      />
      <div className="z-50 relative flex flex-col gap-4 items-start">
        {children}
      </div>
    </div>
  );
};

export default ArticleCard;
