const Skeleton = () => {
  /*helps to avoid blank screens while loading*/
  return (
    <div className="product-grid">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="skeleton-card">
          <div className="skeleton-img"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text small"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;