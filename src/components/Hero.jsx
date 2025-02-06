function Hero() {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-buttons">
            <button className="shop-now">SHOP NOW</button>
            <button className="category">Category</button>
          </div>
          <div className="shop-at">
            <p>Available on</p>
            <div className="brand-logos">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>
    </>
  );
}

export default Hero;
