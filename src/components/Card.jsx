const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 m-2">
    {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;
