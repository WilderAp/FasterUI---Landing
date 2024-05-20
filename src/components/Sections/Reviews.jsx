import texts from "../../sections.json";

function Reviews() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}

        <div className="card w-50 md:w-[700px] h-[200px] bg-white image-full">
          <figure>
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1715832407/FasterUI/pl25qcqk6bdtd8lk8fop.png"
              alt="Faster"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Faster!</h2>
            <p>Ready to elevate your online presence? </p>
            <div className="card-actions justify-end">
              <button type="button" className="btn btn-primary">
                ¡Contact us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
