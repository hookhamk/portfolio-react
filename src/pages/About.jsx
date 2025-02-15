export default function Resume() {
  return (
    <div className="container pt-4">
      <h2>Kelly Hookham</h2>
      <p>
        As an experienced HR professional and passionate software developer, I am
        excited to help you navigate your HR and software needs. 
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>HR Certified</h3>
                <p className="lead mb-0">
                  Senior Certified HR Professional
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Bootcamp Programmer</h3>
                <p className="lead mb-0">
                  Fast at learning and resourceful when it comes to coding!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Highly Creative</h3>
                <p className="lead mb-0">
                  Ready to take your ideas and create software focused on the end user's experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        Together we can keep growing and make wonderful things!
      </p>
    </div>
  );
}
